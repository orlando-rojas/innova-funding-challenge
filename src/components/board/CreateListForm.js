import Button from "../common/Button";
import Input from "../common/Input";

export default function CreateListform() {
  return (
    <div
      className="p-4 w-full bg-white absolute top-0 z-20"
      style={{
        height: "140px",
      }}
    >
      <form className="flex flex-col">
        <Input placeholder={"Type name of list..."} />
        <Button>Create List</Button>
      </form>
    </div>
  );
}
