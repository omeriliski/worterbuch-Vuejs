<template>
    <div class=" bg-slate-200">
        <Navbar class="w-full"/>
        <div class="card-wrapper xl:w-1/3 md:w-2/3 flex justify-between items-center">
            <img @click="getPreviousCard" class="arrow" src="../assets/left-arrow.png" alt="">
            <Card class="card" :word="wordList[current]"/>
            <img @click="getNextCard" class="arrow" src="../assets/right-arrow.png" alt="">
        </div>
    </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Card from '../components/card.vue';
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
import {ref} from "vue"
export default {
    components:{Navbar,Card},
    setup(){
        const current=ref(0)
        const store = useStore()
        store.commit("getData")
        const getPreviousCard = ()=>{
            if(current.value>0) current.value--
            console.log('current.value :>> ', current.value);
        }
        const getNextCard = ()=>{
            if(current.value<store.getters.wordList.length-1) current.value++
            console.log('wordList.length :>> ', store.getters.wordList.length-1);
            console.log('current.value :>> ', current.value);
        }
        const wordList=computed(()=>{ 
            return store.getters.wordList
      })
      return {wordList,current,getPreviousCard,getNextCard}
    }
}
</script>

<style>
    .card-wrapper{
        margin: auto;
        /* border:1px solid red; */
        height: 90vh;
    }
    .arrow{
        width: 4rem;
        height: 4rem;
    }
    .arrow:hover{
        cursor: pointer;
    }
    /* .card{
        left: 4.5rem;
    } */
</style>

