import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/utils/axios";

function ProjectPage({ data }) {
  const router = useRouter();
  const { cardId } = router.query;
  const [currentIndex, setCurrentIndex] = useState();

  console.log(cardId);

  console.log(data);

  // const currentIndex = data.data.findIndex((item) => item.id === cardId)
  if (data) {
    setCurrentIndex(data.data.findIndex((item) => item.id === cardId));
  }

  if (!data) {
    return <p>No Data Found!</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-10 sm:px-20">
        <h1 className="text-xl font-bold md:text-center text-[#4c4c4c] my-12">
          {data.data[currentIndex].title}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="">
            <hr className={`w-14 border-[1.5px] border-solid text-gray mb-8`} />
            <p className="font-normal md:pr-28 text-sm leading-6">
              {data.data[currentIndex].text}
            </p>
          </div>
          <div className=" md:pl-24 mt-10 md:mt-0">
            <h2 className={`text-sm mb-3 flex`}>
              CLIENT:{" "}
              <span className="ml-2 flex">
                {" "}
                {data.data[currentIndex].client}
              </span>
            </h2>
            <hr className={`w-full h-1 border-[#2e2e2e] `} />
            <p className={`text-sm  my-3 flex`}>
              DIRECTOR:{" "}
              <span className="ml-2 ">
                {" "}
                {data.data[currentIndex].directors}
              </span>
            </p>
            <hr className={`w-full h-1 border-[#2e2e2e]`} />
            <p className={`text-sm  my-3 flex`}>
              DP:{" "}
              <span className="ml-2">
                {" "}
                {data.data[currentIndex].cinematographer}
              </span>
            </p>
            <hr className={`w-full h-1 border-[#2e2e2e] `} />
            <p className={`text-sm flex my-3`}>
              AGENCY:{" "}
              <span className="ml-2"> {data.data[currentIndex].agency}</span>
            </p>
            <hr className={`w-full h-1 border-[#2e2e2e] `} />
          </div>
        </div>
        <hr className={`w-full h-1 border-[#2e2e2e] mt-24`} />

      </div>
    </div>
  );
}

export default ProjectPage;

export async function getServerSideProps({ locale, query }) {
  let data;
  await axios
    .get("/projects", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      data = res.data;
      console.log(data);
    })
    .catch(console.error);
  return { props: { data } };
}
