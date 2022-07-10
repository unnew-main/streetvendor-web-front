// import { OrderType } from '@/types/order.type'
import { sendApi } from '..'

export const orderApi = {
  userOrder: async (props: /* OrderType */ any) => {
    return sendApi.post('/api/v1/order', props)
  },
  userCheckOrder: async () => {
    return sendApi.get('/api/v1/orders', {})
  },

  bossCancelOrder: async (storeId: number, orderId: number) => {
    return sendApi.delete(`/api/v1/${storeId}/orders/${orderId}/cancel`, {})
  },
  userCancelOrder: async (orderId: number) => {
    return sendApi.delete(`/api/v1/orders/${orderId}/cancel`, {})
  },
  bossCheckOrder: async (storeId: number) => {
    return sendApi.get(`/api/v1/orders/${storeId}`, {})
  },
}
