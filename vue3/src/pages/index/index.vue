<script setup >
import HelloWorld from '@/components/helloWorld.vue'
</script>

<template>
  <div class="box">
    <div>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vue" />
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
      filter: drop-shadow(0 0 2em #42b883aa);
    }
  }
}
</style>
