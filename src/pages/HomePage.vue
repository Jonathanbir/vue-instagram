<template>
  <div>
    <PostList>
      <PostItem v-for="n in 10" />
    </PostList>
    <!-- <PostDetailsVue /> -->
    <!-- <PostUpload /> -->
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import PostDetailsVue from "../components/PostDetails.vue";
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";
</script>

<style lang="css">
/* postList */
.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
</style>
