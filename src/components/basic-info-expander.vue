<!-- user-create-form.vue -->

<template id="basic-info-expander">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ma-3">
      <v-form v-model="valid" ref="basicinfo">
        <v-text-field label="Title" v-model="title">
        </v-text-field>
        <v-select :items="authors" item-text="name" item-value="id" v-model="author" label="Author" autocomplete></v-select>        
        <v-select label="Co-Authors" v-bind:items="authors" v-model="coauthors" item-text="name" item-value="id" multiple chips max-height="auto" autocomplete>
          <template slot="selection" scope="data">
            <v-chip close @input="data.parent.selectItem(data.item)" :selected="data.selected" class="chip--select-multi" :key="JSON.stringify(data.id)">
              {{ data.item.name }}
            </v-chip>
          </template>
          <template slot="item" scope="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-tile-content v-text="data.item"></v-list-tile-content>
            </template>
            <template v-else>
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
              </v-list-tile-content>
            </template>
          </template>
        </v-select>
        <v-layout row>
          <v-select :items="types" item-text="name" item-value="id" v-model="type" label="Publication Type" autocomplete></v-select>
          <v-spacer></v-spacer>
         <v-text-field label="Year" item-text="publication_year" v-model="publication_year">
          </v-text-field>
        </v-layout>
      </v-form>
    </v-card>
  </v-card>
</template>

<script>
export default {

  name: 'basic-info-expander',
  data() {
    return {
      valid: false,
      title: '',
      // will be an id (int)
      author: 0,
      // will be an array of id's (ints)
      coauthors: [],
      type: 0,
      publication_year: '',
      // hardcoded for now - need to fetch from db on created
      authors: [
        { id: 1, name: 'Emilie Wood' },
        { id: 2, name: 'Tommie Meyer' },
      ],
      types: [
        { id: 1, name: 'Journal' },
        { id: 2, name: 'Book' },
      ],
    };
  },
  methods: {
    clear() {
      this.$refs.basicinfo.reset();
      this.title = '';
      this.author = 0;
      this.coauthors = [];
      this.publication_year = '';
      this.type = 0;
    },
    submit() {
      this.$emit(this.data);
    },
  },
  watch: {
    clearReport() {
      if (this.$store.getters.clearReport === true) {
        this.clear();
      }
    },
  },
};
</script>
