import Button from "../common/Button";
import Input from "../common/Input";

export default function InviteUserForm() {
  return (
    <div
      className="p-4 w-full bg-white absolute top-0 z-20"
      style={{
        height: "140px",
      }}
    >
      <form className="flex flex-col">
        <Input placeholder={"yefrioscar9814@gmail.com"} />
        <Button>Send Invitation</Button>
      </form>
    </div>
  );
}
