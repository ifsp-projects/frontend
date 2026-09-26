import { createRequire } from 'node:module'
import { spawnSync } from 'node:child_process'

const require = createRequire(import.meta.url)

const {
  STSClient,
  AssumeRoleWithWebIdentityCommand
} = require('@aws-sdk/client-sts')

const {
  CodeartifactClient,
  GetAuthorizationTokenCommand
} = require('@aws-sdk/client-codeartifact')

const region = 'us-east-1'

const roleArn = process.env.AWS_ROLE_ARN
const oidcToken = process.env.VERCEL_OIDC_TOKEN

if (!roleArn) {
  throw new Error('AWS_ROLE_ARN is missing')
}

if (!oidcToken) {
  throw new Error('VERCEL_OIDC_TOKEN is missing')
}

const sts = new STSClient({
  region
})

const assumedRole = await sts.send(
  new AssumeRoleWithWebIdentityCommand({
    RoleArn: roleArn,
    RoleSessionName: 'vercel-codeartifact',
    WebIdentityToken: oidcToken,
    DurationSeconds: 3600
  })
)

const credentials = assumedRole.Credentials

if (!credentials) {
  throw new Error('AWS did not return temporary credentials')
}

const codeartifact = new CodeartifactClient({
  region,
  credentials: {
    accessKeyId: credentials.AccessKeyId,
    secretAccessKey: credentials.SecretAccessKey,
    sessionToken: credentials.SessionToken
  }
})

const response = await codeartifact.send(
  new GetAuthorizationTokenCommand({
    domain: 'npm',
    domainOwner: '412898606600',
    durationSeconds: 0
  })
)

if (!response.authorizationToken) {
  throw new Error('CodeArtifact did not return an authorization token')
}

const result = spawnSync(
  'pnpm',
  ['install', '--frozen-lockfile'],
  {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      CODEARTIFACT_AUTH_TOKEN: response.authorizationToken
    }
  }
)

process.exit(result.status ?? 1)