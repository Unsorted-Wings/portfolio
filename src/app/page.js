import React from 'react';
import Head from 'next/head';
import Editor from '@/components/Editor';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex">
        <div className="flex-grow">
          <Editor />
        </div>
      </div>
    </div>
  );
}
