import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Kakao from '../apis/kakao';

const Redirect = () => {
  const { auth } = Kakao();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    auth(code);
  }, []);

  return <div>잠시만 기다려 주세요! 로그인 중입니다</div>;
};

export default Redirect;
