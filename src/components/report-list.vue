<!-- report-list.vue -->

<template id="report-list">
  <v-card flat>
    <report-card v-for="item in outputs" :item="item" :key="item.title">
    </report-card>
  </v-card>
</template>

<script>
import reportCard from './report-card.vue';

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
    reportCard,
  },
};
</script>
