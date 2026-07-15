import Beams from '@/shared/components/ui/beams'

import { Header } from './sections/header'

export const Admin = async () => {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-hidden lg:h-screen lg:flex-row lg:justify-between">
      <Header />
      <figure className="relative hidden w-full lg:block lg:max-w-1/2">
        <Beams
          beamHeight={15}
          beamNumber={12}
          beamWidth={2}
          lightColor="#ffffff"
          noiseIntensity={1.75}
          rotation={30}
          scale={0.2}
          speed={2}
        />
      </figure>
    </main>
  )
}
