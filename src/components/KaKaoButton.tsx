import { Button } from '@mui/material';

import { API_URLS } from '../constants/apiUrls';

const KaKaoButton = () => {
  return (
    <Button href={API_URLS.AUTH.KAKAO_LOGIN} sx={{ padding: '0' }}>
      <img
        src='kakao_login_large_narrow.png'
        width='200'
        alt='카카오 로그인 버튼'
      />
    </Button>
  );
};

export default KaKaoButton;
