<template>
    <div>
        <Navbar/>
        <PoolTable/>
        Pool
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import PoolTable from "../components/poolTable.vue"
export default {
    components:{Navbar,PoolTable},
    setup() {
        
    }
    
}
</script>