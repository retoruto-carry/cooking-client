<template>
  <div>
    <header class="header">
      <nuxt-link to="/">
        <service-logo class="logo" />
      </nuxt-link>
    </header>
    <hr class="divider" />
  </div>
</template>

<script>
import ServiceLogo from '../atoms/ServiceLogo'
export default {
  components: { ServiceLogo }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/variable.scss';

.header {
  display: flex;
  align-items: center;
  background-color: $app;
  height: 64px;
  padding: 0 10%;
  .logo {
    margin-left: 0;
    margin-right: auto;
    height: 48px;
  }
}
.divider {
  display: block;
  margin: 0;
  border-bottom: none;
  border-color: rgba(0, 0, 0, 0.08);
}
@media all and (max-width: 600px) {
  .header {
    height: 48px;
    padding: 0 16px;
    .logo {
      margin: 11px auto;
      width: 64px;
      height: 26px;
    }
  }
}
</style>
