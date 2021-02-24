import styled from "styled-components";
import Navbar from "./Navbar";

export default function Container({ children }) {
  return (
    <Wrapper className="bg-purple h-screen w-screen p-4 ">
      <Navbar />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100%;
`;
