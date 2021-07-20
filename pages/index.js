import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

import Head from 'next/head';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>1000 Hour Shower</title>
        <meta
          name="desciption"
          content="I write about philosophy, psychology, hobbies, and other fun things; I take 1000hourshower s"
        />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_API_GOOGLE}
        />
      </Head>
      <FeaturedPosts post={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}
