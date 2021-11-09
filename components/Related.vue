<template>
  <div class="related">
        <section class="bg-primary-alt">
      <div class="container">
        <div class="row mb-4">
          <div class="col">
            <h3 class="h2">Related Stories</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink :to="'/'" class="card card-body justify-content-between bg-primary text-light">
              <div class="d-flex justify-content-between mb-3">
                <div class="text-small d-flex">
                  <div class="mr-2">
                    Links
                  </div>
                  <span class="opacity-70">19th December</span>
                </div>
                <span class="badge bg-primary-alt text-primary">
                  <img class="icon icon-sm bg-primary" src="../assets/img/icons/interface/heart.svg" alt="heart interface icon">27
                </span>
              </div>
              <div>
                <h2>A time-tracking app that isn’t a pain.</h2>
                <span class="text-small opacity-70">http://www.website.io/link</span>
              </div>
            </NuxtLink>
          </div>
          <div class="col-md-6 col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="card">
              <NuxtLink :to="'/'">
                <img src="../assets/img/article-1.jpg" alt="Image" class="card-img-top">
              </NuxtLink>
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-small d-flex">
                    <div class="mr-2">
                      <NuxtLink :to="'/'">Business</NuxtLink>
                    </div>
                    <span class="text-muted">29th November</span>
                  </div>
                  <span class="badge bg-primary-alt text-primary">
                    <img class="icon icon-sm bg-primary" src="../assets/img/icons/interface/heart.svg" alt="heart interface icon">12
                  </span>
                </div>
                <NuxtLink :to="'/'">
                  <h4>How to build collateral</h4>
                </NuxtLink>
                <p class="flex-grow-1">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="../assets/img/avatars/female-3.jpg" alt="Image" class="avatar avatar-sm">
                  <div class="ml-1">
                    <span class="text-small text-muted">By</span>
                    <span class="text-small">Abby Sims</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="card">
              <NuxtLink :to="'/'">
                <img src="../assets/img/article-2.jpg" alt="Image" class="card-img-top">
              </NuxtLink>
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-small d-flex">
                    <div class="mr-2">
                      <NuxtLink :to="'/'">Design</NuxtLink>
                    </div>
                    <span class="text-muted">27th November</span>
                  </div>
                  <span class="badge bg-primary-alt text-primary">
                    <img class="icon icon-sm bg-primary" src="../assets/img/icons/interface/heart.svg" alt="heart interface icon">23
                  </span>
                </div>
                <NuxtLink :to="'/'">
                  <h4>Forging your path</h4>
                </NuxtLink>
                <p class="flex-grow-1">
                  Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <div class="d-flex align-items-center mt-3">
                  <img src="../assets/img/avatars/male-4.jpg" alt="Image" class="avatar avatar-sm">
                  <div class="ml-1">
                    <span class="text-small text-muted">By</span>
                    <span class="text-small">Cedric</span>
                  </div>
                </div>
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
    related: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>