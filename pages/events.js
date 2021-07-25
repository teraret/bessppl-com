import Head from 'next/head'
import BasicTable from '../src/EnhancedTable'

function events({data}) {
  return (
    <div>
      <Head>
        <title>Bessppl - High Performance Software Engineering Training and Super Efficient Team Building </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
        High Performance Software Engineering Training and Super Efficient Team Building 
        </h1>
        {JSON.stringify(data)}
        {/* <BasicTable data={data} /> */}
      </main>
    </div>
  )
}
// export async function getServerSideProps() {
//   const res = await fetch(`https://us-api.bessppl.com/events`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {}, 
//   }

// }

events.getInitialProps = async (ctx) => {
  const res = await fetch('https://app.bessppl.com/events')
  const data = await res.json()
  return { data }
}
export default events;