<template>
  <ul class="list-group">
    <!-- <li class="list-group-item">newsId:{{this.$route.params.newsId}}</li> -->
    <li class="list-group-item">newsId:{{newsId}}</li>
    <!-- <li class="list-group-item">newsContent:{{this.$route.query.newsContent}}</li> -->
    <li class="list-group-item">newsContent:{{newsContent}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
    props:['newsId','newsContent']
};
</script>

<style scoped>
</style>
