<template>
  <div class="home">
    <h1>logout</h1>
    <div> loging out ...</div>
  </div>
</template>

<script>
import Parse from 'parse'
export default {
  name: "logout",
  async mounted() {
    await Parse.User.logOut()
    this.$router.replace({ name: "home" });
  },
  components: {}
};
</script>
