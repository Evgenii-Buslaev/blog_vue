<template>
  <nav class="navbar">
    <a class="navbar__link">Главная</a>
    <a class="navbar__link">Посты</a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background-color: rgba(0, 128, 128, 0.7);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.navbar__link {
  font-size: 24px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
