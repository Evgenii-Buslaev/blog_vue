<template>
  <button class="btn" :class="{ submit_btn: submit }"><slot></slot></button>
</template>

<script>
export default {
  name: "btn-el",
  props: {
    submit: [Boolean],
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 5px;
  padding: 5px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: teal;
  cursor: pointer;
}
.submit_btn {
  background-color: rgba(255, 0, 0, 0.425);
}
</style>
