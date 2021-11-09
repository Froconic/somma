<template>

  <div class="row justify-content-center mb-4">
      <div class="nav mb-3 ">
        <ul class="list-unstyled">
          <li v-for="article in articles" :key="article.category" class="nav-item">
        <NuxtLink class="nav-link" :to="'/blog/category/${article.category}'">
        {{article.category}}
        </NuxtLink>
          </li>
        </ul>
        <li class="nav-item">
        <NuxtLink class="nav-link" :to="'/blog/category/${article.category}'">
        Test
        </NuxtLink>
        </li>
      </div>
    <div class="col col-md-auto ">
    </div>
  </div>
</template>

<script>
  export default {
props: {
  category: {
    type: Object,
    required: true
  }
}
  }

</script>

<style>

</style>
