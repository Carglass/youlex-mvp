<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-btn text to="/">
          <v-toolbar-title>Youlex</v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn to="/create" text>Lex do it!</v-btn>
          <v-btn to="/leges" text>My Leges</v-btn>
          <v-btn to="/search" text>Browse</v-btn>
          <v-btn to="/membership" text>Membership</v-btn>
          <v-btn to="/about" text>About</v-btn>
          <v-spacer></v-spacer>
          <v-btn to="/login" text>Login</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
      <v-footer>
        <v-spacer></v-spacer>
        <div>&copy; 2020 Youlex</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
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
