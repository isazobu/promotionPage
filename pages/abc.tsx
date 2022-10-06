import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const Abc: NextPage = () => {
  return (

<>
    <Head>
    <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags */}
        {/* Title  */}
        <title>sApp - App Landing Page | 404</title>
        {/* Favicon  */}
        <link rel="icon" href="assets/img/favicon.png" />
        {/* ***** All CSS Files ***** */}
        {/* Style css */}
        <link rel="stylesheet" href="assets/css/style.css" />


<Script src="assets/js/jquery/jquery.min.js"></Script>



<Script src="assets/js/bootstrap/popper.min.js"></Script>
<Script src="assets/js/bootstrap/bootstrap.min.js"></Script>


<Script src="assets/js/plugins/plugins.min.js"></Script>


<Script src="assets/js/active.js"></Script>
    </Head>

    <div>
    {/*====== Scroll To Top Area Start ======*/}
    <div id="scrollUp" title="Scroll To Top">
      <i className="fas fa-arrow-up" />
    </div>
    {/*====== Scroll To Top Area End ======*/}
    <div className="main">
      {/* ***** Error Area Start ***** */}
      <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
        <div className="container h-100">
          <div className="row align-items-center justify-content-center h-100">
            <div className="col-12 col-md-7">
              <div className="welcome-intro error-area text-center">
                <h1 className="text-white">404</h1>
                <p className="text-white my-4">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a href="index.html" className="btn sApp-btn text-uppercase">Go to Homepage</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Error Area End ***** */}
    </div>
  </div>


  </>)
}

export default Abc
