<!-- node-create-form-toolbar -->

<template id="node-create-form-toolbar">
  <v-system-bar card fixed window>
    <div class="subheading">{{ title }}</div>
    <v-spacer></v-spacer>
    <!-- NOTE: places close button to the right -->
    <v-btn icon @click.native="close">
      <v-icon class="text-xs-center">close</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script>
export default {
  name: 'node-create-form-toolbar',
  data() {
    return {
      title: 'Add New Node',
    };
  },
  methods: {
    close() {
      // fire user-modify-dialog to close
      this.$store.dispatch('changeAddContext', null);
      this.$emit('close');
    },
  },
};
</script>
