<!-- User.vue -->

<!-- For construction purposes -->
<template>
  <v-card flat class="user">
    <v-card-text>
      <user-create-form @toggle="toggleDialog"></user-create-form>
      
        <v-dialog v-model="dialog" persistent width="800">
          
        <v-card class="text-xs-center">
          <v-card-text>The user was added successfully.</v-card-text>
          <v-btn @click.native="toggleDialog">Ok</v-btn>
        </v-card>
        </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script>
import userCreateForm from '../components/user-create-form';

export default {

  name: 'user',
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    userCreateForm,
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
