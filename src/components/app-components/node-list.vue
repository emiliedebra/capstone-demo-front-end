<!-- node-list -->

<template id="node-list">
  <v-expansion-panel expand>
    <v-expansion-panel-content v-for="item in outputs" :key="item.id">
      <div slot="header">{{item.name}}</div>
      <node-body :body="item"></node-body>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import nodeBody from '../card-components/node-body.vue';

export default {
  name: 'node-list',
  props: {
    outputs: {
      type: Array,
    },
  },
  data: () => ({
    show: false,
  }),
  components: {
    nodeBody,
  },
};
</script>
