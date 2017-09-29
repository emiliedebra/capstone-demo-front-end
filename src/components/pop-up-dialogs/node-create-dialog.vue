<!-- node-create-dialog -->

<template>
  <v-card>
    <v-dialog v-model="showDialog" persistent width="800">
      <node-create-form-toolbar @close="close"></node-create-form-toolbar>
      <node-create-form ref="form"></node-create-form>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { contextState } from '../../state-machine';
import nodeCreateForm from '../forms/node-create-form.vue';
import nodeCreateFormToolbar from '../form-components/node-create-form-toolbar.vue';

export default {
  name: 'node-create-dialog',
  components: {
    nodeCreateForm,
    nodeCreateFormToolbar,
  },
  computed: {
    ...mapState({
      showDialog: state => state.addContext === contextState.ADDNODE,
    }),
  },
  methods: {
    close() {
      this.$refs.form.clear();
    },
  },
};
</script>
