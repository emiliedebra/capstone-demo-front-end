<!-- report-body.vue -->

<template id="report-body">
  <v-card flat>
    <v-card-text class="ma-0">{{ body }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'report-body',
  props: ['body'],
};
</script>
