import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [contactRef, setContactRef] = useState(null);
  const [heroRef, setHeroRef] = useState(null);

  return (
    <>
      <Head>
        <title>Vaibhav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
         <p>HI</p>
        </main>
    </>
  );
}