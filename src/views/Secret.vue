<template>
  <div class="home">
    <h1>Secret</h1>
    <div>{{username}}</div>
    <div>{{email}}</div>
    <div>{{createdAt}}</div>
  </div>
</template>

<script>
import Parse from 'parse'

export default {
  name: "secret",
  data() {
    return {
      email: null,
      createdAt: null,
      username: null,
    };
  },
  mounted() {
    const user = Parse.User.current()
    const {username, createdAt, email} = user.toJSON()
    this.username = username
    this.createdAt = createdAt
    this.email = email
  },
  methods: {
  },
  components: {}
};
</script>
