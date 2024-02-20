<template>
  <v-app>
    <v-container>
      <v-row>
        <query-type-selector/>

        <check-site-form
          @submitForm="didFormSubmitted"
        />
      </v-row>
    </v-container>

    <hosting-info-table v-if="selectedTypeQuery === 'hosting'"/>

    <technologies-info-table v-else-if="selectedTypeQuery === 'technologies'"/>

    <alert-bar/>
  </v-app>
</template>


<script>
  import checkSiteForm from '@/entities/check-site-form.vue'
  import queryTypeSelector from '@/entities/query-type-selector.vue'
  import hostingInfoTable from '@/entities/hosting-info-table.vue'
  import technologiesInfoTable from '@/entities/technologies-info-table.vue'
  import alertBar from '@/entities/alert-bar.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'App',
    components: {
      'check-site-form': checkSiteForm,
      'query-type-selector': queryTypeSelector,
      'hosting-info-table': hostingInfoTable,
      'technologies-info-table': technologiesInfoTable,
      'alert-bar': alertBar,
    },

    computed: mapGetters(['selectedTypeQuery']),

    methods: {
      ...mapActions(['fetchHostingInfo', 'fetchTechnologiesInfo']),

      didFormSubmitted (siteAddress) {
        if(this.selectedTypeQuery === 'hosting') {
          this.fetchHostingInfo(siteAddress)
        }

        if(this.selectedTypeQuery === 'technologies') {
          this.fetchTechnologiesInfo(siteAddress)
        }
      }
    }
  };
</script>
