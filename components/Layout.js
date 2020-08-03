import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta
          charSet="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>SpaceQL</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-200 min-h-screen">
        <Header />
        <div className="container mx-auto">
          <main className="mt-5">
            {children}
            <style jsx global>
              {`
                * {
                  font-family: 'Roboto Mono', monospace;
                }
                body {
                  margin: 0;
                }
                a {
                  color: #22bad9;
                }
              `}
            </style>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
