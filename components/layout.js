import Head from 'next/head'
import LoginButton from './login'
import Navbar from './navbar'

export const siteTitle = 'Hikr'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <Navbar></Navbar>
      </Head>
      
      <LoginButton></LoginButton>
  </div>
  )
}
