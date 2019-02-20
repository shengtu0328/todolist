<template>
  <div >
    <input class="item" v-model="inputValue"/>
    <button @click="handleSubmit">提交</button>
    <ul>
      <todo-item v-for="(item, index) of list"
                 :key="index"
                 :content="item"
                 :index="index"
                 @delete="handleDelete"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'

export default {
  components: {
    'todo-item': ToDoItem
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue) // this.list其实就是this.$data.list
      this.inputValue = ''
    },
    handleDelete:function(index){
      this.list.splice(index,1)
    }
  }
}

</script>

<style lang="scss">
</style>
