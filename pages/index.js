import Layout, { siteTitle } from '../components/layout';
import { Auth0Provider } from "@auth0/auth0-react";


export default function Home() {
  return (
    <>
    <Auth0Provider
      domain="dev-cbrxxy6f.us.auth0.com"
      clientId="FV1QEpTtYNXert5GOZaEsq3fwUD19Q77"
      redirectUri="http://localhost:3000"
    >
      <Layout home>

      </Layout>
    </Auth0Provider>
    </>
  )
}