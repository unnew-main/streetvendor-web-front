import { PageLayout } from '@components/layout/PageLayout'
import Link from 'next/link'
export const User = () => {
  return (
    <PageLayout>
      <>
        User
        <Link href={'/login'}>
          <a>go LoginPage</a>
        </Link>
      </>
    </PageLayout>
  )
}
