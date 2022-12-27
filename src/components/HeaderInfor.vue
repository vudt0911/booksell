<template>
<div class="header-infor flex justify-between gap-3" style="width: 320px; padding-top: 15px; opacity: .5; padding-left: 24px;">
  <slot name="header_infor">
    <div class="notification flex flex-col items-center">
      <i class="fas icon-infor fa-bell"></i>
      <p class="title-infor">Thông báo</p>
    </div>
    <div class="shopping-cart flex flex-col items-center">
      <i class="fas icon-infor fa-shopping-cart"></i>
      <p class="title-infor">Giỏ hàng</p>
    </div>
    <div class="account flex flex-col items-center">
      <i class="fas icon-infor fa-user"></i>
      <p class="title-infor">Tài khoản</p>
    </div>
    <div class="language flex flex-col items-center">
      <i class="fas icon-infor fa-globe"></i>
      <p class="title-infor">Ngôn ngữ</p>
    </div>
  </slot>
</div>
</template>

<script>
export default {
  name: "HeaderInfor"
}
</script>

<style scoped>
.title-infor {
  font-size: 12px;
}
.icon-infor {
  font-size: 13px;
  height: 24px;
  width: 24px;
}
</style>