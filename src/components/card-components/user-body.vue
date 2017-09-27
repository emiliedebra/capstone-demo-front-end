<!-- report-body -->

<template id="user-body">
  <v-card flat class="pl-4 pb-3">
    <v-divider class="mb-2"></v-divider>
    <div>Email: {{ body.email }}</div>
    <div>Access Level: {{ accessLevelName }}</div>
    <div>Node: {{ body.node }}</div>
  </v-card>
</template>

<script>
export default {
  name: 'user-body',
  props: ['body'],
  data() {
    return {
      accessLevelName: '',
    };
  },
  mounted() {
    this.getAccessLevelName();
    this.getNodeName();
  },
  methods: {
    getAccessLevelName() {
      // TODO: do more efficiently
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
    getNodeName() {
      // TODO: complete with get nodes
      if (!this.body.node || this.body.node === null) {
        this.body.node = 'None';
      }
    },
  },
};
</script>
