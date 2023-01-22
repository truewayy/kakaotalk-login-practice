import { Container } from '@mui/material';

import KaKaoButton from '../components/KaKaoButton';

const Home = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <KaKaoButton />
    </Container>
  );
};

export default Home;
