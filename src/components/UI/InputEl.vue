<template>
  <input
    class="inputEl"
    type="text"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "input-el",
  props: {
    modelValue: [String, Number],
    placeholder: [String],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.inputEl {
  margin: 5px;
  padding: 5px;
  width: 150px;
  height: 40px;
  font-family: inherit;
  border: 2px solid teal;
  border-radius: 5px;
}
</style>
