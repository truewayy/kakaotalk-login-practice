import { useNavigate } from 'react-router-dom';

import { API_URLS } from '../constants/apiUrls';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants/auth';
import { ROUTES } from '../constants/routes';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import http from './instance';

const { AUTH, DATA } = API_URLS;

const Kakao = () => {
  const navigate = useNavigate();
  const auth = async (code: string | null) => {
    try {
      const { data: user } = await http.get({
        url: AUTH.KAKAO_GET_TOKEN(code),
      });
      setLocalStorage(ACCESS_TOKEN_KEY, user.access_token);
      setLocalStorage(REFRESH_TOKEN_KEY, user.refresh_token);
      navigate(ROUTES.USER);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const { data: user } = await http.get({
        url: DATA.KAKAO_GET_USER,
        headers: {
          Authorization: `Bearer ${getLocalStorage(ACCESS_TOKEN_KEY)}`,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  };
  return { auth, getUser };
};

export default Kakao;
