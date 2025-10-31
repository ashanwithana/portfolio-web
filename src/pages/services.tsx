import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'

const ServicesRedirect: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/expertise')
  }, [router])

  return (
    <>
      <Head>
        <title>Redirecting to Expertise...</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ashanwithana.com/expertise" />
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <p>Redirecting to Expertise page...</p>
      </div>
    </>
  )
}

export default ServicesRedirect
