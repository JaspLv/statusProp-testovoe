export default defineEventHandler(async (event) => {
    const {login, password} = await readBody(event)
    if (login && password) {
        if (login === 'admin' && password === 'admin') {
            setCookie(event, 'auth', '1')
            return true
        }
    }
    return false
})
