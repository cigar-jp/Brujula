import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const Name = styled.h1`
  font-weight: 200;
  color: dimgray;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Name>Ryo Shiga</Name>
      <Nav>
        <Link href="/about">ABOUT</Link>
        <Link href="/works">WORKS</Link>
        <Link href="https://www.youtube.com/pboychannel">YOUTUBE</Link>
      </Nav>
    </Wrapper>
  );
};
