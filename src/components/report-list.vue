<!-- report-list.vue -->

<template id="report-list">
  <v-card>
    <report-card v-for="item in outputs" :item="item" :key="item.title">
    </report-card>
  </v-card>
</template>

<script>
export default {
  name: 'report-list',
  props: {
    outputs: {
      type: Array,
    },
  },
  data: () => ({
    show: false,
  }),
  components: {
    'report-card': () => import('./report-card.vue'),
  },
};
</script>
