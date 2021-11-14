<template>
  <div>
    <section class="has-divider">
      <div class="container pt-3">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">
            <hr>
            <div class="d-flex align-items-center">
              <span class="text-small mr-1">Share this article:</span>
              <div class="d-flex mx-2">
                <a href='https://www.facebook.com/RIVREOFSOMA/' class="btn btn-round btn-primary mx-1">
                  <img class="icon icon-sm" :src="social.facebook" alt="social.facebookAlt">
                </a>
                <a href='https://www.instagram.com/rivreofsoma/' class="btn btn-round btn-primary mx-1">
                  <img class="icon icon-sm" :src="social.instagram" alt="social.instagramAlt">
                </a>
                <!-- <NuxtLink :to="'/'" class="btn btn-round btn-primary mx-1">
                  <img class="icon icon-sm" :src="social.youtube" alt="social.youtubeAlt">
                </NuxtLink> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      social: {
        type: Object,
        required: true
      }
    }
  }

</script>
