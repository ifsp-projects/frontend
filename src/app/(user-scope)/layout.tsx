import { CookiesConsent } from '@/components/shared/cookies-consent'
import { Footer } from '@/components/shared/footer'
import { HighlightStripe } from '@/components/shared/highlight-stripe'
import { Navbar } from '@/components/shared/navbar'
import type { NextLayoutDefaultProps } from '@/types/next-layout-default-props'

const UserScopePagesLayout: React.FC<NextLayoutDefaultProps> = async ({
  children
}) => {
  return (
    <>
      <Navbar />
      <HighlightStripe />
      {children}
      <CookiesConsent />
      <Footer />
    </>
  )
}

export default UserScopePagesLayout
