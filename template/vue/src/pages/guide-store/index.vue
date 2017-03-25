<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import child from 'store/modules/child'
  import {child as childTypes, global as globalTypes} from 'store/mutationTypes'

  export default {
    computed: {
      ...mapGetters({
        data: childTypes.getters.data,
        logo: globalTypes.getters.logo
      })
    },

    created() {
      this.$store.registerModule('childModule', {
        modules: {
          child
        }
      })
    },

    destroyed() {
      this.$store.unregisterModule('childModule')
    },

    methods: {
      ...mapActions({
        updateData: childTypes.actions.updateData,
        updateLogo: globalTypes.actions.updateLogo
      }),

      updateGlobal() {
        this.updateLogo('更新 global logo')
      },

      updateChild() {
        this.updateData('更新child data')
      }
    }
  }

</script>
