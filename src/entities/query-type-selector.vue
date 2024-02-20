<template>
  <v-col cols="12" md="3">
    <v-select
      :items="queryTypeSelectorItems"
      item-text="label"
      @change="setSelectedTypeQuery"
      label="Тип запроса"
      outlined
    />
  </v-col>
</template>


<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    computed: mapGetters(['queryTypeSelectorItems']),

    methods: {
      ...mapActions(['setSelectedTypeQuery']),
      ...mapMutations(['setSelectedTypeQuery']),
    }
  }
</script>
