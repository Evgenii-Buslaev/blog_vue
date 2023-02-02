<template>
  <navigation-bar></navigation-bar>
  <post-form @create="createPost"></post-form>
  <post-list :posts="posts"></post-list>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: { NavigationBar, PostForm, PostList },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    createPost(post) {
      console.log(post);
      this.posts.push(post);
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
