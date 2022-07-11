import tw, { styled } from 'twin.macro';

const Hero = ({ children }) => {
  return (
    <StyledHero
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80)',
      }}
    >
      {children}
    </StyledHero>
  );
};

const StyledHero = styled.div`
  ${tw`flex items-end justify-center w-screen h-screen`}
`;

export default Hero;
