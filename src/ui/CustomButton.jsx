export default function CustomButton({ onclick, deco, text, type }) {
  return (
    <button type={type ? type : ""} onClick={onclick} className={deco}>
      {text}
    </button>
  );
}
