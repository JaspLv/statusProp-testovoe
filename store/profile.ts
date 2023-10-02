import {defineStore} from "pinia"
import {ProfileType} from "~/types/profile"
import ProfileService from "~/services"
import {ProfileState} from "~/store/types"


export const useProfileStore = defineStore({
    id: "profile-store",
    state: (): ProfileState => {
        return {
            profile: {
                firstName: '',
                lastName: '',
                birthday: '',
                country: 'Lida'
            },
            auth: false
        }
    },
    actions: {
        setAuth(auth: boolean) {
            this.auth = auth
        },
        setProfile(profile: ProfileType) {
            this.profile = profile
        },
        getProfileServer() {
            const res = ProfileService.get('profile')
            if (!res) return
            this.profile = res
        },
        async checkAuth() {
            const res = (await (await fetch('/api/login')).json())
            this.setAuth(res)
            return res
        },
        async logout() {
            await fetch('/api/login', {
                method: 'DELETE'
            })
            this.auth = false
        },
        saveProfile() {
            ProfileService.update('profile', this.profile)
        },
    },
    getters: {
        getAuth(state): boolean {
            return state.auth
        },
        getProfile(state): ProfileType {
            return state.profile
        }
    }
})
