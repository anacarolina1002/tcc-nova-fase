import "./Button.css";

export default function PrevButton({ value, setValue }) {
  return (
    <div className="Wrapper" onClick={() => setValue(value - 1)}>
      {"<"}
    </div>
  );
}