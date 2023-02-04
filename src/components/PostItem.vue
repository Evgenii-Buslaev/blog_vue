<template>
  <div class="list-item">
    <div class="list-item__text">
      <div>{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
    <btn-el @click="$emit('remove', post)" class="delete-btn">Удалить</btn-el>
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
.list-item {
  width: auto;
  height: auto;
  margin: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item__text {
  width: 90%;
}
</style>
