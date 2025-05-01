import SupportForm from "../components/Support/SupportForm";
import SupportInfo from "../components/Support/SupportInfo";

export default function Support() {
  return (
    <div className="text-black">
      <h2 className="text-right text-lg font-semibold pb-3 border-b-light border-b-[1px]">
        التواصل والدعم
      </h2>
      <h3 className="text-2xl font-semibold text-right pt-3 text-primary">
        نحن في انتظاركم
      </h3>
      <p className="text-right pt-2 text-sm">
        لا تتردد في ترك رسالة لنا بخصوص مشكلتك أو اقتراحك وسوف يقوم فريق الدعم
        بالرد عليك
      </p>

      <div className="flex flex-row-reverse items-center flex-wrap ">
        <SupportForm />
        <SupportInfo />
      </div>
    </div>
  );
}
