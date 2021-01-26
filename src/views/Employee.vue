<template>
<app-data></app-data>
</template>

<script>
import Data from '../components/Data'
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    'app-data': Data,
  },
  computed: {
    ...mapGetters([
        'employees'
    ])
  },
  methods: {
    ...mapActions([
        'getEmployees'
    ])
  },
  mounted() {
    this.getEmployees()
},

};
</script>
