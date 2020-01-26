<template>
  <div class="create">
    <v-form ref="new-lex">
      <v-text-field v-model="title" label="Title"></v-text-field>
    </v-form>
    <tag-editor :tags="tags"></tag-editor>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TagEditor from '../components/TagEditor.vue';

@Component({
  components: {
    TagEditor,
  },
  computed: {
    tags() {
      return this.$store.state.createTags;
    },
  },
})
export default class Create extends Vue {
  @Prop() private msg!: string;

  title = '';
}
</script>
