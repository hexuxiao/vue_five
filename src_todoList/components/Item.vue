<template>
  <li @mouseenter="hide(true)" @mouseleave="hide(false)" :class="myclass">
    <label>
      <input type="checkbox" v-model="isCheak" />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todo: Object,
    index: Number,
    updataOne:Function,
    deleteOne:Function
  },
  data() {
    return {
      isShow: false,
      myclass: "leave"
    };
  },
  methods: {
    hide(flag) {
      if (flag) {
        this.isShow = true;
        this.myclass = "enter";
      } else {
        this.isShow = false;
        this.myclass = "leave";
      }
    },
    deleteT(){
        this.deleteOne(this.index)
    }
  },
  computed: {
    isCheak:{
        get(){
            return this.todo.isOver
        },
        set(val){
            this.updataOne(this.index,val)
        }
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.enter {
  background-color: #eee;
}
.leave {
  background-color: #fff;
}
</style>
