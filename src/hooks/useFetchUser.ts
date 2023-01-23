import { useEffect, useState } from 'react';

import { UserInfo } from '../interfaces/user';
import { kakaoGetUser } from './../apis/kakao';

const useFetchUser = () => {
  const [user, setUser] = useState<UserInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const user = await kakaoGetUser();
      setUser(user);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return { user, isLoading };
};

export default useFetchUser;
