import Head from 'next/head'
import LoginButton from './login'
import LogoutButton from './logout'
import Profile from './profile'

export const siteTitle = 'Hikr'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <LoginButton>

        </LoginButton>
        <Profile>

        </Profile>
        <LogoutButton>

        </LogoutButton>
  </div>
  )
}
