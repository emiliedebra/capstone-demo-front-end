<!-- user-list -->

<template id="user-list">
  <v-expansion-panel expand>
    <v-expansion-panel-content v-for="item in outputs" :key="item.id">
      <div slot="header">{{ item.name }}</div>
      <user-body :body="item"></user-body>
      <user-button-panel :userID="item.id"></user-button-panel>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import userBody from '../card-components/user-body.vue';
import userButtonPanel from '../card-components/user-button-panel.vue';

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
    userButtonPanel,
  },
};
</script>
