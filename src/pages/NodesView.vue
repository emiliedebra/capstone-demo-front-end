<!-- NodesView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <node-create-dialog></node-create-dialog>
    <v-divider></v-divider>
    <div class="pt-3">
      <h6>Existing Nodes</h6>
      <node-list :outputs="nodes"></node-list>
    </div>
  </v-card>
</template>

<script>
import nodeCreateForm from '../components/forms/node-create-form.vue';
import nodeCreateDialog from '../components/pop-up-dialogs/node-create-dialog.vue';
import nodeList from '../components/app-components/node-list.vue';
import { getNodes } from '../services/data-access-layer';

export default {
  name: 'node-view',
  data() {
    return {
      nodes: [],
    };
  },
  components: {
    nodeCreateForm,
    nodeCreateDialog,
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
