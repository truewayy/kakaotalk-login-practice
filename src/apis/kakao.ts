import { API_URLS } from '../constants/apiUrls';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants/auth';
import { setLocalStorage } from '../utils/storage';
import http from './instance';

export const kakaoAuth = async (code: string | null) => {
  try {
    const { data: user } = await http.get({
      url: API_URLS.AUTH.KAKAO_GET_TOKEN(code),
    });
    setLocalStorage(ACCESS_TOKEN_KEY, user.access_token);
    setLocalStorage(REFRESH_TOKEN_KEY, user.refresh_token);
  } catch (error) {
    console.log(error);
  }
};
