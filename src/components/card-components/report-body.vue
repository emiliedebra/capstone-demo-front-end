<!-- report-body -->

<template id="report-body">
  <v-card-text flat>
    <v-card-text>{{ body.additional_info }}</v-card-text>
  </v-card-text>
</template>

<script>
export default {
  name: 'report-body',
  props: ['body'],
};
</script>
