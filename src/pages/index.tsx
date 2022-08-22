import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <h1>Hello World!</h1>
      <p>
        You can start by editing <code>pages/index.tsx</code>
      </p>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Home;
