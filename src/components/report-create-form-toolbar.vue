<!-- report-create-form-toolbar.vue -->

<template id="report-create-form-toolbar">
  
  <v-system-bar card fixed window>
    <v-spacer></v-spacer> <!-- places close button to the right -->
    <v-btn icon @click.native="close">
      <v-icon class="text-xs-center">close</v-icon>
    </v-btn>
  </v-system-bar>

</template>

<script>
export default {
  name: 'report-create-form-toolbar',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
