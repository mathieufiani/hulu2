import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let build Hulu 2.0</h1>
      {/**Header */}
      <Header></Header>
      {/**Nav */}
      {/**Results */}
    </div>
  );
}
