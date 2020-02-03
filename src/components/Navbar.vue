<template>
  <el-row>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" router="/">
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">Года</template>
        <el-menu-item index="2-1">
          <router-link to="/year/2020">2020</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/year/2019">2019</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/year/2018">2018</router-link>
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/year/2017">2017</router-link>
        </el-menu-item>
        <el-menu-item index="2-5">
          <router-link to="/year/2016">2016</router-link>
        </el-menu-item>
        <el-menu-item index="2-6">
          <router-link to="/year/2015">2015</router-link>
        </el-menu-item>
        <el-menu-item index="2-7">
          <router-link to="/year/2014">2014</router-link>
        </el-menu-item>
        <el-menu-item index="2-6">
          <router-link to="/year/2013">2013</router-link>
        </el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>-->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">Категории</template>
        <el-menu-item index="2-1">
          <router-link to="/category/комедия">комедия</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/category/криминал">криминал</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/category/аниме">аниме</router-link>
        </el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>-->
      </el-submenu>
      <el-menu-item index="5">
        <router-link to="/top">Лучшее</router-link>
      </el-menu-item>
      <el-menu-item index="6" disabled>
        <router-link to="/Login">Login</router-link>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>