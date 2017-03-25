<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  export default {
    methods: {
      push () {
        this.$router.push({
          name: this.$routerName.qrCode,
          query: {
            qrcodeUrl: 'https://www.baidu.com'
          }
        })
      },
      replace () {
        this.$router.replace({
          name: this.$routerName.qrCode,
          query: {
            qrcodeUrl: 'https://www.baidu.com'
          }
        })
      }
//      params () {
//        this.$router.push({
//          name: this.$routerName.qrCode,
//          params: {
//            qrcodeUrl: 'https://www.baidu.com'
//          }
//        })
//      },
//      query () {
//        this.$router.push({
//          name: this.$routerName.qrCode,
//          query: {
//            qrcodeUrl: 'https://www.baidu.com'
//          }
//        })
//      }
    }
  }
</script>
