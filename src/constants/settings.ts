export const settings = {
    api: {
        baseUrl: 'https://dev.street-vendor.shop',
        testUrl: '',
    },
    // social: {
    //     kakao: {
    //         client: '1f7663a774bf41304e310ba9bdb4b3d7',
    //         clientSecret: 'j2Dp3X2CZKRjQC6JBOxEY4kGMRGulNF8',
    //         redirect: 'http://localhost:3000/login',
    //     },
    //     naver: {
    //         client: 'MFo69Jwy5ujteBb6xTU5',
    //         clientSecret: 'YYLRuun9jW',
    //         state: 'NAVER_LOGIN',
    //         redirect: 'http://localhost:3000/login',
    //     },
    // },
} as const;

// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${settings.social.kakao.client}&redirect_uri=${settings.social.kakao.redirect}&response_type=code`;
// export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${settings.social.naver.client}&state=${settings.social.naver.state}&redirect_uri=${settings.social.naver.redirect}`;
