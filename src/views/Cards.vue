<template>
  <div class="bg-slate-200">
    <Navbar class="w-full" />
    <div
      class="card-wrapper xl:w-1/3 md:w-2/3"
    >
    <div class="card mt-40">

      <!-- <Presence> -->
        <Motion
          :key="current"
          :initial="{ opacity: 0, x: coordinate }"
          :animate="{
            opacity: 1,
            x: 0,
            transition: { delay: 0.1 }
          }"
          :exit="{ opacity: 0, x: -coordinate }"
          class="slide"
        >
          <Card
            class="card"
            :word="tempCardList[current]"
            :showAnswer="showAnswer"
          />
        </Motion>
      <!-- </Presence> -->
      <div class="arrows mt-10">

          <img
            @click="getPreviousCard"
            class="arrow mr-10"
            src="../assets/left-arrow.png"
            alt=""
          />
        
          <img
            @click="getNextCard"
            class="arrow"
            src="../assets/right-arrow.png"
            alt=""
          />
      </div>
        
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Card from '../components/card.vue'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { Motion } from 'motion/vue'
export default {
  components: { Navbar, Card, Motion, },
  setup() {
    const current = ref(0)
    let coordinate = ref(0)
    const store = useStore()
    store.commit('getData')
    const mouseOver = () => {
      console.log('mouseOver')
    }
    const getPreviousCard = () => {
      if (current.value > 0) current.value--
      store.state.correct = false
      store.state.wrong = false
      coordinate.value = 200
    }
    const getNextCard = () => {
      if (current.value < store.getters.tempCardList.length - 1) current.value++
      store.state.correct = false
      store.state.wrong = false
      coordinate.value = -200
    }
    const wordList = computed(() => {
      return store.getters.wordList
    })
    const tempCardList = computed(() => {
      return store.getters.tempCardList
    })
    return {
      wordList,
      tempCardList,
      current,
      getPreviousCard,
      getNextCard,
      mouseOver,
      coordinate
    }
  }
}
</script>

<style>
.card-wrapper {
  margin: auto;
  /* border:1px solid red; */
  height: 77.5vh;

}
.card{
    height: 18rem;
}
.arrows{
    display: flex;
    justify-content: center;
}
.arrow {
  width: 4rem;
  height: 4rem;
}
.arrow:hover {
  cursor: pointer;
}
/* .card{
        left: 4.5rem;
    } */
</style>
