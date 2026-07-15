import { CookiesConsent } from '@/shared/components/common/cookies-consent'
import { Footer } from '@/shared/components/common/footer'
import { HighlightStripe } from '@/shared/components/common/highlight-stripe'
import { Navbar } from '@/shared/components/common/navbar'
import type { NextLayoutDefaultProps } from '@/shared/types/next-layout-default-props'

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
