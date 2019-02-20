<template>
<li class="item" @click="handleclick">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods:{
    handleclick:function () {
      this.$emit('delete',this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  color:green;
}
</style>
