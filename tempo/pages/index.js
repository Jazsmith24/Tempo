import Head from 'next/head';
import { useState } from 'react';

export default function Home() {

  const [songs, setsongs] = useState([
    {
      title: "I Hate You",
      artist: "SZA",
      img_src: "./images/i_hate_u.jpg",
      src: "https://soundcloud.com/szababy2/i-hate-you-rough?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Redbone",
      artist: "Childish Gambino",
      img_src: "./images/redbone.jpg",
      src: "https://soundcloud.com/childish-gambino/redbone?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
  ]);

  return (
    <div>
      <head>
        <title>Tempo</title>
        <meta name="keywords" content="music, streaming, entertainment"></meta>
      </head>
      <h1>components here</h1>
    </div>
  );
}