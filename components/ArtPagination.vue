<template>
<nav>
  <ul class="pagination mb-0">
  <li class="page-item list-unstyled">
    <div v-if="currentPage === 1" class="page-link">
      <span class="hidden sm:inline">First</span>
      <!-- <SingleBack /> -->
    </div>
    <NuxtLink
      v-else
      :to="{ name: 'art-page-page', params: { page: 1 } }"
      class="page-link"
    >
      <!-- <DoubleBack /> -->
      <span class="hidden sm:inline">First</span>
    </NuxtLink>
  </li>

  <li class="page-item list-unstyled">
    <div v-if="currentPage === 1" class="page-link">
      <span class="hidden sm:inline">Prev</span>
      <!-- <SingleBack /> -->
    </div>
    <NuxtLink
      v-else
      :to="{ name: 'art-page-page', params: { page: prevPage } }"
     class="page-link"
    >
      <!-- <SingleBack /> -->
      <span class="hidden sm:inline">Prev</span>
    </NuxtLink>
  </li>

  <li class="page-item list-unstyled">
    <div v-if="currentPage === totalPages" class="page-link">
      <span class="hidden sm:inline">Next</span>
      <!-- <SingleFwd /> -->
    </div>

    <NuxtLink
      v-else
      :to="{  params: { page: nextPage } }"
     class="page-link"
    >
      <span class="hidden sm:inline">Next</span>
      <!-- <SingleFwd /> -->
    </NuxtLink>
  </li>

    <li class="page-item list-unstyled">
    
    <div v-if="currentPage === totalPages" class="page-link">
      <span class="hidden sm:inline">Last</span>
      <!-- <DoubleFwd /> -->
    </div>

    <NuxtLink
      v-else
      :to="{ name: 'art-page-page', params: { page: totalPages } }"
     class="page-link"
    >
      <span class="hidden sm:inline">Last</span>
      <!-- <DoubleFwd /> -->
    </NuxtLink>
  </li>
  </ul>
</nav>
</template>

<script>
import DoubleFwd from '@/components/svg/DoubleFwd';
import DoubleBack from '@/components/svg/DoubleBack';
import SingleFwd from '@/components/svg/SingleFwd';
import SingleBack from '@/components/svg/SingleBack';
export default {
  // data() {
  //   return {
  //   anchor: "#blog-posts"
  //   }
  // },
  name: 'Pagination',
  components: {
    DoubleFwd,
    DoubleBack,
    SingleFwd,
    SingleBack,
  },

  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    //     anchor() {
    //   return "/" + anchor
    // },
    buttonStyles() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out';
    },
    disabledStyle() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300';
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
};
</script>