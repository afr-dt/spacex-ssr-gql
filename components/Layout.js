import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          charSet="UTF-8"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>SpaceQL</title>
      </Head>
      <div>
        <Header />
        <div>
          <main className="mt-10">
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
    </>
  );
};

export default Layout;
