<template>
  <v-dialog persistent v-model="this.$store.getters.addAuthorDialog">  
    <v-card class="text-xs-center">
      <report-create-form-toolbar @close="close"></report-create-form-toolbar>
      <v-card flat fluid class="ma-0">
        <user-create-form @toggle="close"></user-create-form>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import userCreateForm from './user-create-form';
import reportCreateFormToolbar from './report-create-form-toolbar';

export default {

  name: 'author-create-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  methods: {
    close() {
      this.$store.dispatch('changeAddAuthorDialog');
    },
  },
  components: {
    userCreateForm,
    reportCreateFormToolbar,
  },
};
</script>
