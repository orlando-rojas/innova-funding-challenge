import { useHistory } from "react-router";
import styled from "styled-components";
import homeIcon from "../../images/home-icon.svg";
import MyAvatar from "./MyAvatar";

export default function Navbar() {
  const history = useHistory();
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        {window.location.pathname !== "/" && (
          <img
            src={homeIcon}
            alt=""
            className="mr-2 cursor-pointer"
            onClick={history.push("/")}
          />
        )}
        <Menu />
      </div>
      <div>
        <MyAvatar userName="Yair Lopez" />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex items-end">
      <Bar className="bg-white rounded" height="30px" />
      <Bar className="bg-white ml-1 rounded" height="25px" />
    </div>
  );
}

const Bar = styled.div`
  width: 6px;
  height: ${(props) => props.height};
`;
