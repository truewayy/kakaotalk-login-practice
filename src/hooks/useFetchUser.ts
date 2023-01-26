import { useEffect, useState } from 'react';

import Kakao from '../apis/kakao';
import { UserInfo } from '../interfaces/user';

const useFetchUser = () => {
  const { getUser } = Kakao();
  const [user, setUser] = useState<UserInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const user = await getUser();
      setUser(user);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return { user, isLoading };
};

export default useFetchUser;
