<template>
    <div class="flex">
        <div class=" flex items-center">
            <i v-for="star in word.rating" :key="star.id" class="fas fa-star p-3"></i>
        </div>
        <div>
            <img v-if="$store.state.animatedStar" class="animated-star" src="../assets/star3.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props:{word:Object},
     setup(props){
        console.log('props.word :>> ', props.word);
        return{} 
     }
}
</script>

<style>
    .fas{
        color: rgba(245, 187, 80, 0.884);
        font-size: 1.5rem;
    }
    .animated-star{
        height: 4rem;
        width: 4rem;
    }
</style>