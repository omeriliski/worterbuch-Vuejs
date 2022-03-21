<template>
    <div id="card-wrapper" >      
      <div class=".test"></div>
      <div class="card bg-white max-w-xl rounded-2xl px-10 py-5 shadow-lg hover:shadow-2xl transition duration-500 ">
        <div class="mt-4 flex flex-col h-full justify-between">
          <div>
            <!--targetLanguage  -->
            <h1 id="targetLanguage-card-word" class="targetLanguage-card-word text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
              {{word.targetLanguage}}
            </h1>
            <!-- firstLanguage -->
            <h2 v-if="$store.state.showAnswer" id="firstLanguage-card-word" class="firstLanguage-card-word text-md text-red-500 hover:underline cursor-pointer">
              {{word.firstLanguage}}
            </h2>
            <p class="sentence-card-word mt-4 text-md text-gray-600">
              {{word.sentence}}
            </p>
            <div class="flex justify-between items-center">
              <div id="rating-card" class="rating-card">
                <Stars :word="word"/>
              </div>
              <div v-if="$store.state.wrong"  id="falseAlert" class="p-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span class="font-medium">Falsch!</span> <i class="far fa-frown text-xl ml-5"></i>
              </div>
              <div v-if="$store.state.correct" id="rightAlert" class="p-3 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span  class="font-medium">Richtig!</span><i class="far fa-smile text-xl ml-5"></i>
              </div>
            </div>
          </div>
          <!-- <div class="flex">
            <div v-for="i in word.firstLanguage.length" :key="i" class="border-b-2 w-4 ml-2">
          </div> 
          </div>-->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-10 pb-6">
                <input v-model="$store.state.answer" type="text" class="input-value pl-2 p-1 border border-indigo-600 rounded" name="" id="input" placeholder="bedeutung...">
                <button @click="compare" class="check-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded lg:\mt-6">Überprüfen</button>
              <!-- <div class="">
                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" alt="" />
              </div> -->
              <!-- <div class="text-sm font-semibold">John Lucas • <span class="font-normal"> 5 minutes ago</span></div> -->
            </div>
            <div>
                <!-- <div class="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">+</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>



import {useStore} from 'vuex';
import Stars from "./stars.vue";
export default {
    props:{word:Object, showAnswer:Boolean},
    components:{Stars},
    setup(props){
      const store = useStore()
      const deleteCardTemporarily=()=>{
        setTimeout(() => {
          store.state.answer="";      // clean the input box
          store.state.tempCardList = store.state.tempCardList.filter(e => e.id !== props.word.id)   //delete the word temporarily 
          console.log('store.state.tempCardList :>> ',store.state.tempCardList);
          store.state.showAnswer = false;
        },4000);
      }
      const changeRating=(arr, prozess)=>{
         arr.forEach((e,index) => {   
              // e.id==props.word.id ? e.rating++ :null
              if(e.id==props.word.id){
                if(prozess=="inc"){
                  if(e.rating<=4) e.rating++    // increase the rating
                }
                else{
                  if(e.rating>0) e.rating--     // decrease the rating
                }
                // prozess=="inc" & e.rating<=4 ? e.rating++ : e.rating --;    // increase or decrease the rating
                arr.splice(index,1,e);   // update the word list
              }
            });
      }

      const compare = ()=>{
        store.state.showAnswer = true;  // show the answer

        if(store.state.answer == props.word.firstLanguage) {
          store.state.correct=true      //  open the true alert
          store.state.animatedStar=true;  // show the animated star

          setTimeout(() => {
            changeRating(store.state.wordList,"inc")    //increase the rating in wordList
            store.commit("saveWordData")        // save the wordlist
            store.state.animatedStar=false;   // 2 seconds later hide the animated star
          }, 2000);
          setTimeout(() => {
            deleteCardTemporarily()
            store.state.correct=false;          // close the true alert 
            
          }, 2000);
        }
        else 
        {
          store.state.wrong=true;
          
          changeRating(store.state.wordList,"dec")    //increase the rating in wordList
          store.commit("saveWordData")
          deleteCardTemporarily()
          setTimeout(() => {
            store.state.wrong=false;
          }, 2000);
          
        }
      }
      return {compare}
    }
}
</script>

<style>
#card-wrapper{
  margin: 1rem;
}
.card{
  height: 300px;
  width: 100%;
  padding: 1rem;
}
#input{ 
  z-index: 10;
}

/* .container {
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
} */

.container button {
  cursor: pointer;
}

/* .slide {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: var(--red);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  line-height: 22px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
} */
</style>