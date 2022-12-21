<template>
  <div class="postActions">
    <TheIcon icon="like" /><span>{{ likes || "" }}</span>
    <TheIcon icon="comment" fill="none" /><span>{{ comments || "" }}</span>
    <TheIcon icon="favorite" /><span>{{ favors || "" }}</span>
  </div>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
</script>

<style lang="css" scoped>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postPubDate {
  color: #9f9f9f;
  grid-area: pubDate;
  font-size: 14px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.postActions > span {
  font-size: 14px;
}
</style>
