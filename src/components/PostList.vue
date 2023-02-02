<template>
  <div class="list">
    <post-item v-for="post in posts" :key="post.id" :post="post"></post-item>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: auto;
  margin: 15px 0;
}
</style>
