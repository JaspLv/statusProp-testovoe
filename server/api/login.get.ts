export default defineEventHandler(async (event) => {
    const parsedCookies = parseCookies(event)
    if (!parsedCookies.auth) {
        return false
    }
    return Boolean(Number(parsedCookies.auth))
})
