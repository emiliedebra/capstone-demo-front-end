<!-- LoginView.vue -->

<!-- For construction purposes -->
<template>
  <v-card flat class="page">
    <v-card-text>
      <h6 class="text-xs-center">{{ msg }}</h6>
      <p class="text-xs-center">{{ submsg }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'page',
  data() {
    return {
      msg: 'You have been logged out',
      submsg: 'You can now browse the sites as an Observer',
    };
  },
};
</script>
