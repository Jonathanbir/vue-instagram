<template>
  <div>
    <PostList>
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
    </PostList>
    <PostDetails v-if="showPostDetails" />
    <PostUpload v-if="showPostUpload" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import PostDetailsVue from "../components/PostDetails.vue";
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";

const store = useStore();
const showPostUpload = computed(() => store.state.showPostUpload);
const showPostDetails = computed(() => store.state.showPostDetails);
const posts = computed(() => store.state.post.list);

onMounted(() => {
  store.dispatch("loadAllPosts");
});
</script>

<style lang="css">
/* postList */
.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
</style>
