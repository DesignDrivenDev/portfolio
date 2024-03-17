import "@/styles/globals.scss";
import "@/styles/animate.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Padmalochan Barik - Portfolio</title>
        <meta
          name="description"
          content="Web devleper, frontend developer, React.js developer, Next.js developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
