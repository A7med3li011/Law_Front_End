export default function EachQuestionSecondFormat({ data, ind, lenghtArray }) {
  console.log(ind, lenghtArray - 1);
  return (
    <div
      className={`w-full text-center flex flex-row-reverse items-center flex-wrap px-3 bg-red-500 ${
        lenghtArray - 1 == ind ? "" : "border-b-primary border-b-[1px]"
      }  p-2 `}
    >
      <p className="w-6/12 text-xs text-end ">{data?.questionText}</p>
      <input className="w-2/12 block" type="radio" name="gender" value="male" />
      <input className="w-2/12 block" type="radio" name="gender" value="male" />
      <input className="w-2/12 block" type="radio" name="gender" value="male" />
    </div>
  );
}
