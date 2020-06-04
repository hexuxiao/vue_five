<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addOne="addOne"></Header>
      <Main :todos="todos" :updataOne="updataOne" :deleteOne="deleteOne"></Main>
      <Footer :todos="todos" :cheakAll="cheakAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todo_2")) || []
    };
  },
  methods: {
    addOne(obj) {
      this.todos.unshift(obj);
    },
    updataOne(index, val) {
      this.todos[index].isOver = val;
    },
    deleteOne(index) {
      this.todos.splice(index, 1);
    },
    cheakAll(val) {
      this.todos.filter(item => (item.isOver = val));
    },
    deleteAll() {
      this.todos = this.todos.filter(item => !item.isOver);
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem("todo_2", JSON.stringify(newVal));
      }
    }
  }
};
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
