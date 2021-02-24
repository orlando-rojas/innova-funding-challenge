import styled from "styled-components";

import whitePlus from "../../images/white-plus.svg";

export default function AddUserBtn(props) {
  return (
    <RoundedButton
      className="rounded-full bg-green flex items-center justify-center cursor-pointer mr-1"
      {...props}
    >
      <img src={whitePlus} alt="" />
    </RoundedButton>
  );
}

const RoundedButton = styled.button`
  width: 30px;
  height: 30px;
`;
