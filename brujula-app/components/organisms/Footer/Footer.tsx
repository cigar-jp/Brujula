import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border-top: 1px solid #ccc;
  margin-top: auto;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <div>© 2023</div>
    </Wrapper>
  );
};
