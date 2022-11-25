<template>
  <div class="micro-main-body-container">
    <Loading v-show="loadingStatus" />
    <div id="micro-container" v-show="!loadingStatus"></div>
  </div>
</template>

<script setup>
import Loading from './loading.vue';
import { loading } from '@/store';
const loadingStatus = loading.loadingStatus
</script>

<style lang="scss">
.micro-main-body-container {
  min-height: 180px;
  position: relative;
}

#micro-container {
  width: 100%;
  min-height: 180px;
  text-align: center;
}
</style>
