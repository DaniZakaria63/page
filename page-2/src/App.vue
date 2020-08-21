<template>
  <v-app>
    <Drawer />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Drawer from "./components/Drawer";
export default {
  name: "App",
  components: {
    Drawer
  }
};
</script>