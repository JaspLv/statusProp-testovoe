class ProfileService {
    public get = (key: string) => {
        const value = typeof window !== 'undefined' && window.localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
        return null
    }

    public update = (key: string, data: any) => {
        typeof window !== 'undefined' && window.localStorage.setItem(key, JSON.stringify(data))
    }
}


export default new ProfileService()
