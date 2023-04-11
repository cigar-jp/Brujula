import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import styled from 'styled-components';

const montserrat = Montserrat({ weight: ['200'], subsets: ['cyrillic'] });

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Header = () => {
  return (
    <Wrapper>
      <h1 className={montserrat.className}>Ryo Shiga</h1>
      <Nav>
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/works">WORKS</Link>
        <Link href="https://www.youtube.com/pboychannel">YOUTUBE</Link>
      </Nav>
    </Wrapper>
  );
};
