import { Container } from '@mui/material';

import useFetchUser from '../hooks/useFetchUser';

const User = () => {
  const { user, isLoading } = useFetchUser();
  if (isLoading) return <div>로딩중...</div>;
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h1>유저 페이지</h1>
      <img
        width={100}
        src={user?.properties.profile_image}
        alt='프로필 이미지'
      />
      <p>이름: {user?.properties.nickname}</p>
      <p>이메일: {user?.kakao_account.email}</p>
      <p>생일: {user?.kakao_account.birthday}</p>
    </Container>
  );
};

export default User;
