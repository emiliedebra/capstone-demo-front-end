<!-- Page -->

<!-- For construction purposes -->
<template>
  <v-card flat class="page">
    <v-card-text>
      <h6 class="text-xs-center">{{ msg }}</h6>
      <p class="text-xs-center">Check back soon for an updated version - we are working to bring you what you want!</p>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'page',
  data() {
    return {
      msg: 'Page Under Construction',
    };
  },
};
</script>
