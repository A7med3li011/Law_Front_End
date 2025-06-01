import React from "react";
import FourCardsComponent from "../Home/FourCardsComponent";
import RequestsTable from "../Home/RequestsTable";
import ViolationsChart from "../Home/ViolationsChart";
import { useQuery } from "react-query";
import { getAnswers } from "../../utilities/Apis";
import { useSelector } from "react-redux";
import Card from "../Home/Card";
//----------------------------------------------
export default function Branchdetails() {
  const user = useSelector((store) => store.user);
  const { data } = useQuery({
    queryKey: ["get_answers"],
    queryFn: () => getAnswers(user.token),
  });

  return (
    <>
      <div className="flex flex-row-reverse flex-wrap w-fit mx-auto justify-center my-10">
        <Card
          text={"اجمالي عدد الاسئله"}
          color={"#F0FDF4"}
          number={data?.data?.length || 0}
        />
        <Card
          text={"اجمالي عدد المخالفات"}
          color={"#FDF2F8"}
          number={
            data?.data?.filter((ele) => ele?.answer?.value == "نعم").length || 0
          }
        />
        <Card
          text={"اجمالي عدد المخالفات المجتازة"}
          color={"#EFF6FF"}
          number={
            data?.data?.filter((ele) => ele?.answer?.value == "لا").length || 0
          }
        />
        <Card
          text={"اجمالي عدد المخالفات التي لم تنطبق"}
          color={"#F9FAFB"}
          number={
            data?.data?.filter((ele) => ele?.answer?.value == "لا ينطبق")
              .length || 0
          }
        />
      </div>
      {/* <FourCardsComponent NumberOfQuestions={data?.data?.length || 0} /> */}
      <ViolationsChart data={data?.data || []} />
      <RequestsTable data={data?.data || []} />
    </>
  );
}
