<!-- report-body.vue -->

<template id="report-create-form">
<v-card class="text-xs-center">
  
  <author-create-dialog></author-create-dialog>
  <report-create-form-toolbar slot="header" @close="close"></report-create-form-toolbar>
  <!-- Input Form -->
  <!-- REFACTOR to expansion panels rather -->
  <v-card flat fluid class="ma-3">
      <h6 class="text-xs-left">New Research Output</h6>
      <form ref="createform" @clearReport="clear">
        <v-text-field label="Title" v-model="title">
        </v-text-field>
        <v-select label="Author" :items="authors" v-model="authorID">
        </v-select>
        <!-- FOR DEV PURPOSES -->
        <v-btn @click.native="changeAddAuthorDialog">Add New Author</v-btn>
        <v-select label="Co-Author" :items="coauthors" v-model="coauthorID">
        </v-select>
        <v-select :items="publicationTypes" v-model="pubType" label="Publication Type"></v-select>
        <v-text-field label="Year" v-model="year"></v-text-field>
        <v-text-field label="Enter Abstract" v-model="abstract" full-width height="200" multi-line single-line></v-text-field>
        <v-text-field label="Enter Research Text" v-model="text" full-width multi-line single-line></v-text-field>
      </form>
  </v-card>
  <!-- Button Panel -->
  <v-container slot="footer" fixed grid-list-xs text-xs-center>
    <v-btn flat class="ma-0 pa-0" @click="submit">submit</v-btn>
    <v-btn flat class="ma-0 pa-0" @click="clear">clear</v-btn>
  </v-container>
  
</v-card>  
</template>

<script>
import reportCreateFormToolbar from './report-create-form-toolbar';
import authorCreateDialog from './author-create-dialog';
// import reportCreateFormHeader from './report-create-form-header';
import { postResearchOutput } from '../utils/data-access';

export default {

  name: 'report-create-form',
  data() {
    return {
      title: '',
      authors: [
        'John Day',
        'Percy Apple',
      ],
      coauthors: [
        'John Day',
        'Percy Apple',
      ],
      authorID: null,
      coauthorID: null,
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
    authorCreateDialog,
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
      this.changeAddReportDialog();
    },
    submit() {
      postResearchOutput(this)
        .then(() => {
          this.close();
        });
    },
    changeAddReportDialog() {
      this.$store.dispatch('changeAddReportDialog');
    },
    changeAddAuthorDialog() {
      this.$store.dispatch('changeAddAuthorDialog');
    },
  },
};
</script>
