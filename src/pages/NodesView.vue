<!-- NodesView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <v-expansion-panel popout class="pa-0">
      <v-expansion-panel-content>
        <div slot="header">Create New Node</div>
        <node-create-form></node-create-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>
import nodeCreateForm from '../components/forms/node-create-form.vue';

export default {
  name: 'nodes',
  data() {
    return {
      // nothing for now
    };
  },
  components: {
    nodeCreateForm,
  },
};
</script>
