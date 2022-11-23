import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
          <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
   
    <model-viewer src="Rpages/model/Rock_1.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="Rpages/model/poster.webp" shadow-intensity="1"> </model-viewer>

      </main>

      <Footer />
    </div>
  )
}
