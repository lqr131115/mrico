<script setup >
import HelloWorld from '@/components/helloWorld.vue'
</script>

<template>
  <div class="box">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="@/assets/vite.svg" class="logo" alt="Vite logo" />
      </a>
    </div>
    <HelloWorld msg="Vite" />
  </div>

</template>

<style lang="scss" scoped>
.box {
  margin-bottom: 2em;

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);

    }
  }
}
</style>
