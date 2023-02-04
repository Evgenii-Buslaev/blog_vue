<template>
  <div class="list">
    <transition-group name="posts-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      ></post-item>
    </transition-group>
  </div>
</template>

<script>
import { TransitionGroup } from "vue";
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem, TransitionGroup },
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

.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.3s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
