<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  export default {
    data () {
      return {
        data: {}
      }
    },

    mounted () {
      this.loadData()
    },

    methods: {
      loadData () {
        this.$api.common.submitForm()
          .then(res => {
            this.data = res
            this.$message({
              message: res.msg
            })
          })
          .catch(error => {
            this.$message({
              message: error.msg,
              type: 'error'
            })
          })
      }
    }
  }
</script>
