<template>
  <div class="home">
    <div class="container">
      <el-row>
        <el-col :span="5">
          <div class="grid-content bg-purple-dark">
            <el-button type="primary">Primary</el-button>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-dark">
            <el-button type="primary">Primary</el-button>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <template>
          <el-table :data="filterMovies" stripe style="width: 100%">
            <el-table-column prop="title" label="title"></el-table-column>
            <el-table-column prop="year" label="year"></el-table-column>
            <el-table-column prop="kinopoisk_id" label="kinopoisk_id"></el-table-column>
            <!-- <el-table-column prop="material_data.genres" label="Жанр" v-if="material_data.genres">
              <template slot-scope="scope">
                <p
                  v-for="item in scope.row.material_data.genres.slice(0, 2)"
                  :key="item.id"
                >
                  {{ item }}
                </p>
              </template>
            </el-table-column>-->

            <el-table-column>
              <template slot-scope="scope">
                <!-- <router-link tag="button" class="btn btn-small" :to="'/task/'">
                  Open
                </router-link>-->
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
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import russianMovies from "@/assets/russian-movie.json";
// import films from "@/assets/films.json";

export default {
  name: "home",
  components: {
    // HelloWorld
  },

  data: () => ({
    // movies: [],
    // adults: []
  }),

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    }
  },

  computed: {
    filterMovies() {
      const filterMovies = this.$store.getters.movies.filter(
        movie => movie.year === 2019
      );
      return filterMovies;
    }
  },

  mounted() {}
};
</script>

<style lang="less" scoped></style>
