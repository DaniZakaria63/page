<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    :permanent="primaryDrawer.type === 'permanent'"
    :temporary="primaryDrawer.type === 'temporary'"
    app
    overflow
    v-if="isLogged"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">System.EXE</v-list-item-title>
        <v-list-item-subtitle>This is Subcontent</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      name: "Drawer",
      primaryDrawer: {
        model: null,
        type: "default (no property)",
        clipped: false,
        floating: false,
        mini: false
      },
      items: [
        { title: "Users Data", icon: "mdi-account" ,link:'/'},
        { title: "Logout", icon: "mdi-power" ,link:'/logout'}
      ],
      right: null
    };
  },
  computed:{
    isLogged:function(){
      return this.$store.state.auth.status
    }
  }
};
</script>