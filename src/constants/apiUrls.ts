const KAKAO_AUTH_URL = import.meta.env.VITE_KAKAO_AUTH_URL;
const KAKAO_API_URL = import.meta.env.VITE_KAKAO_API_URL;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const API_URLS = {
  AUTH: {
    KAKAO_LOGIN: `${KAKAO_AUTH_URL}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`,
    KAKAO_GET_TOKEN: (code: string | null) =>
      `${KAKAO_AUTH_URL}/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
  },
  DATA: {
    KAKAO_GET_USER: `${KAKAO_API_URL}/user/me`,
  },
};
