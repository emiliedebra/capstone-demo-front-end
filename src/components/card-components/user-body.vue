<!-- report-body -->

<template id="user-body">
  <v-card flat class="pl-4 pb-3">
    <v-divider class="mb-2"></v-divider>
    <div>Email: {{ body.email }}</div>
    <div>Access Level: {{ accessLevelName }}</div>
    <div>Node: {{ nodeName }}</div>
  </v-card>
</template>

<script>
import { getNodeName } from '../../services/data';

export default {
  name: 'user-body',
  props: ['body'],
  data() {
    return {
      accessLevelName: '',
      nodeName: '',
    };
  },
  mounted() {
    this.getAccessLevelName();
    this.getNode();
  },
  methods: {
    getAccessLevelName() {
      // TODO: do more efficiently (backend??)
      if (this.body.accessLevel === 0) {
        this.accessLevelName = 'Author';
      } else if (this.body.accessLevel === 1) {
        this.accessLevelName = 'CAIR Member';
      } else if (this.body.accessLevel === 2) {
        this.accessLevelName = 'Node Administrator';
      } else if (this.body.accessLevel === 3) {
        this.accessLevelName = 'Global Administrator';
      }
    },
    getNode() {
      // NOTE: Implement on backend?
      if (this.body.node !== 0 && (!this.body.node || this.body.node === null)) {
        this.nodeName = 'None';
      } else {
        getNodeName(this.body.node)
          .then((name) => { this.nodeName = name; });
      }
    },
  },
};
</script>
