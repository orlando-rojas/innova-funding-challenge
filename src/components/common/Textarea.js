import styled from "styled-components";

export default function Textarea(props) {
  return (
    <CustomTextArea
      type="text"
      className="bg-grayLight rounded p-4 mb-2.5 flex items-center"
      {...props}
    />
  );
}

const CustomTextArea = styled.textarea`
  min-height: 90px;
  ::placeholder {
    color: #bfbfbf;
    font-size: 16px;
    vertical-align: middle;
  }
`;
