<template>
  <div>
    <p class="display-4 font-weight-black">A tool for Modern Democracies</p>
    <v-carousel>
      <v-carousel-item v-for="highlight in highlights" v-bind:key="highlight.id"
        >{{highlight.title}}</v-carousel-item
      >
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    refreshHighlights() {
      this.$store.dispatch('refreshHighlights');
    },
  },
  computed: {
    highlights() {
      return this.$store.state.highlights;
    },
  },
  created() { this.$store.dispatch('refreshHighlights'); },
};
</script>
