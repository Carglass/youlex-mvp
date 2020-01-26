<template>
  <div class="tag-editor">
    <v-chip v-for="tag in tags" v-bind:key="tag">{{tag}}</v-chip>
    <v-text-field label="New tag" v-model="newTag" @change="updateTags"></v-text-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class TagEditor extends Vue {
  @Prop() private tags!: string[];

  newTag=''

  updateTags(): void {
    if (this.newTag !== '') {
      this.$store.dispatch('addCreateTag', this.newTag);
      this.newTag = '';
    }
  }
}
</script>
