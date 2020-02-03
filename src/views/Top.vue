<template>
  <div class="container">
    <h1>Top 250</h1>

    <el-row>
      <template>
        <el-table :data="movies" stripe style="width: 100%">
          <el-table-column prop="title" label="title"></el-table-column>
          <el-table-column prop="year" label="year"></el-table-column>
          <el-table-column prop="material_data.kinopoisk_rating" sortable label="kinopoisk_rating"></el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
                v-if="scope.row.kinopoisk_id"
              >
                <router-link :to="'/movie/' + scope.row.kinopoisk_id">Open</router-link>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      const filterMovies = this.$store.getters.movies.filter(movie => {
        if (typeof movie.material_data.kinopoisk_rating === undefined) {
          console.log(" not found rating");
        } else {
          console.log("  found ");
          console.log(
            movie.material_data.title,
            movie.material_data.kinopoisk_rating
          );
          // if (movie.material_data.kinopoisk_rating > 8) {

          // }
        }
        return movie.year === 1996;
      });

      console.log(filterMovies);
      return filterMovies;
    }
  },

  mounted() {
    console.log(this.$route.params.year);
  }
};
</script>

<style lang="less" scoped></style>
