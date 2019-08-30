<template>
  <div class="service-logo">
    <img src="/images/logo-white.png" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'ServiceLogo'
}
</script>

<style scoped lang="scss">
.logo {
  height: 48px;
}
@media all and (max-width: 600px) {
  .header {
    .logo {
      height: 38px;
    }
  }
}
</style>
