import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (

<>
    <Head>


    <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags */}
        {/* Title  */}
        <title>sApp - App Landing Page | Homepage-2</title>
        {/* Favicon  */}
        <link rel="icon" href="assets/img/favicon.png" />
        {/* ***** All CSS Files ***** */}
        {/* Style css */}
        <link rel="stylesheet" href="assets/css/style.css" />


      <Script src="assets/js/active.js"></Script>
    <Script src="assets/js/jquery/jquery.min.js"></Script>

    <Script src="assets/js/bootstrap/popper.min.js"></Script>
    <Script src="assets/js/bootstrap/bootstrap.min.js"></Script>


    <Script src="assets/js/plugins/plugins.min.js"></Script>
    </Head>

    <div className="main">
        {/* ***** Header Start ***** */}
        <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
          <div className="container position-relative">
            <a className="navbar-brand" href="index.html">
              <img className="navbar-brand-regular" src="assets/img/logo/logo.png" alt="brand-logo" />
              <img className="navbar-brand-sticky" src="assets/img/logo/logo.png" alt="sticky brand-logo" />
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-inner">
              {/*  Mobile Menu Toggler */}
              <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <nav>
                <ul className="navbar-nav" id="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Home
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="index.html">Homepage-1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-2.html">Homepage-2</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-3.html">Homepage-3</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-4.html">Homepage-4</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-5.html">Homepage-5</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-6.html">Homepage-6</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#features">Features</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Pages
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="javascript:;">Inner Pages<span className="badge badge-pill badge-warning ml-2">New</span></a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="download.html">Download</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="newsletter.html">Newsletter</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="thank-you.html">Thank you</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="404.html">404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="javascript:;">Blog Pages</a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="blog-two-column.html">Blog- 2 Column</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="blog-three-column.html">Blog- 3 Column</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="blog-left-sidebar.html">Blog- Left Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="blog-right-sidebar.html">Blog- Right Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="javascript:;">Blog Details</a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="blog-details-left-sidebar.html">Blog Details- Left Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="blog-details-right-sidebar.html">Blog Details- Right Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="javascript:;">Accounts<span className="badge badge-pill badge-warning ml-2">New</span></a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="login.html">Login</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="signup.html">Signup</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="forgot.html">Reset Password</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a className="dropdown-item disabled" href="#">More Coming Soon</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#screenshots">Screenshots</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* ***** Header End ***** */}
        {/* ***** Welcome Area Start ***** */}
        <section id="home" className="section welcome-area bg-inherit h-100vh overflow-hidden">
          <div className="shapes-container">
            <div className="bg-shape" />
          </div>
          <div className="container h-100">
            <div className="row align-items-center h-100">
              {/* Welcome Intro Start */}
              <div className="col-12 col-md-7">
                <div className="welcome-intro">
                  <h1>Sadece zamanı değerli olanlara</h1>
                  <p className="my-4">Öğrenmeyi seven meraklı insanlar, verimli okuma, okumaya vakti olmayan meşgul insanlar ve hatta okumayı sevmeyen insanlar için mükemmeldir.</p>

                  <form  className="subscribe-form d-flex align-items-center" action="/api/form" method="post">

  <input
  className="form-control" placeholder="info@yourmail.com" 
  name="email"
    type="email"
    required
  />
  <input type="phone" name="phone" className="form-control " placeholder='05078671100'  required />
  <button type="submit" className="btn btn-bordered">Submit </button>
</form>
   
     
    
      <br />
                  <a href="#" className="btn">Get Started</a>
                </div>
              </div>
              <div className="col-12 col-md-5">
                {/* Welcome Thumb */}
                <div className="welcome-thumb" >
                  <img src="/assets/img/features/thumb-1.png"  alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Welcome Area End ***** */}

      <section id="features" className="section features-area overflow-hidden mt-5 ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2>Günde 1 Minikitap</h2>
                <h2>=</h2>
                <h2>Yılda 365 Yeni Fikir</h2>
                <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="features-slider-wrapper overflow-hidden">
                {/* Work Slider */}
                <ul className="features-slider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-723px, 0px, 0px)', transition: 'all 1.5s ease 0s', width: '1928px'}}><div className="owl-item cloned" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/3.jpg" alt="" />
                        </li></div><div className="owl-item cloned" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/4.jpg" alt="" />
                        </li></div><div className="owl-item" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/1.jpg" alt="" />
                        </li></div><div className="owl-item active" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/2.jpg" alt="" />
                        </li></div><div className="owl-item" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/3.jpg" alt="" />
                        </li></div><div className="owl-item" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/4.jpg" alt="" />
                        </li></div><div className="owl-item cloned" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/1.jpg" alt="" />
                        </li></div><div className="owl-item cloned" style={{width: '241px'}}><li className="slide-item">
                          <img src="assets/img/screenshots/2.jpg" alt="" />
                        </li></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div></ul>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-4 pt-md-0">
              <ul className="features-item">
                <li>
                  {/* Image Box */}
                  <div className="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight'}}>
                    {/* Featured Image */}
                    <div className="featured-img mr-3">
                      <img className="avatar-sm" src="assets/img/icon/featured-img/layers.png" alt="" />
                    </div>
                    {/* Icon Text */}
                    <div className="icon-text media-body align-self-center align-self-md-start">
                      <h3 className="mb-2">Oku veya Dinle</h3>
                      <p>Kurgu dışı en çok satanlardan önemli fikirleri saatler değil dakikalar içinde alın.</p>
                    </div>
                  </div>
                </li>
                <li>
                  {/* Image Box */}
                  <div className="image-box media icon-2 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInRight'}}>
                    {/* Featured Image */}
                    <div className="featured-img mr-3">
                      <img className="avatar-sm" src="assets/img/icon/featured-img/speak.png" alt="" />
                    </div>
                    {/* Icon Text */}
                    <div className="icon-text media-body align-self-center align-self-md-start">
                      <h3 className="mb-2">Bir sonraki okumanızı bulun</h3>
                      <p>Uzmanlar tarafından hazırlanan kitap listeleri ve kişiselleştirilmiş öneriler alın.</p>
                    </div>
                  </div>
                </li>
                <li>
                  {/* Image Box */}
                  <div className="image-box media icon-3 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight'}}>
                    {/* Featured Image */}
                    <div className="featured-img mr-3">
                      <img className="avatar-sm" src="assets/img/icon/featured-img/lock.png" alt="" />
                    </div>
                    {/* Icon Text */}
                    <div className="icon-text media-body align-self-center align-self-md-start">
                      <h3 className="mb-2">Her hafta onlarca yeni kitap</h3>
                      <p>Yüzlerce başlık. Her hafta yeni kitaplar. Kurgu dışı en iyi içeriği şimdi keşfedin!</p>
                    </div>
                  </div>
                </li>
                <li>
                  {/* Image Box */}
                  <div className="image-box media icon-4 px-1 py-3 py-md-4 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInRight'}}>
                    {/* Featured Image */}
                    <div className="featured-img mr-3">
                      <img className="avatar-sm" src="assets/img/icon/featured-img/support.png" alt="" />
                    </div>
                    {/* Icon Text */}
                    <div className="icon-text media-body align-self-center align-self-md-start">
                      <h3 className="mb-2">Zaman Kazanın ve Kısıtlamalardan Kurtulun</h3>
                      <p>Meşgulsünüz veya uzun okuyamıyor musunuz? Artık kitaplardaki önemli fikirleri dakikalar içerisinde edinebilirsiniz.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
       
        {/* ***** Discover Area Start ***** */}
        <section className="section discover-area bg-gray overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                {/* Discover Thumb */}
                <div className="service-thumb discover-thumb mx-auto text-center pt-5 pt-lg-0">
                  <img src="assets/img/discover/thumb-2.png" alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                {/* Discover Text */}
                <div className="discover-text px-0 px-lg-4 pt-4 pt-lg-0">
                  <h2 className="pb-4">Work faster with powerful tools.</h2>
                  {/* Check List */}
                  <ul className="check-list">
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center"><i className="fas fa-check" /></span>
                        <span className="media-body pl-3">Daha bilgili ol</span>
                      </div>
                    </li>
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center"><i className="fas fa-check" /></span>
                        <span className="media-body pl-3">Daha başarılı ol.</span>
                      </div>
                    </li>
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center"><i className="fas fa-check" /></span>
                        <span className="media-body pl-3">Daha sağlıklı ol</span>
                      </div>
                    </li>
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center"><i className="fas fa-check" /></span>
                        <span className="media-body pl-3">Daha iyi bir ebeveyn ol</span>
                      </div>
                    </li>
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center"><i className="fas fa-check" /></span>
                        <span className="media-body pl-3">Daha mutlu olmak</span>
                      </div>
                    </li>
                    <li className="py-1">
                      {/* List Box */}
                      <div className="list-box media">
                        <span className="icon align-self-center"><i className="fas fa-check" /></span>
                        <span className="media-body pl-3">En iyi kendin ol!</span>
                      </div>
                    </li>
                  </ul>
                  <div className="icon-box d-flex mt-3">
                    <div className="service-icon">
                      <span><i className="fas fa-bell" /></span>
                    </div>
                    <div className="service-icon px-3">
                      <span><i className="fas fa-envelope-open" /></span>
                    </div>
                    <div className="service-icon">
                      <span><i className="fas fa-video" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Discover Area End ***** */}
        {/* ***** Service Area Start ***** */}
        <section className="section service-area bg-inherit overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                {/* Service Text */}
                <div className="service-text pt-4 pt-lg-0">
                  <h2 className="mb-4">Share your photos with friends easily</h2>
                  {/* Service List */}
                  <ul className="service-list">
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span><i className="fab fa-buffer" /></span>
                      </div>
                      <div className="service-text media-body">
                        <p>Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                      </div>
                    </li>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span><i className="fas fa-brush" /></span>
                      </div>
                      <div className="service-text media-body">
                        <p>Customizable design dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                      </div>
                    </li>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span><i className="fas fa-burn" /></span>
                      </div>
                      <div className="service-text media-body">
                        <p>Drop ipsum dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                      </div>
                    </li>
                    {/* Single Service */}
                    <li className="single-service media py-2">
                      <div className="service-icon pr-4">
                        <span><i className="fas fa-cart-arrow-down" /></span>
                      </div>
                      <div className="service-text media-body">
                        <p>Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                      </div>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-bordered mt-4">Learn More</a>
                </div>
              </div>
              <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-md-block">
                {/* Service Thumb */}
                <div className="service-thumb mx-auto">
                  <img src="assets/img/services/thumb-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Service Area End ***** */}
        {/* ***** Work Area Start ***** */}
        <section className="section work-area bg-overlay overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Work Content */}
                <div className="work-content text-center">
                  <h2 className="text-white">How sApp works?</h2>
                  <p className="d-none d-sm-block text-white my-3 mt-sm-4 mb-sm-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                  <p className="d-block d-sm-none text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                {/* Single Work */}
                <div className="single-work text-center p-3">
                  {/* Work Icon */}
                  <div className="work-icon">
                    <img className="avatar-md" src="assets/img/icon/work/download.png" alt="" />
                  </div>
                  <h3 className="text-white py-3">Install the App</h3>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                {/* Single Work */}
                <div className="single-work text-center p-3">
                  {/* Work Icon */}
                  <div className="work-icon">
                    <img className="avatar-md" src="assets/img/icon/work/settings.png" alt="" />
                  </div>
                  <h3 className="text-white py-3">Setup your profile</h3>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                {/* Single Work */}
                <div className="single-work text-center p-3">
                  {/* Work Icon */}
                  <div className="work-icon">
                    <img className="avatar-md" src="assets/img/icon/work/app.png" alt="" />
                  </div>
                  <h3 className="text-white py-3">Enjoy the features!</h3>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Work Area End ***** */}
        {/* ***** Screenshots Area Start ***** */}
     
        {/* ***** Screenshots Area End ***** */}
        {/* ***** Testimonial Area Start ***** */}
        <section className="section testimonial-area ptb_100">
          <div className="container text-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="testimonials owl-carousel">
                  {/* Single Testimonial */}
                  <div className="single-testimonial p-3 p-md-5">
                    <img src="assets/img/avatar/avatar-1.png" className="mx-auto d-block" alt="" />
                    {/* Client Name */}
                    <h4 className="client-name mt-4 mb-2">John Doe</h4>
                    {/* Client Address */}
                    <h6 className="client-address fw-4">Los Angeles, California</h6>
                    {/* Client Rating */}
                    <div className="client-rating mt-2 mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    {/* Client Description */}
                    <div className="client-description">
                      {/* Client Text */}
                      <div className="client-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.</p>
                      </div>
                    </div>
                  </div>
                  {/* Single Testimonial */}
                  <div className="single-testimonial p-3 p-md-5">
                    <img src="assets/img/avatar/avatar-2.png" className="mx-auto d-block" alt="" />
                    {/* Client Name */}
                    <h4 className="client-name mt-4 mb-2">Jassica William</h4>
                    {/* Client Address */}
                    <h6 className="client-address fw-4">Los Angeles, California</h6>
                    {/* Client Rating */}
                    <div className="client-rating mt-2 mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    {/* Client Description */}
                    <div className="client-description">
                      {/* Client Text */}
                      <div className="client-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.</p>
                      </div>
                    </div>
                  </div>
                  {/* Single Testimonial */}
                  <div className="single-testimonial p-3 p-md-5">
                    <img src="assets/img/avatar/avatar-3.png" className="mx-auto d-block" alt="" />
                    {/* Client Name */}
                    <h4 className="client-name mt-4 mb-2">Johnson Smith</h4>
                    {/* Client Address */}
                    <h6 className="client-address fw-4">Los Angeles, California</h6>
                    {/* Client Rating */}
                    <div className="client-rating mt-2 mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    {/* Client Description */}
                    <div className="client-description">
                      {/* Client Text */}
                      <div className="client-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Testimonial Area End ***** */}
        {/* ***** Price Plan Area Start ***** */}
        <section id="pricing" className="section price-plan-area bg-gray overflow-hidden ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <h2>Unlock Full Power Of sApp</h2>
                  <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                  <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-lg-8">
                <div className="row price-plan-wrapper">
                  <div className="col-12 col-md-6">
                    {/* Single Price Plan */}
                    <div className="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s">
                      {/* Plan Thumb */}
                      <div className="plan-thumb">
                        <img className="avatar-lg" src="assets/img/pricing/basic.png" alt="" />
                      </div>
                      {/* Plan Title */}
                      <div className="plan-title my-2 my-sm-3">
                        <h4 className="text-uppercase">Basic</h4>
                      </div>
                      {/* Plan Price */}
                      <div className="plan-price pb-2 pb-sm-3">
                        <h2 className="fw-7"><small className="fw-6">$</small>49</h2>
                      </div>
                      {/* Plan Description */}
                      <div className="plan-description">
                        <ul className="plan-features">
                          <li className="border-top py-3">5GB Linux Web Space</li>
                          <li className="border-top py-3">5 MySQL Databases</li>
                          <li className="border-top py-3">24/7 Tech Support</li>
                          <li className="border-top border-bottom py-3">Daily Backups</li>
                        </ul>
                      </div>
                      {/* Plan Button */}
                      <div className="plan-button">
                        <a href="#" className="btn mt-4">Sign Up</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mt-4 mt-md-0">
                    {/* Single Price Plan */}
                    <div className="single-price-plan text-center p-5 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.4s">
                      {/* Plan Thumb */}
                      <div className="plan-thumb">
                        <img className="avatar-lg" src="assets/img/pricing/premium.png" alt="" />
                      </div>
                      {/* Plan Title */}
                      <div className="plan-title my-2 my-sm-3">
                        <h4 className="text-uppercase">Pro</h4>
                      </div>
                      {/* Plan Price */}
                      <div className="plan-price pb-2 pb-sm-3">
                        <h2 className="fw-7"><small className="fw-6">$</small>129</h2>
                      </div>
                      {/* Plan Description */}
                      <div className="plan-description">
                        <ul className="plan-features">
                          <li className="border-top py-3">10GB Linux Web Space</li>
                          <li className="border-top py-3">50 MySQL Databases</li>
                          <li className="border-top py-3">Unlimited Email</li>
                          <li className="border-top border-bottom py-3">Daily Backups</li>
                        </ul>
                      </div>
                      {/* Plan Button */}
                      <div className="plan-button">
                        <a href="#" className="btn mt-4">Sign Up</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-5">
              <p className="text-body pt-4 fw-5">Not sure what to choose? <a href="#">Contact Us</a></p>
            </div>
          </div>
        </section>
        {/* ***** Price Plan Area End ***** */}
        {/* ***** FAQ Area Start ***** */}
        <section className="section faq-area ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <h2 className="text-capitalize">Have questions? Look here</h2>
                  <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                  <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                {/* FAQ Content */}
                <div className="faq-content">
                  {/* sApp Accordion */}
                  <div className="accordion" id="sApp-accordion">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-10 col-lg-8">
                        {/* Single Accordion Item */}
                        <div className="card border-top-0 border-left-0 border-right-0 border-bottom">
                          {/* Card Header */}
                          <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseOne">
                                How to install sApp?
                              </button>
                            </h2>
                          </div>
                          <div id="collapseOne" className="collapse show" data-parent="#sApp-accordion">
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                            </div>
                          </div>
                        </div>
                        {/* Single Accordion Item */}
                        <div className="card border-top-0 border-left-0 border-right-0 border-bottom">
                          {/* Card Header */}
                          <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseTwo">
                                Can I get support from the Author?
                              </button>
                            </h2>
                          </div>
                          <div id="collapseTwo" className="collapse" data-parent="#sApp-accordion">
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </div>
                          </div>
                        </div>
                        {/* Single Accordion Item */}
                        <div className="card border-top-0 border-left-0 border-right-0 border-bottom">
                          {/* Card Header */}
                          <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseThree">
                                Do you have a free trail?
                              </button>
                            </h2>
                          </div>
                          <div id="collapseThree" className="collapse" data-parent="#sApp-accordion">
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                          </div>
                        </div>
                        {/* Single Accordion Item */}
                        <div className="card border-top-0 border-left-0 border-right-0 border-bottom">
                          {/* Card Header */}
                          <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseFour">
                                How can I edit my personal information?
                              </button>
                            </h2>
                          </div>
                          <div id="collapseFour" className="collapse" data-parent="#sApp-accordion">
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </div>
                          </div>
                        </div>
                        {/* Single Accordion Item */}
                        <div className="card border-top-0 border-left-0 border-right-0 border-bottom">
                          {/* Card Header */}
                          <div className="card-header bg-inherit border-0 p-0">
                            <h2 className="mb-0">
                              <button className="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseFive">
                                Contact form isn't working?
                              </button>
                            </h2>
                          </div>
                          <div id="collapseFive" className="collapse" data-parent="#sApp-accordion">
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** FAQ Area End ***** */}
        {/* ***** Download Area Start ***** */}
        <section className="section download-area overlay-dark ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9">
                {/* Download Text */}
                <div className="download-text text-center">
                  <h2 className="text-white">sApp is available for all devices</h2>
                  <p className="text-white my-3 d-none d-sm-block">sApp is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo. Aliquam optio, delectus, dolorem quod neque eos totam. Delectus quae animi tenetur voluptates doloribus commodi dicta modi aliquid deserunt, quis maiores nesciunt autem, aperiam natus.</p>
                  <p className="text-white my-3 d-block d-sm-none">sApp is available for all devices, consectetur adipisicing elit. Vel neque, cumque. Temporibus eligendi veniam, necessitatibus aut id labore nisi quisquam.</p>
                  {/* Store Buttons */}
                  <div className="button-group store-buttons d-flex justify-content-center">
                    <a href="#">
                      <img src="assets/img/icon/google-play.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/icon/app-store.png" alt="" />
                    </a>
                  </div>
                  <span className="d-inline-block text-white fw-3 font-italic mt-3">* Available on iPhone, iPad and all Android devices</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Download Area End ***** */}
        {/* ***** Subscribe Area Start ***** */}
        <section className="section subscribe-area ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="subscribe-content text-center">
                  <h2>Subscribe to get updates</h2>
                  <p className="my-4">By subscribing you will get newsleter, promotions adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.</p>
                  {/* Subscribe Form */}
                  <form className="subscribe-form">
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                    </div>
                    <button type="submit" className="btn btn-lg btn-block">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Subscribe Area End ***** */}
        {/*====== Contact Area Start ======*/}
        <section id="contact" className="contact-area bg-gray ptb_100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <h2 className="text-capitalize">Stay Tuned</h2>
                  <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                  <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-12 col-md-5">
                {/* Contact Us */}
                <div className="contact-us">
                  <p className="mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  <ul>
                    <li className="py-2">
                      <a className="media" href="#">
                        <div className="social-icon mr-3">
                          <i className="fas fa-home" />
                        </div>
                        <span className="media-body align-self-center">Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002</span>
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="media" href="#">
                        <div className="social-icon mr-3">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <span className="media-body align-self-center">+1 230 456 789-012 345 6789</span>
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="media" href="#">
                        <div className="social-icon mr-3">
                          <i className="fas fa-envelope" />
                        </div>
                        <span className="media-body align-self-center">exampledomain@domain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 pt-4 pt-md-0">
                {/* Contact Box */}
                <div className="contact-box text-center">
                  {/* Contact Form */}
                  <form id="contact-form" method="POST" action="https://theme-land.com/sapp/demo/assets/php/mail.php">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <input type="text" className="form-control" name="name" placeholder="Name" required  />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea className="form-control" name="message" placeholder="Message" required defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-lg btn-block mt-3"><span className="text-white pr-3"><i className="fas fa-paper-plane" /></span>Send Message</button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Contact Area End ======*/}
        {/*====== Height Emulator Area Start ======*/}
        <div className="height-emulator d-none d-lg-block" />
        {/*====== Height Emulator Area End ======*/}
        {/*====== Footer Area Start ======*/}
        <footer className="footer-area footer-fixed">
          {/* Footer Top */}
          <div className="footer-top ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                      <img className="logo" src="assets/img/logo/logo.png" alt="" />
                    </a>
                    <p className="mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                    {/* Social Icons */}
                    <div className="social-icons d-flex">
                      <a className="facebook" href="#">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="twitter" href="#">
                        <i className="fab fa-twitter" />
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="google-plus" href="#">
                        <i className="fab fa-google-plus-g" />
                        <i className="fab fa-google-plus-g" />
                      </a>
                      <a className="vine" href="#">
                        <i className="fab fa-vine" />
                        <i className="fab fa-vine" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">Useful Links</h3>
                    <ul>
                      <li className="py-2"><a href="#">Home</a></li>
                      <li className="py-2"><a href="#">About Us</a></li>
                      <li className="py-2"><a href="#">Services</a></li>
                      <li className="py-2"><a href="#">Blog</a></li>
                      <li className="py-2"><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">Product Help</h3>
                    <ul>
                      <li className="py-2"><a href="#">FAQ</a></li>
                      <li className="py-2"><a href="#">Privacy Policy</a></li>
                      <li className="py-2"><a href="#">Support</a></li>
                      <li className="py-2"><a href="#">Terms &amp; Conditions</a></li>
                      <li className="py-2"><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">Download</h3>
                    {/* Store Buttons */}
                    <div className="button-group store-buttons store-black d-flex flex-wrap">
                      <a href="#">
                        <img src="assets/img/icon/google-play-black.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/icon/app-store-black.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Copyright Area */}
                  <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    {/* Copyright Left */}
                    <div className="copyright-left">© Copyrights 2022 sApp All rights reserved.</div>
                    {/* Copyright Right */}
                    <div className="copyright-right">Made with <i className="fas fa-heart" /> By <a href="#">Themeland</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====== Footer Area End ======*/}
      </div>



    




    </>
)
}

export default Home
