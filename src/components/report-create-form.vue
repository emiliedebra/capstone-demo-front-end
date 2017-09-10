<!-- report-body.vue -->

<template id="report-create-form">
<v-card class="text-xs-center">
  <report-create-form-toolbar @close="close"></report-create-form-toolbar>
  <!-- Input Form -->
  <v-card flat fluid class="ma-3">
    <!-- <v-card-text> -->
      <h6 class="text-xs-left">New Research Output</h6>
      <form ref="createform" @clearReport="clear">
        <v-text-field label="Title" v-model="title">
        </v-text-field>
        <v-text-field label="Author First Name" v-model="authorFirst">
        </v-text-field>
        <v-text-field label="Author Last Name" v-model="authorLast">
        </v-text-field>
        <v-text-field label="Co-Author" v-model="coauthor">
        </v-text-field>
        <v-select :items="publicationTypes" v-model="pubType" label="Publication Type"></v-select>
        <v-text-field label="Year" v-model="year"></v-text-field>
        <v-text-field
          label="Enter Abstract"
          v-model="abstract"
          full-width
          height="200"
          multi-line
          single-line></v-text-field>
        <v-text-field
          label="Enter Research Text"
          v-model="text"
          full-width
          multi-line
          single-line></v-text-field>
      </form>
    <!-- </v-card-text> -->
  </v-card>
  <!-- Button Panel -->
  <v-container fixed grid-list-xs text-xs-center>
    <v-btn flat class="ma-0 pa-0" @click="submit">submit</v-btn>
    <v-btn flat class="ma-0 pa-0" @click="clear">clear</v-btn>
  </v-container>
</v-card>  
</template>

<script>
import reportCreateFormToolbar from './report-create-form-toolbar';
// import reportCreateFormHeader from './report-create-form-header';
import { postResearchOutput } from '../utils/data-access';

export default {

  name: 'report-create-form',
  data() {
    return {
      title: '',
      authorFirst: '',
      authorLast: '',
      coauthor: '',
      year: '',
      abstract: '',
      text: '',
      dialog: false,
      pubType: null,
      publicationTypes: [
        'Journal',
        'Newspaper',
        'Book',
      ],
    };
  },
  components: {
    reportCreateFormToolbar,
  },
  methods: {
    clear() {
      this.$refs.createform.reset();
      this.title = '';
      this.authorFirst = '';
      this.authorLast = '';
      this.coauthor = '';
      this.year = '';
      this.text = '';
    },
    close() {
      this.clear();
      this.$emit('toggleDialog');
    },
    toggleDialog() {
      this.clear();
      this.$emit('toggleDialog');
    },
    submit() {
      postResearchOutput(this)
        .then(() => {
          this.toggleDialog();
        });
    },
  },
};
</script>
