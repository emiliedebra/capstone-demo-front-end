<!-- user-create-dialog -->

<template>
  <v-card>
    <v-dialog v-model="showDialog" persistent width="800">
      <user-create-form-toolbar @close="clear"></user-create-form-toolbar>
      <user-create-form ref="form"></user-create-form>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { contextState } from '../../state-machine';
import userCreateForm from '../forms/user-create-form.vue';
import userCreateFormToolbar from '../form-components/user-create-form-toolbar.vue';

export default {
  name: 'user-create-dialog',
  components: {
    userCreateForm,
    userCreateFormToolbar,
  },
  computed: {
    ...mapState({
      showDialog: state => state.addContext === contextState.ADDUSER,
    }),
  },
  methods: {
    clear() {
      this.$refs.form.clear();
    },
  },
};
</script>
