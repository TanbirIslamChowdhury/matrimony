<template>
        <!-- Spinner Start -->
         <!-- <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
             <div class="spinner-grow text-primary" role="status"></div>
        </div> -->
        <!-- Spinner End -->


        <!-- Navbar start -->
        <div class="container-fluid sticky-top px-0">
            <div class="container-fluid">
                <div class="container px-0">
                    <nav class="navbar navbar-light navbar-expand-xl" id="navBar">
                        <a href="index.html" class="navbar-brand">
                            <h4 class="text-primary display-6 fw-bold mb-0">Mr<strong class="text-secondary">&</strong>Mrs</h4>
                        </a>
                        <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="fa fa-bars text-primary"></span>
                        </button>
                        <div class="collapse navbar-collapse py-3" id="navbarCollapse">
                            <div class="navbar-nav mx-auto border-top">
                     <router-link to="/home" class="nav-item nav-link active"> Home </router-link>
                     <router-link to="/about" class="nav-item nav-link">About</router-link>
                               
                         <router-link to="/story" class="nav-item nav-link">Story</router-link>   
                         <router-link to="/timeline" class="nav-item nav-link">Timeline</router-link>
                     <router-link to="/gallery" class="nav-item nav-link">Gallery</router-link>
                     <router-link to="/rsvp" class="nav-item nav-link">RSVP</router-link>
                             
                            </div>
                            <div class="d-flex align-items-center flex-nowrap pt-xl-0">
                                <a href="#weddingRsvp" class="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4">Book Attendance</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Navbar End -->



        <!-- Carousel Start -->
        <div class="container-fluid carousel-header px-0">
            <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img src="assets/img/carousel-1.jpg" class="img-fluid" alt="Image">
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">WE ARE GETTING MARRIED</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Evelyn <i class="fa fa-heart text-primary"></i> Anthony</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">June 28 2024</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">RSVP Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/img/carousel-2.jpg" class="img-fluid" alt="Image">
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">WE ARE GETTING MARRIED</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Evelyn <i class="fa fa-heart text-primary"></i> Anthony</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">June 28 2024</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">RSVP Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/img/carousel-3.png" class="img-fluid bg-secondary" alt="Image">
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">WE ARE GETTING MARRIED</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Evelyn <i class="fa fa-heart text-primary"></i> Anthony</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">June 28 2024</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">RSVP Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- Carousel End -->


        <router-view></router-view>


     








    


        <!-- Footer Start -->
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-4 text-start">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Links</h4>
                            <a href="#" class="btn-link"> About</a>
                            <a href="#" class="btn-link"> Gallery</a>
                            <a href="#" class="btn-link"> Story</a>
                            <a href="#" class="btn-link"> Timeline</a>
                            <a href="#" class="btn-link"> RSVP</a>
                            <a href="#" class="btn-link"> Contact Us</a>
                            <a href="#" class="btn-link"> Wsedding-date</a>
                        </div>
                    </div>
                    <div class="col-lg-4 text-center">
                        <div class="footer-item">
                            <h4 class="mb-4 text-white">Mr<strong class="text-primary">&</strong>Mrs</h4>
                            <p class="text-white">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tempor dui, non consectetur enim.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                            <div class="btn-link d-flex justify-content-center">
                                <a href="#" class="btn btn-md-square btn-light btn-light-outline-0 me-2"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="btn btn-md-square btn-light btn-light-outline-0 me-2"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="btn btn-md-square btn-light btn-light-outline-0 me-2"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="btn btn-md-square btn-light btn-light-outline-0 me-0"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Follow Us</h4>
                            <a href="#" class="btn-link"> Faceboock</a>
                            <a href="#" class="btn-link"> Instagram</a>
                            <a href="#" class="btn-link"> Twitter</a>
                            <h4 class="my-4 text-white">Contact Us</h4>
                            <a href="#" class="btn-link"><i class="fas fa-envelope text-secondary me-2"></i> info@example.com</a>
                            <a href="#" class="btn-link"><i class="fas fa-phone text-secondary me-2"></i> (+012) 3456 7890 123</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        



        <!-- Copyright Start -->
        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-md-0">
                        <span class="text-light"><a href="#"><i class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 text-center text-md-end text-white">
                        <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/-->
                        <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/-->
                        <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/-->
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Copyright End -->



        <!-- Back to Top -->
        <a href="#" class="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i class="fa fa-arrow-up"></i></a>   

        
    
   
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      uid:sessionStorage.getItem('uid')
    };
  },
  methods: {
    logout() {
      this.uid="";
      sessionStorage.setItem('uid', '');
      window.location.href='/';
    }
  }
}
</script>


