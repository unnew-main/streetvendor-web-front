import { PageLayout } from '@components/layout/PageLayout'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
export const Login = () => {
  const responseGoogle = (response: any) => {
    console.log('response', response)
  }
  return (
    <PageLayout>
      <>
        <GoogleLogin
          clientId="233714446693-br236mr473bl0fkcb9st832ujspfcb4o.apps.googleusercontent.com"
          buttonText="Login"
          scope="https://www.googleapis.com/auth/drive.file"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          responseType={'id_token'}
          uxMode="redirect"
          isSignedIn={true}
          redirectUri="http://localhost:3000"
        />
        aaa
        <Link href={'/user/userPage'}>
          <a>go UserPage</a>
        </Link>
      </>
    </PageLayout>
  )
}
