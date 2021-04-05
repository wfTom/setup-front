import React from 'react'
import Head from 'next/head'
import Logo from '../assets/vercel.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Logo />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
