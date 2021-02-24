import styled from "styled-components";

import whitePlus from "../../images/white-plus.svg";

export default function AddColumnBtn(props) {
  return (
    <RectangularButton
      className="rounded bg-greenLight flex items-center justify-center cursor-pointer mr-1"
      {...props}
    >
      <img src={whitePlus} alt="" />
    </RectangularButton>
  );
}

const RectangularButton = styled.button`
  width: 40px;
  height: 150px;
`;
