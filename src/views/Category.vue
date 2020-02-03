<template>
  <div class="container">
    <h1>{{ $route.params.category }}</h1>
    <!-- {{ filterMovies }} -->
    {{ movies }}
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters.moviesByCat(this.$route.params.category);
      // const movies = this.$store.getters.movies.forEach(
      //   movie => movie
      // );
      // return movies
    }
  },

  mounted() {
    // console.log(this.$route.params.category);
    // console.log(this.$store.getters.movieById(426150));
  }
};
</script>

<style lang="less" scoped></style>
