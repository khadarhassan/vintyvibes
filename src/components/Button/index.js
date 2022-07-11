import tw, { styled } from 'twin.macro';
import { ArrowRight } from 'phosphor-react';

const Button = ({ children, primary }) => {
  return (
    <StyledButton {...{ primary }}>
      <span>{children}</span> <ArrowRight size={16} />
    </StyledButton>
  );
};

const StyledButton = styled.a(({ primary }) => [
  tw`inline-flex items-center px-6 py-6 space-x-2 text-lg font-bold uppercase border border-black cursor-pointer lg:text-xl hover:bg-black hover:border-black hover:text-white`,
  primary && tw`bg-blue-500 `,
]);

export default Button;
