<template>
  <div>
    <navigation-bar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/organisms/NavigationBar'
export default {
  components: {
    NavigationBar
  }
}
</script>
<style>
@import '~/assets/sass/variable.scss';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.container {
  margin-top: 24px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 40px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
@media all and (max-width: 600px) {
  .container {
    margin-top: 24px;
    padding: 0 16px 40px 16px;
  }
}
</style>
