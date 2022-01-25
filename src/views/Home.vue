<template>
    <div>
        <Navbar/>
        <InputWords/>
        <Table/>
    </div>
</template>

<script>

import Table from "../components/table.vue";
import Navbar from "../components/navbar.vue";
import InputWords from "../components/inputWords.vue";
// import {reactive} from "vue"
export default {
  name: 'Home',
  components:{Navbar,InputWords,Table},
  setup() {
  }
}
</script>
<style>
</style>