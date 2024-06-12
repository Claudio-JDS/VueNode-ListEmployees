/**
 * file: asstes/icons.ts
 * description: responsavel por lidar com a logica de ícones da aplicação
 */


// Importar Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Adicionar todos os ícones à biblioteca
library.add(fas, far, fab);

export { FontAwesomeIcon }
