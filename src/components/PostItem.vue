<template>
  <div class="list__item">
    <div>{{ post.title }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list__item {
  width: auto;
  height: auto;
  margin: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
