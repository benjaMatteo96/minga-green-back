import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Importa el módulo 'path' aquí
import path from 'path';

export const urlArchivos = path.join(__dirname, '../../uploads');
export const ipFileServer = 'http://localhost:8000/api/file/';
