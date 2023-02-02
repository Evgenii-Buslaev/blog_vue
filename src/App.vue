<template>
  <navigation-bar></navigation-bar>
  <post-form></post-form>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PostForm from "./components/PostForm.vue";
export default {
  components: { NavigationBar, PostForm },
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
