<!-- report-create-form-toolbar.vue -->

<template id="report-create-form-toolbar">
  
  <v-system-bar card fixed class="pa-0 ma-0" window>
  <v-container grid-list-xs text-xs-right>
    <v-toolbar-side-icon @click.native="close">
      Close
    </v-toolbar-side-icon>
  </v-container>

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
