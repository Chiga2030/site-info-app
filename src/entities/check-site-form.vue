<template>
  <v-col cols="12" md="8">
    <v-form @submit.prevent="didFormSubmitted">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="siteAddress"
            :rules="siteAddressRules"
            label="Адрес сайта"
            required
            outlined
          />
        </v-col>

        <v-col cols="12" md="4">
        <v-btn
          depressed
          color="primary"
          type="submit"
          :loading="isCheckSiteFormLoading"
          :disabled="!selectedTypeQuery || siteAddress.length < 1"
        >
          Проверить
        </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-col>
</template>


<script>
  import {mapGetters} from 'vuex'

  export default {
    data: () => ({
      siteAddressRules: [
        v => !!v || 'Введите адрес',
      ],
      siteAddress: ''
    }),

    computed: mapGetters(['isCheckSiteFormLoading', 'selectedTypeQuery']),

    methods: {
      didFormSubmitted () {
        this.$emit('submitForm', (this.siteAddress))
      }
    }
  };
</script>
