export const API_URLS = {
  AUTH: {
    KAKAO_LOGIN: `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`,
  },
};
