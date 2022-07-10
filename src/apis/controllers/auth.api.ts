import { sendApi } from '..'

export const authApi = {
  login: async (accessToken: string) => {
    return sendApi.post('/api/v1/auth/google', {
      requestToken: accessToken,
    })
  },
  logout: async () => {
    return sendApi.post('/api/v1/log-out', {})
  },
  signUp: async (props: /* UserSignUpDataProps */ any) => {
    return sendApi.post('/api/v1/sign-up', props)
  },
  signOut: async () => {
    return sendApi.put('/api/v1/sign-out', {})
  },
}
