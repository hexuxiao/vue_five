<template>
  <ul class="list-group">
    <!-- <li class="list-group-item">messageId:{{this.$route.params.msgId}}</li> -->
    <li class="list-group-item">messageId:{{msgId}}</li>
    <!-- <li class="list-group-item">messageContent:{{this.$route.query.msgContent}}</li> -->
    <li class="list-group-item">messageContent:{{msgContent}}</li>
    <li class="list-group-item">messageTitle:{{title}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
let msgTitles = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" }
];
export default {
  props: ["msgId", "msgContent"],
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.show();
  },
  watch: {
    $route(newVal, oldVal) {
      this.show();
    }
  },
  methods: {
    show() {
      setTimeout(() => {
        this.title = msgTitles.find(item => item.id === this.msgId * 1).title;
      }, 1000);
    }
  }
};
</script>

<style scoped>
</style>
