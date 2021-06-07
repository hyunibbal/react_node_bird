import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
          integrity="sha512-TwQPgKDbQrZuqSYrPGnDa8VwhOBxyK6XMTg4IaHArlOXe4cj05MUfiIh+v+bIOpQwfaIm8SmIEu95nVTkeNBeA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
