// import { RegisterBossType } from '@/apps/boss/RegisterBoss';
// import { UserSignUpDataProps } from '@/apps/RegisterMember';
import { sendApi } from '..'

export const memberApi = {
  getInfo: async () => {
    return sendApi.get('/api/v1/my-page', {})
  },
  setBossInfo: async (props: /* RegisterBossType */ any) => {
    return sendApi.post('/api/v1/bossInfo', props)
  },
  getBossInfo: async () => {
    return sendApi.get('/api/v1/boss/check', {})
  },
}
