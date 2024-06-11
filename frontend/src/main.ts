// Importações de bibliotecas de estilo
import 'unocss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css'

// Importação do VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';

// Importações do Vue e App
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importações do Vualidate
import Vuelidate from '@vuelidate/core'

// Configuração do Vualidate


///// Criação do app Vue////////
const app = createApp(App);

// Vualidate
app.use(Vuelidate);

// Uso de plugins
app.use(VueSweetalert2);
app.use(router);

// Montagem do app Vue
app.mount('#app');
