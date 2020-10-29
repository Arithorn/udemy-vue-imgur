<template>
  <div class="ui secondary pointing menu">
    <router-link class="active item" to="/">Image Storage</router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link class="item" to="/upload">
          Upload
        </router-link>
        <router-link class="item" to="/">
          Galerie
        </router-link>
        <a class="item" href="#" @click="logout">
          Log Out
        </a>
      </div>
      <a v-else class="ui item" href="#" @click="login"> Log In </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: { ...mapGetters(["isLoggedIn"]) },
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>
<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
