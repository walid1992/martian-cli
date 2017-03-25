<template>
  <div class="root">
    <h1>{{msg}}</h1>
    <VueQArt :config="config"></VueQArt>
  </div>
</template>

<style scoped>
  .root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>

<script>
  import VueQArt from 'components/qrcode'
  import QArt from 'qartjs'

  export default {
    components: {
      VueQArt
    },

    data () {
      return {
        msg: '请扫描下方二维码进行下载~',
        config: {
          value: this.$route.query.qrcodeUrl,
          imagePath: require('./imgs/logo.png'),
          filter: 'color'
        }
      }
    },

    mounted () {
      console.log('qrcodeUrl', this.$route.query.qrcodeUrl)
    }
  }
</script>
