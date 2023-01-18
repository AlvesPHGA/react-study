import '../style/style.css';

// annotation & inference
import {
   handleKeyup,
   normalizarTexto,
} from './modules/exercise01-annotation-inference.js';

normalizarTexto(' hello');
handleKeyup();

// union types
import { handleNumber } from './modules/exercise02-union-types.js';
handleNumber('200');
