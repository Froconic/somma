<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 text-center">
    <NuxtLink v-if="prev" :to="{name: 'art-slug', params: { slug: prev.slug }}" class="font-bold  hover:underline">
      Previous: {{ prev.title }}
    </NuxtLink>
    <span v-else>End of the line</span>
        </div>
        <div class="col-6 text-center">
    <NuxtLink v-if="next" :to="{name: 'art-slug', params: { slug: next.slug }}" class="font-bold  justify-content-between hover:underline">Next: {{ next.title }}
    </NuxtLink>
    <span v-else>End of the line</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
props: {
  prev: {
    type: Object,
    default: () => null
  },
  next: {
    type: Object,
    default: () => null
  }
}
  }

</script>

<style>

</style>
