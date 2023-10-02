export default defineEventHandler(async (event) => {
    const url = getRequestURL(event)
    const parsedCookies = parseCookies(event)
    if (!parsedCookies.auth && !url.href.endsWith('/login')) {
        return await sendRedirect(event, '/login', 301)
    }
    if (!Boolean(Number(parsedCookies.auth)) && !url.href.endsWith('/login')) {
        await sendRedirect(event, '/login', 301)
    }
})
