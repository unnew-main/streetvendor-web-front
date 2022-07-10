// import { RegisterStorePropsType } from '@/types/store.type'
import { sendApi } from '..'

export const storeApi = {
  getListStore: async () => sendApi.get('/api/v1/my-stores', {}),

  getDetailStore: async (storeId: number) =>
    sendApi.get(`/api/v1/store/detail/${storeId}`, {}),

  createStore: async (props: /* RegisterStorePropsType */ any) =>
    sendApi.post('/api/v1/store', props),

  openStore: async (storeId: number) =>
    sendApi.put(`/api/v1/store/sales-status/open/${storeId}`, {}),

  closeStore: async (storeId: number) =>
    sendApi.put(`/api/v1/store/sales-status/closed/${storeId}`, {}),

  /**
   * @param distance N키로미터(MAX: 2)
   * @param latitude 경도
   * @param longitude 위도
   * @returns
   */
  getLocationOpenStore: async (
    distance: number,
    latitude: number,
    longitude: number,
  ) =>
    sendApi.get('/api/v1/stores/location/open', {
      distance,
      latitude,
      longitude,
    }),

  getLocationAllStore: async (
    distance: number,
    latitude: number,
    longitude: number,
  ) =>
    sendApi.get('/api/v1/stores/location', {
      distance,
      latitude,
      longitude,
    }),

  getAllLocationStore: async (lastId: number, size: number) =>
    sendApi.get('/api/v1/stores', { lastId, size }),

  removeStore: async (storeId: number) =>
    sendApi.delete(`/api/v1/store/${storeId}`, {}),
}
