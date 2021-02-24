import styled from "styled-components";

export default function Input(props) {
  return (
    <CustomInput
      type="text"
      className="bg-grayLight rounded p-4 mb-2.5"
      {...props}
    />
  );
}

const CustomInput = styled.input`
  height: 50px;
  ::placeholder {
    color: #bfbfbf;
    font-size: 16px;
  }
`;
