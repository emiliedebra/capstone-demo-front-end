<!-- CreateView.vue -->

<template>
  <v-card flat class="create pt-3" 
  style="background-color: transparent">
    <v-expansion-panel popout class="pa-0">
      <v-expansion-panel-content>
        <div slot="header">Create Account</div>
        <user-create-form></user-create-form>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">Create Node</div>
        <node-create-form></node-create-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>
import userCreateForm from '../components/user-create-form';
import nodeCreateForm from '../components/node-create-form';

export default {
  name: 'create',
  data() {
    return {
      msg: 'Create Page Under Construction',
    };
  },
  components: {
    userCreateForm,
    nodeCreateForm,
  },
};
</script>
