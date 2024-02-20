<template>
  <v-sheet>
    <v-alert type="error" variant="tonal" dismissible v-for="(item, index) of alertList" :key="index">
      {{ item }}
    </v-alert>
  </v-sheet>
</template>


<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters(['alertList'])
  }
</script>
