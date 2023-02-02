<template>
  <form @submit.prevent="create" class="postForm">
    <input-el v-model="title" :placeholder="'Название поста'" />
    <input-el v-model="body" :placeholder="'Описание поста'" />
    <btn-el :submit="true">Создать</btn-el>
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

  methods: {
    create() {
      const post = {
        title: this.title,
        body: this.body,
        createdAt: Date.now(),
        id: Date.now(),
      };
      console.log(post);
    },
  },
};
</script>

<style lang="scss" scoped>
.postForm {
  margin: 15px auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
