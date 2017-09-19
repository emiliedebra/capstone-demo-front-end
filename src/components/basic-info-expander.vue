<!-- user-create-form.vue -->

<template id="basic-info-expander">
  <v-card flat class="text-xs-center">
    <!-- Input Form -->
    <v-card flat fluid class="ml-3 mr-3 mt-0">
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
         <v-text-field label="Year" :rules="yearRules" item-text="publication_year" v-model="publication_year">
          </v-text-field>
        </v-layout>
      </v-form>
    </v-card>
  </v-card>
</template>

<script>
// TODO: Figure out how to use this to get authors every time 
// research output needs to be created
// import { getAuthors } from '../utils/data-access.js';
import { getPublicationTypes, getUsers } from '../utils/data.js';

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
      authors: [],
      types: [],
      yearRules: [
        v => (v && v.length === 4) || 'Invalid year',
      ],
    };
  },
  created() {
    this.types = getPublicationTypes();
    this.authors = getUsers();
  },
  methods: {
    clear() {
      this.$refs.basicinfo.reset();
      this.title = '';
      this.author = null;
      this.coauthors = [];
      this.publication_year = '';
      this.type = null;
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
