//unocss
import 'unocss';
// sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// nprogress: barra de carregamento no navegador
import 'nprogress/nprogress.css'


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(VueSweetalert2);

app.use(router)

app.mount('#app')
