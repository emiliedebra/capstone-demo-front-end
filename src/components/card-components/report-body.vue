<!-- report-body -->

<template id="report-body">
  <v-card flat>
    <v-card-text>{{ body.additional_info }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'report-body',
  props: ['body'],
};
</script>
