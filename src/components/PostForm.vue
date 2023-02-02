<template>
  <form>
    <input-el v-model="title" :placeholder="'Название поста'" />
    <input-el v-model="body" :placeholder="'Описание поста'" />
    <button>Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
