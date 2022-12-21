<template>
  <header class="header">
    <NavBarVue />
  </header>
  <router-view></router-view>
</template>

<script setup>
import "./assets/base.css";
import NavBarVue from "./components/NavBar.vue";
</script>

<style lang="css" scoped>
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
</style>
