import { sessionService } from 'utils/sessionService';
import api from './api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: async (url: string, params?: any) => {
        const idSession = await sessionService.getIdSession();

        return params !== undefined
            ? api({
                  url: url,
                  method: 'get',
                  params: params,
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              })
            : api({
                  url: url,
                  method: 'get',
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              });
    },
    post: async (url: string, params: any) => {
        const idSession = await sessionService.getIdSession();

        return params !== undefined
            ? api({
                  url: url,
                  method: 'post',
                  data: params,
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              })
            : api({
                  url: url,
                  method: 'post',
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              });
    },
    put: async (url: string, params: any) => {
        const idSession = await sessionService.getIdSession();

        return params !== undefined
            ? api({
                  url: url,
                  method: 'put',
                  data: params,
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              })
            : api({
                  url: url,
                  method: 'put',
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              });
    },
    delete: async (url: string, params?: any) => {
        const idSession = await sessionService.getIdSession();

        return params !== undefined
            ? api({
                  url: url,
                  method: 'delete',
                  data: params,
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              })
            : api({
                  url: url,
                  method: 'delete',
                  headers: {
                      Authorization: `Bearer ${idSession}`,
                  },
              });
    },
};
