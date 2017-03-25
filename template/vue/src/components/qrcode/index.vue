<template>
  <div class="root" ref="qart"></div>
</template>

<style scoped>
  .root {
    margin: 0 auto;
    width: 400px;
    height: 400px;
  }
</style>

<script>
  import QArt from 'qartjs'

  export default {
    props: {
      config: {
        type: Object,
        default: {}
      }
    },
    mounted() {
      new QArt({
        value: this.config.value,
        imagePath: this.config.imagePath || require('./imgs/logo.png'),
        filter: this.config.filter
      }).make(this.$refs.qart)
    }
  }
</script>
