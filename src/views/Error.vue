<template>
  <div class="error">
    <h1>This is an error page</h1>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "error",
  data(){
    const msg = (this.$route.query && this.$route.query.msg) || ''
    return {msg}
  },
}
</script>