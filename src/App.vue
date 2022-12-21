<template>
  <header class="header">
    <NavBarVue />
  </header>
  <TheLayout><router-view></router-view></TheLayout>
</template>

<script setup>
import "./assets/base.css";
import NavBarVue from "./components/NavBar.vue";
import TheLayout from "./components/TheLayout.vue";
</script>

<style lang="css" scoped>
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
</style>
