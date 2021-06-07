import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Profile = () => {
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
      <AppLayout><div>내 프로필</div></AppLayout>;
    </>
  );
};

export default Profile;
