<template>
    <footer class="pb-4  text-white" id="footer">
    <div class="container">
      <div class="row mb-5">
        <div class="col-6 col-lg-3 col-xl-2">
          <h5>Navigate</h5>
          <ul class="nav flex-column">
            <li class="nav-item">
              <NuxtLink to='/blog'>Blog</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to='/art'>Art</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to='/about'>About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to='/contact'>Contact</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to='/support'>Support</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg">
          <ul class="list-unstyled">
            <li>
            <NuxtLink id="contact" class="btn btn-outline-primary" to="/contact">
                <!-- <Envelope class="icon"></Envelope> -->
                 Contact me
            </NuxtLink>
            <div class="ml-3">
              <!-- <a class="text-primary" href="#">hello@company.io</a> -->
            </div>
            </li>
          </ul>
        </div>
        <!-- <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
          <h5>Subscribe</h5>
          <p>Be updated when a post drops</p>
          <form action="/forms/mailchimp.php" data-form-email novalidate>
            <div class="form-row">
              <div class="col-12">
                <input type="email" class="form-control mb-2" placeholder="Email Address" name="email" required>
              </div>
              <div class="col-12">
                <div class="d-none alert alert-success" role="alert" data-success-message>
                  Thanks, a member of our team will be in touch shortly.
                </div>
                <div class="d-none alert alert-danger" role="alert" data-error-message>
                  Please fill all fields correctly.
                </div>
                <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE" data-size="invisible" data-badge="bottomleft">
                </div>
                <button type="submit" class="btn btn-primary btn-loading btn-block" data-loading-text="Sending">
                  <img class="icon" src="../assets/img/icons/theme/code/loading.svg" alt="loading icon">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
          <small class="text-muted form-text">We’ll never share your details. See our <a class="text-primary" href="#">Privacy Policy</a>
          </small>

        </div> -->
      </div>
      <div class="row justify-content-center mb-2">
        <div class="col-auto">
          <ul class="nav">
            <li class="nav-item">
              <a href="https://www.instagram.com/rivreofsoma/" class="nav-link">
              <Instagram></Instagram>
              </a>
            </li>
            <!-- <li class="nav-item">
              <a href="#" class="nav-link">
                <img class="icon " src="../assets/img/icons/social/youtube.svg" alt="youtube social icon">
              </a>
            </li> -->
            <li class="nav-item">
              <a href="https://www.facebook.com/RIVRE-of-SOMA-101712625674490" class="nav-link">
                <Facebook></Facebook>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-md-auto text-center">
          <small class="text-muted">©2021 All Rights Reserved. RIVRE OF SOMA® is a registered trademark</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Envelope from '@/components/svg/Envelope.vue'
import Instagram from '@/components/svg/Instagram.vue'
// import rawInstagram from '@/assets/img/icons/social/instagram.svg?inline'
import Facebook from '@/components/svg/Facebook.vue'
export default {
components: {
  Envelope,
  Instagram,
  Facebook,
  // rawInstagram
}
}
</script>

<style>

</style>