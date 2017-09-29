<!-- user-create-form-toolbar -->

<template id="user-create-form-toolbar">
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
  name: 'user-create-form-toolbar',
  data() {
    return {
      title: 'Add New User',
    };
  },
  methods: {
    close() {
      // fire user-create-dialog to close
      this.$emit('close');
      this.$store.dispatch('changeAddContext', null);
    },
  },
};
</script>
