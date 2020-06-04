<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkA" />
    </label>
    <span>
      <span>已完成{{oneNum}}</span>
      / 全部{{allNum}}
    </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["todos", "cheakAll", "deleteAll"],
  computed: {
    oneNum() {
      return this.todos.filter(item => item.isOver).length;
    },
    allNum() {
      return this.todos.length;
    },
    checkA: {
      get() {
        return this.oneNum === this.allNum && this.allNum > 0;
      },
      set(val) {
        this.cheakAll(val);
      }
    }
  },
  methods: {
    deleteA() {
      this.deleteAll();
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
