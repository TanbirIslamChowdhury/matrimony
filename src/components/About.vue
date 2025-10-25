<template>
            <!-- About Start -->
        <div class="container-fluid position-relative overflow-hidden bg-secondary py-5">
            <img src="assets/img/bg-flower.png" class="img-fluid position-absolute top-0" style="right: -15px; transform: rotate(270deg); opacity: 0.5;" alt="">
            <img src="assets/img/bg-flower.png" class="img-fluid position-absolute" style="bottom: 10px; left: -15px; transform: rotate(90deg); opacity: 0.5;" alt="">
            <div class="container py-5 position-relative">
                <div class="row g-5 align-items-center">
                    <div class="col-xl-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="border-white bg-primary" style="border-style: double;">
                            <img src="assets/img/about-1.jpg" class="img-fluid w-100" alt="">
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="wow fadeIn" data-wow-delay="0.3s">
                            <h5 class="text-uppercase text-primary fw-bold mb-4">About Us</h5>
                            <h1 class="display-5 text-white mb-4">We Make Your Every Moment</h1>
                            <p class="text-white fs-5 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <div class="tab-class bg-primary p-4">
                                <ul class="nav d-flex mb-4">
                                    <li class="nav-item">
                                        <a class="d-flex py-2 text-center bg-white active" data-bs-toggle="pill" href="#tab-1">
                                            <span class="text-dark" style="width: 150px;">Bride Info</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="d-flex py-2 mx-3 text-center bg-white" data-bs-toggle="pill" href="#tab-2">
                                            <span class="text-dark" style="width: 150px;">Groom info</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tab-1" class="tab-pane fade show p-0 active">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="d-flex">
                                                    <div class="me-4">
                                                        <img src="assets/img/bride.jpg" class="img-fluid w-100 img-border" alt="">
                                                    </div>
                                                    <div class="text-start my-auto">
                                                        <h5 class="text-white fw-bold">Evelyn</h5>
                                                        <p class="text-white mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </p>
                                                        <div class="d-flex">
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-facebook-f"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-twitter"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-instagram"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"><i class="fab fa-linkedin-in"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-2" class="tab-pane fade show p-0">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="d-flex">
                                                    <div class="me-4">
                                                        <img src="assets/img/Groom.jpg" class="img-fluid w-100 img-border" alt="">
                                                    </div>
                                                    <div class="text-start my-auto">
                                                        <h5 class="text-white fw-bold">Anthony</h5>
                                                        <p class="text-white mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </p>
                                                        <div class="d-flex">
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-facebook-f"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-twitter"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-instagram"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"><i class="fab fa-linkedin-in"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex mt-5">
                                <div class="d-flex align-items-center justify-content-center flex-shrink-0">
                                    <a href="#" class="btn btn-primary btn-primary-outline-0 py-3 px-4">Read More</a>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="d-inline-block ms-4 me-3">
                                        <i class="fa fa-phone fa-2x text-success border border-2 border-white p-2"></i>
                                    </div>
                                    <div class="d-flex flex-column flex-nowrap">
                                        <h5 class="text-dark fw-bold mb-2">Call Us Anytime</h5>
                                        <h4 class="text-primary mb-0">+123 456 7890</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>