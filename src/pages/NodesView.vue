<!-- NodesView -->

<template>
  <v-card flat fluid class="create pt-3" style="background-color: transparent">
    <node-modify-dialog></node-modify-dialog>
    <node-delete-dialog></node-delete-dialog>
    <v-divider></v-divider>
    <div class="pt-3">
      <h6>Existing Nodes</h6>
      <node-list :outputs="nodes"></node-list>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import nodeModifyDialog from '../components/pop-up-dialogs/node-modify-dialog.vue';
import nodeDeleteDialog from '../components/pop-up-dialogs/node-delete-dialog.vue';
import nodeList from '../components/app-components/node-list.vue';
import { getNodes, getUser } from '../services/data-access-layer';

export default {
  name: 'node-view',
  data() {
    return {
      nodes: [],
    };
  },
  components: {
    nodeModifyDialog,
    nodeDeleteDialog,
    nodeList,
  },
  computed: {
    ...mapState({
      nodeContext: state => state.nodeContext,
    }),
  },
  watch: {
    nodeContext(state) {
      if (state === null) {
        this.getNodesDetailed();
      }
    },
  },
  mounted() {
    getNodes()
      .then((nodes) => {
        this.nodes = nodes.map((node) => {
          getUser(node.nodeAdmin)
            .then((user) => {
              node.adminName = `${user.first_name} ${user.last_name}`;
            });
          return node;
        });
      });
    this.$store.dispatch('changeToolTip', 'New Node');
  },
  methods: {
    getNodesDetailed() {
      getNodes()
        .then((nodes) => {
          this.nodes = nodes.map((node) => {
            getUser(node.nodeAdmin)
              .then((user) => {
                node.adminName = `${user.first_name} ${user.last_name}`;
              });
            return node;
          });
        });
      this.$store.dispatch('changeToolTip', 'New Node');
    },
  },
};
</script>
