import Input from "../common/Input";
import closeIcon from "../../images/x.svg";
export default function TaskForm({ task, close }) {
  return (
    <div className="p-4 w-11/12 bg-white absolute inset-4 left-6 z-20 rounded">
      <form className="flex flex-col">
        <img
          src={closeIcon}
          alt=""
          height={12}
          width={12}
          className="my-4"
          onClick={close}
        />
        <Input defaultValue={task.title} />
        <label>Description</label>
        <Input defaultValue="type description here" as="textarea" />
        <label>Comments</label>
        <Input placeholder="type description here" as="textarea" />
      </form>
    </div>
  );
}
