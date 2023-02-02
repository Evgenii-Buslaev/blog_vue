<template>
  <div class="list">
    <div v-for="post in posts" :key="post.id" class="list__item">
      <div>{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
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

.list__item {
  width: 100%;
  height: auto;
  margin: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
