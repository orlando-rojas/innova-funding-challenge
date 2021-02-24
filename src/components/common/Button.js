import styled from "styled-components";

export default function Button({ children }) {
  return (
    <CustomButton
      type="text"
      className="bg-purple rounded p-4 text-white font-bold flex items-center justify-center"
    >
      {children}
    </CustomButton>
  );
}

const CustomButton = styled.button`
  height: 50px;
`;
