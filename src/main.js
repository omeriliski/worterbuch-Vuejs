import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "/dist/output.css"
import  VueFire from "vuefire";
import store from "./store";
import Carousel3d from 'vue-carousel-3d';

const app=createApp(App);
app.use(VueFire )
app.use(store)
app.use(router)
app.use(Carousel3d)
app.mount('#app')
