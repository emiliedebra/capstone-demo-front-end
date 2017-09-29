<!-- user-list -->

<template id="user-list">
  <v-expansion-panel expand>
    <v-expansion-panel-content v-for="item in outputs" :key="item.id">
      <div slot="header">{{ item.name }}</div>
      <user-body :body="item"></user-body>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import userBody from '../card-components/user-body.vue';

export default {
  name: 'user-list',
  props: ['outputs'],
  data() {
    return {
      // nothing
    };
  },
  components: {
    userBody,
  },
};
</script>
