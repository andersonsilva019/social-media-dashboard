import Head from 'next/head';

import Header from '../components/Header';
import Cards from '../components/Cards';
import OverView from '../components/OverView';

export default function Home() {
  return (
      <div className="container">

        <Head>
          <title>Social-media-dashboard</title>
        </Head>

        <Header/>
        <Cards/>
        <OverView/>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            outline: 0;
            box-sizing: border-box;
          }

          html, body, #__next {
            height: 100%;
          }

          body{
            -webkit-font-smoothing: antialiased;
            background: hsl(230, 17%, 14%);
          } 

          body, input, button{
            font: 14px 'Inter', sans-serif;
          }

          ul {
            list-style: none;
          }
        `}</style>
      </div>
  )
}
