import type { Metadata } from 'next'
import AuthNav from '@components/AuthNav'

export const metadata: Metadata = {
  title: 'Authentication',
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthNav />
      {children}
    </div>
  )
}

export default AuthLayout
