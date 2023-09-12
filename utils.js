import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
function checkUserAuthentication(req) {
    const isAuthenticated = req.cookies.isAuthenticated === 'true';
    return isAuthenticated;
}
//module.exports = { checkUserAuthentication };
export { __filename, __dirname, checkUserAuthentication }
