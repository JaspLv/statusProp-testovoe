export default defineEventHandler(async (event) => {
    setCookie(event, 'auth', '0')
    await sendRedirect(event, '/login', 200)
})
