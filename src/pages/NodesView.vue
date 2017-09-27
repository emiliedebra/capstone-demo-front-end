<!-- NodesView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <v-expansion-panel popout class="pa-0 pb-3">
      <v-expansion-panel-content>
        <div slot="header">Create New Node</div>
        <node-create-form></node-create-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-divider></v-divider>
    <div class="pt-2">
      <h6>Existing Nodes</h6>
      <node-list :outputs="nodes"></node-list>
    </div>
  </v-card>
</template>

<script>
import nodeCreateForm from '../components/forms/node-create-form.vue';
import nodeList from '../components/app-components/node-list.vue';
import { getNodes } from '../services/data';

export default {
  name: 'node-view',
  data() {
    return {
      nodes: [],
    };
  },
  components: {
    nodeCreateForm,
    nodeList,
  },
  mounted() {
    // NB: using local data
    // get reports to display in report-list
    getNodes()
      .then((nodes) => {
        this.nodes = nodes;
      });
  },
};
</script>
