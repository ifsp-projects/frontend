#!/bin/bash

set -e

echo "Authenticating with AWS using Vercel OIDC..."

CREDS=$(aws sts assume-role-with-web-identity \
  --role-arn "$AWS_ROLE_ARN" \
  --role-session-name "vercel-codeartifact" \
  --web-identity-token "$VERCEL_OIDC_TOKEN" \
  --duration-seconds 3600)

export AWS_ACCESS_KEY_ID=$(echo "$CREDS" | jq -r '.Credentials.AccessKeyId')
export AWS_SECRET_ACCESS_KEY=$(echo "$CREDS" | jq -r '.Credentials.SecretAccessKey')
export AWS_SESSION_TOKEN=$(echo "$CREDS" | jq -r '.Credentials.SessionToken')

echo "Getting CodeArtifact token..."

export CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token \
  --domain npm \
  --domain-owner 412898606600 \
  --region us-east-1 \
  --duration-seconds 0 \
  --query authorizationToken \
  --output text)

echo "Installing dependencies..."

pnpm install --frozen-lockfile