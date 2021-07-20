import Head from 'next/head';
import AboutContent from '../components/about-content/aboutcontent';

export default function About() {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="About me" />
      </Head>
      <AboutContent />
    </>
  );
}
