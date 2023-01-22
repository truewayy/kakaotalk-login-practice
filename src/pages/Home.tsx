import { Button, Container } from '@mui/material';

import { API_URLS } from '../constants/apiUrls';

const Home = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Button href={API_URLS.AUTH.KAKAO_LOGIN} sx={{ padding: '0' }}>
        <img
          src='kakao_login_large_narrow.png'
          width='200'
          alt='카카오 로그인 버튼'
        />
      </Button>
    </Container>
  );
};

export default Home;
