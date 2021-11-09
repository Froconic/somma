<template>
  <div>
    <section class="text-light bg-primary" data-speed="0.5" data-overlay>
      <!-- <img src="../assets/img/misc/BOG line.svg" alt="" class="jarallax-img opacity-50"> -->
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <h1 class="display-3 text-light mb-5">Blog</h1>
            <p class="lead ">Thoughts on <br>Magic | Mystery | Mysticism</p>
          </div>
        </div>
      </div>
      <!-- <div class="divider">
      <img src="../assets/img/dividers/divider-2.svg" alt="graphical divider" data-inject-svg />
    </div> -->
    </section>
    <section id="blog-posts" class="bg-black blog-posts">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col col-md-auto">
            <Search></Search>
          </div>
          <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import getArticle from '~/utils/getArticle';
  import ArticleList from '@/components/ArticleList';
  export default {
    name: 'ArticleListPage',
    components: {
      ArticleList,
    },
    async asyncData({
      $content,
      app,
      params,
      error
    }) {
      const content = await getArticle($content, params, error);
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      };
    },
    head() {
      return {
        title: `Articles Page ${this.$route.params.page}`,
        link: [{
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/blog/${this.$route.params.page}`,
        }, ],
      };
    },
  };

</script>
