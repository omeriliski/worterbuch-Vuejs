<template>
  <div class=" bg-slate-500 h-screen">
    <Navbar />
    <div class=" mt-40">
    <Carousel :itemsToShow="1" :wrapAround="true">
      <Slide v-for="current in wordList.length" :key="current">
        <Card class="card" :word="wordList[current-1]" />

        <!-- <div class="carousel__item">{{ slide }}</div> -->
      </Slide>
    </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import Navbar from '../components/navbar.vue'
import Card from '../components/card.vue'
import 'vue3-carousel/dist/carousel.css'
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
import {ref} from "vue"
export default {
    components:{Navbar,Card,Carousel,Slide},
    setup(){
        const current=ref(0)
        const store = useStore()
        store.commit("getData")
        // const getPreviousCard = ()=>{
        //     if(current.value>0) current.value--
        // }
        // const getNextCard = ()=>{
        //     if(current.value<store.getters.wordList.length-1) current.value++
        //     console.log('wordList.length :>> ', store.getters.wordList.length-1);
        // }
        const wordList=computed(()=>{ 
            return store.getters.wordList
      })
      return {wordList,current}
    }
}
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
