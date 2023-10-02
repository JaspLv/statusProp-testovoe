<template>
  <div class="profile">
    <div class="profile_mainInfo">
      <Text
          :value="profile.firstName"
          placeholder="Введите имя"
          type="text"
          @change="value => updateProfile('firstName', value)"
      />
      <Text
          :value="profile.lastName"
          placeholder="Введите фамилию"
          type="text"
          @change="value => updateProfile('lastName', value)"
      />
    </div>
    <div class="profile_other">
      <div class="profile_birthday">
        <Datepicker
            :value="profile.birthday"
            @change="value => updateProfile('birthday', value)"/>
      </div>
      <div class="profile_country">
        <Select
            :current="findCurrentCountry(profile.country)"
            :options="options"
            title="Город"
            @change="o => updateProfile('country', o.name)"
        />
      </div>
    </div>
    <div class="profile_actions">
      <Button color="primary" variant="contained" @click="saveProfile">Сохранить</Button>
    </div>
  </div>

</template>

<script lang="ts" setup>
import Text from "~/components/common/fields/Text.vue"
import Button from "~/components/common/Button.vue"
import Datepicker from "~/components/common/fields/Datepicker.vue"
import Select from "~/components/common/Select.vue"
import {useProfileStore} from "~/store/profile"
import {ProfileType} from "~/types/profile"
import {storeToRefs} from "pinia"

const profileStore = useProfileStore()

const {profile} = storeToRefs(profileStore)

const options = [
  {name: 'Lida'},
  {name: 'Minsk'},
  {name: 'Gomel'},
  {name: 'Grodno'},
]

const findCurrentCountry = (name: string) => {
  return options.find(item => item.name === name)
}

const updateProfile = (key: keyof ProfileType, value: string) => {
  const newProfile = {
    ...profile.value,
    [key]: value
  }
  profileStore.setProfile(newProfile)
}

const saveProfile = () => {
  profileStore.saveProfile()
}

</script>

<style lang="scss" scoped>
.profile {
  background-color: #FFFF;
  max-width: 1000px;
  height: 100%;
  padding: 1rem;

  &_mainInfo {
    display: flex;
    gap: 20px;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
  }

  &_other {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &_actions {
    margin-top: 2rem;
    width: 100%;
  }
}
</style>
