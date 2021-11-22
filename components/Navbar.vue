<template>
  <div class="navbar-container ">
      <nav class="navbar navbar-expand-lg justify-content-between navbar-dark  border-bottom-0 pb-0" data-sticky="top">
        <div class="container">
          <div class="col flex-fill px-0 d-flex justify-content-between">
            <h3><NuxtLink class=" navbar-brand ml-0 fade-page" to="/">RIVRE OF SOMA <img src="../assets/img/logos/logo.png" alt="RIVRE OF SOMA"></NuxtLink></h3><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation"><img class="icon navbar-toggler-open" src="../assets/img/icons/interface/menu.svg" alt="menu interface icon"><img class="icon navbar-toggler-close" src="../assets/img/icons/interface/cross.svg" alt="cross interface icon"></button>
          </div>
          <div class="collapse navbar-collapse col px-0 px-lg-2 flex-fill ">
            <div class="py-2 py-lg-0">
              <ul class="navbar-nav">
                <li class="nav-item"><NuxtLink class="nav-link " to='/blog'> Blog </NuxtLink></li>
                <li class="nav-item"><NuxtLink class="nav-link " to='/art'> Art </NuxtLink></li>
                <li class="nav-item"><NuxtLink class="nav-link " to='/about'> About </NuxtLink></li>
                <li class="nav-item"><NuxtLink class="nav-link " to='/contact'> Contact </NuxtLink></li>
                <li class="nav-item"><NuxtLink class="nav-link " to='/support'> Support </NuxtLink></li>
                <!-- <li class="nav-item pl-1"><Search></Search></li> -->
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.navbar {
  height: 100px;
}


@media (min-height: 300px) {
  .navbar-container {
  position: sticky;
  top: 0;
  z-index:9999;
}
}
</style>