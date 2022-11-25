<template>
  <div class="main-nav-container">
    <div class="main-nav-content">
      <div class="main-nav-logo">
        <img src="" alt="">
      </div>

      <div class="main-nav-list">
        <div v-for="(item, index) in NAV_LIST" :class="{ 'main-nav-active': currentIndex === index }" :key="index"
          @click="setCurrentIndex(item, index)">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'

import { useRoute,useRouter } from 'vue-router'
import { NAV_LIST } from '../../constant'
import { headerState } from '../../store'
const route = useRoute();
const router = useRouter();
watch(route, (val) => {
  for (let i = 0, len = NAV_LIST.length; i < len; i++) {
    if (
      NAV_LIST[i].url &&
      val.fullPath.indexOf(NAV_LIST[i].url) !== -1
    ) {
      headerState.setCurrentIndex(i)
      return
    }
  }
}, { deep: true })

const currentIndex = headerState.currentIndex


const setCurrentIndex = (item) => {
  if (item.url === route.fullPath) {
    return
  }
  router.push(`${item.url}`)
}

</script>

<style lang="scss" scoped>
* img {
  width: 100%;
  height: 100%;
}

.main-nav {
  &-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  &-container {
    width: 100%;
    height: 90px;
    background: linear-gradient(180deg, #3cfbfb 0%, #75CDFF 100%);
  }

  &-logo {
    width: 108px;
    height: 48px;
    opacity: 0;
  }

  &-list {
    margin: 0 136px 0 132px;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    display: flex;
    height: 100%;
    user-select: none;

    &>div {
      position: relative;
      margin-right: 30px;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &>div:last-child {
      margin-right: 0;
    }
  }

  &-active:after {
    content: '';
    width: 100%;
    height: 8px;
    background: #F7B500;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
