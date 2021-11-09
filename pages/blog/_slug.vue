<template>
  <article>
    <section class="bg-black text-light overlay min-vh-100 d-flex flex-column justify-content-end jarallax mb-5" data-jarallax data-speed="0.5">
      <img :src="article.img" :alt="article.alt" class="jarallax-img opacity-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-8">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li v-for="link of article.toc" :key="link.id" class="breadcrumb-item">
                    <NuxtLink :to="'#${link.id}'">{{link.text}}</NuxtLink>
                  </li>
                </ol>
              </nav>
              <span class="badge badge-primary">
                <img class="icon bg-primary" :src="article.icon" alt="heart interface icon">21</span>
            </div>
            <h1>{{article.title}}</h1>
            <div class="d-flex align-items-center mb-3">
              <NuxtLink :to="'/blog/author/${author.name}'">
                <img :src="article.avatar" :alt="article.avatarAlt" class="avatar mr-2">
              </NuxtLink>
              <div>
                <div>by <NuxtLink :to="'/about'">{{article.author.name}}</NuxtLink>
                </div>
                <div class="text-small text-muted">{{formatDate(article.updatedAt)}}</div>
              </div>
            </div>
            <p class="lead">{{ article.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-0 px-5" data-reading-position>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">
              <nuxt-content :document="article" />

              <Social :social="article.social"></Social>
              <!-- <Related :related="article.related" ></Related> -->
              <PrevNext :prev="prev" :next="next"></PrevNext>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  export default {

    async asyncData({
      $content,
      params
    }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy(['createdAt', 'asc']).surround(params.slug).fetch()

      return {
        article,
        prev,
        next
      }
    },

    methods: {
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      }
    },
  }

</script>

<style>
  .icon.icon-link {
    background-image: url('assets/img/icons/theme/code/thunder-circle.svg');
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-size: 2rem 2rem;
    background-color: none;
    color: red;
    fill: red;
    border-radius: 25px;
    margin: 0 10px;
  }

</style>
