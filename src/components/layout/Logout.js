import logoutIcon from "../../images/log-out.svg";

export default function Logout() {
  return (
    <div
      className="flex items-center p-4 w-full bg-white absolute bottom-0 z-20"
      style={{
        height: "75px",
      }}
    >
      <img src={logoutIcon} alt="" />
      <h2 className="ml-5 text-purpleDark font-semibold">Sign Out</h2>
    </div>
  );
}
