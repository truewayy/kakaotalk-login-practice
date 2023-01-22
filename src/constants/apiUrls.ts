const KAKAO_URL = 'https://kauth.kakao.com/oauth';
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const API_URLS = {
  AUTH: {
    KAKAO_LOGIN: `${KAKAO_URL}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`,
    KAKAO_GET_TOKEN: (code: string | null) =>
      `${KAKAO_URL}/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
  },
};
