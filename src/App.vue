<template>
  <navigation-bar></navigation-bar>
  <post-form @create="createPost"></post-form>
  <post-list :posts="posts" @remove="deletePost"></post-list>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import { usePosts } from "@/hooks/usePosts.js";

export default {
  components: { NavigationBar, PostForm, PostList },
  setup() {
    const { posts } = usePosts();
    return { posts };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    deletePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Code Pro", monospace;
}
.app {
  padding: 20px;
}
</style>
