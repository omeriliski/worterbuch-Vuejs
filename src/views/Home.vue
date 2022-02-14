<template>
  <div >
    <Navbar />
    <HomeHeader/>
    <HowItWorks/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import HomeHeader from '../components/homeHeader.vue';
import HowItWorks from "../components/howItWorks.vue";
import Footer from "../components/footer.vue";

export default {
  components: { Navbar,HomeHeader, HowItWorks, Footer },
  setup() {}
}
</script>


