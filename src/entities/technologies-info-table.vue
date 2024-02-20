<template>
  <v-container>
    <v-banner v-if="technologiesInfo === null" color="blue lighten-4">
      Данных пока нет
    </v-banner>

    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="(item, key) in technologiesInfo[0]" :key="item.id">
              {{ key }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in technologiesInfo" :key="item.id">
            <td v-for="(val, key) in item" :key="val.id">
              <template v-if="typeof item[key] === 'object'">
                {{ item[key].join(', ') }}
              </template>

              <template v-else>
                {{ item[key]}}
              </template>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>


<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters(['technologiesInfo']),
  }
</script>
