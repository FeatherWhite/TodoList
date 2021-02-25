<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <slot name="left-one"></slot>
      <slot name="left-two"></slot>
    </div>
    <v-spacer></v-spacer>
    <slot name="right-one"></slot>
    <slot name="right-two"></slot>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
