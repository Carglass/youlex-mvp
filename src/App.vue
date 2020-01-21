<template>
  <div id="app">
    <v-app-bar>
      <v-toolbar-title>Youlex</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/about" text>Lex do it!</v-btn>
        <v-btn to="/about" text>My Leges</v-btn>
        <v-btn to="/about" text>Browse</v-btn>
        <v-btn to="/about" text>Membership</v-btn>
        <v-btn to="/about" text>About</v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/login" text>Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view />
    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; Youlex</div>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
