<template>
  <div class="container">
    <h1>{{ $route.params.year }}</h1>
    <template v-if="!movies.length">
      <h3>not found</h3>
      <router-link to="/">go home</router-link>
    </template>
    <el-row v-else>
      <template>
        <el-table :data="movies" stripe style="width: 100%">
          <el-table-column prop="title" label="title"></el-table-column>
          <el-table-column prop="year" label="year"></el-table-column>
          <el-table-column prop="kinopoisk_id" label="kinopoisk_id"></el-table-column>
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
      return this.$store.getters.moviesByYear(+this.$route.params.year);
    }
  },

  mounted() {
    console.log(this.$route.params.year);
  }
};
</script>

<style lang="less" scoped></style>
