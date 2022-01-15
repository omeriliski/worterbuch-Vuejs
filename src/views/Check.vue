<template>
    <div>
        <Navbar/>
        <Card v-for="word in wordList" :key="word.id"/>
    </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Card from '../components/card.vue';
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
export default {
    components:{Navbar,Card},
    setup(){
        const store = useStore()
        const wordList=computed(()=>{ 
            return store.getters.wordList

      })
      return {wordList}
    }
}
</script>