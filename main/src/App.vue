<template>
  <!-- 头部 -->
  <Header v-if="showHeader" />
  <!-- 子应用容器 -->
  <Micro />
  <!-- 底部 -->
  <Footer v-if="showFooter" />
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
import { routerLink } from './store/routerLink'
import { loginStatus } from './store/login'
import { headerState, footerState } from './store'
import Micro from './view/micro.vue';
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

const router = useRouter()
const route = useRoute()
routerLink.value = router

// 拦截
watch(route, (val) => {
  if (!loginStatus.value && val.fullPath.indexOf('login') === -1) {
    router.push('/react18#/login')
  }
})
const showHeader = headerState.showHeader
const showFooter = footerState.showFooter

</script>

<style>
html,
body,
#mmicro {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
