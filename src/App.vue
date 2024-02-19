<template>
  <v-app>
    <v-select :items="items" label="Default"></v-select>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
};
</script>
