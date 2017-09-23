<!-- CreateView -->

<template>
  <v-card flat fluid class="create pt-3" 
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
import userCreateForm from '../components/forms/user-create-form.vue';
import nodeCreateForm from '../components/forms/node-create-form.vue';

export default {
  name: 'create',
  data() {
    return {
      // nothing for now
    };
  },
  components: {
    userCreateForm,
    nodeCreateForm,
  },
};
</script>
