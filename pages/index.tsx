import type { NextPage } from 'next'
import Head from 'next/head'
import {Cv} from "../app/components/cv";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ramis Vakazov CV</title>
        <meta name="description" content="The CV of Ramis Vakazov" />
        <link rel="icon" href="/user-tie-solid.svg" />
        <meta property="og:url" content="https://ramis-vakazov-cv.ru/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Ramis Vakazov online CV" />
        <meta property="og:image" content="https://ramis-vakazov-cv.ru/_next/image?url=%2Fmy_bw_photo.png&w=640&q=75" />
      </Head>
      <Cv />
    </div>
  )
}

export default Home
