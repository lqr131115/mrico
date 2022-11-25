<template>
  <div class="main-footer-container">
    <div class="main-footer-content">
      <div class="main-footer-url">
        <span>微前端&nbsp;©&nbsp;<a href="https://github.com/lqr131115">个人GitHub主页</a>&nbsp;</span>
        公司地址: 安徽省合肥市蜀山区安徽大学
      </div>
      <div class="main-footer-phone">
        <span>联系方式: 1046975211</span>&nbsp;
        <span>皖ICP备88888888号</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.main-footer {
  &-container {
    width: 100%;
    height: 100px;
    background: #F5F5F5;
  }

  &-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-url {
    font-size: 14px;
    color: #9E9E9E;
    margin-bottom: 10px;

    span {
      font-size: 16px;
      color: #A1A1A1;
    }
  }

  &-phone {
    font-size: 14px;
    color: #9E9E9E;
  }
}
</style>
