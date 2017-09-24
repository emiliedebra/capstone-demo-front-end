<!-- author-create-dialog -->

<template>
  <v-dialog persistent v-model="this.$store.getters.addAuthorDialog">  
    <v-card class="text-xs-center">
      <report-modify-form-toolbar @close="close"></report-modify-form-toolbar>
      <v-card flat fluid class="ma-0">
        <user-create-form @toggle="close"></user-create-form>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import userCreateForm from '../forms/user-create-form.vue';
import reportModifyFormToolbar from '../form-components/report-modify-form-toolbar.vue';

export default {

  name: 'author-create-dialog',
  data() {
    return {
      // nothing for now
    };
  },
  methods: {
    close() {
      // toggle author-create-dialog
      this.$store.dispatch('changeAddAuthorDialog');
    },
  },
  components: {
    userCreateForm,
    reportModifyFormToolbar,
  },
};
</script>
