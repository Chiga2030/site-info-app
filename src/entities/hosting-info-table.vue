<template>
  <v-container>
    <v-banner v-if="hostingInfo === null" color="blue lighten-4">
      Данных пока нет
    </v-banner>

    <v-simple-table v-else>
      <template v-slot:default>
        <tbody>
          <tr
            v-for="(val, key) in hostingInfo"
            :key="key"
          >
            <td>{{ key }}</td>
            <td>{{ val }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>


<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters(['hostingInfo']),
  }
</script>
