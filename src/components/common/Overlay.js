export default function Overlay({ children, close }) {
  return (
    <div className="w-full h-full absolute inset-0 z-10 bg-black bg-opacity-30 ">
      <div className="h-full" onClick={close} />
      {children}
    </div>
  );
}
