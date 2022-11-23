import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <title>Next.js Starter!</title>
         
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
   
    <model-viewer src="Rpages/model/Rock_1.glb"> </model-viewer>

      </main>

      <Footer />
    </div>
  )
}
