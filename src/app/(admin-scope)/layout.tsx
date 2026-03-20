import type { NextLayoutDefaultProps } from '@/types/next-layout-default-props'

const AdminScopePagesLayout: React.FC<NextLayoutDefaultProps> = async ({
  children
}) => {
  return <>{children}</>
}

export default AdminScopePagesLayout
