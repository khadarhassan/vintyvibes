import tw, { styled } from 'twin.macro';

const Banner = ({ children }) => {
  return <StyledBanner>{children}</StyledBanner>;
};

const StyledBanner = styled.div(({ color }) => [
  tw`flex justify-center px-12 py-2 text-lg border rounded-full lg:text-xl whitespace-nowrap`,
  color && tw`border-black hover:bg-black hover:border-black hover:text-white`,
  secondary && tw`text-white bg-blue-700 disabled:opacity-40`,
]);

export default Banner;
