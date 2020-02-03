<template>
  <div class="container">
    <h1>Movie</h1>
    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <h1 v-if="movie.title">{{ movie.title }}</h1>
          <h1 v-if="movie.year">
            <router-link :to="'/year/' + movie.year">{{ movie.year }}</router-link>
          </h1>

          <br />
          <p v-for="genre in movie.material_data.genres" :key="genre.id">
            <router-link :to="'/' + genre">{{ genre }}</router-link>
          </p>
          <br />
          <hr />
          <br />
          {{ movie }}
        </div>
      </el-col>
      <el-col :span="6">
        <el-image :src="movie.material_data.poster_url">
          <div slot="placeholder" class="image-slot">
            Loading
            <span class="dot">...</span>
          </div>
        </el-image>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <!-- <iframe
          :src="movie.player_link"
          width="100%"
          height="400"
          align="left"
        >Ваш браузер не поддерживает плавающие фреймы!</iframe>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.getters.movieById(this.$route.params.id);
    }
  },

  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.params);
    // console.log(this.$store.getters.movieById(426150));
  }
};
</script>

<style lang="less" scoped></style>
