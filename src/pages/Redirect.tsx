import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { kakaoAuth } from '../apis/kakao';

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    kakaoAuth(code);
  }, []);

  return <div>잠시만 기다려 주세요! 로그인 중입니다</div>;
};

export default Redirect;
