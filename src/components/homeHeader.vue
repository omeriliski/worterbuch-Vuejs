<template>
    <div class="w-full mt-10">
      <div class="flex bg-white" style="height: 600px">
        <div
          class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
        >
          <div>
            <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
              Build Your <span class="text-indigo-600">Vocabulary</span>
            </h2>
            <p class="mt-2 text-sm text-gray-500 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <router-link
              @click="activateWordList"
                class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                to="/wordList"
                >Get Started
              </router-link>
              <a
                class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="#section2"
                >Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          class="hidden lg:block lg:w-1/2"
          style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
        >
          <div
            class="topImage h-full object-cover mr-10"
          >
            <div class="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import {useStore} from 'vuex'
export default {
    setup() {
        const store = useStore();
        const activateWordList=()=>{
            store.commit("activateMenu",1)
        }
        return {activateWordList}
        
    }
}
</script>
<style>
    .topImage{
        background-image: url("../assets/home/3.jpg");
        background-position: center;
        background-size: cover;
    }
</style>