import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/utils/axios";
import { gsap } from "gsap";
import Cursor from "@/components/cursor";

function ProjectPage({ data }) {
  const router = useRouter();
  const textRef = useRef(null);
  const [typedText, setTypedText] = useState("");

  const selectedItem = data.data.findIndex(
    (item) => item.id === parseInt(router.query.id)
  );

  useEffect(() => {
    const text = data.data[selectedItem].text;

    if (text) {
      const typeText = (currentIndex) => {
        if (currentIndex < text.length) {
          setTypedText((prevText) => prevText + text[currentIndex]);
          setTimeout(() => {
            typeText(currentIndex + 1);
          }, 35);
        }
      };

      gsap.to(textRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
      });

      typeText(0);
    }
  }, [data.data[selectedItem].text]);

  return (
    <div>
      <Cursor />

      <div className="min-h-screen flex items-center justify-center 2xl:container mx-auto">
        <div className="px-10 sm:px-36">
          <h1 className="text-xl font-bold md:text-center text-[#4C4C4C] my-12">
            {data.data[selectedItem].title}
          </h1>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <hr
                className={`w-14 border-[1.5px] border-solid text-gray mb-8`}
              />
              {data.data[selectedItem].text && (
                <p
                  ref={textRef}
                  style={{ opacity: 0 }}
                  className="font-normal md:pr-28 text-sm leading-6"
                >
                  {typedText}
                </p>
              )}
            </div>
            <div className="flex-1 mt-10 md:mt-0 whitespace-nowrap">
              <h2 className={`text-sm mb-3 flex`}>
                CLIENT:{" "}
                <span className="ml-2 flex">
                  {" "}
                  {data.data[selectedItem].client}
                </span>
              </h2>
              <hr className={`w-full h-1 border-[#2E2E2E] `} />
              <p className={`text-sm  my-3 flex`}>
                DIRECTOR:{" "}
                <span className="ml-2 ">
                  {" "}
                  {data.data[selectedItem].directors}
                </span>
              </p>
              <hr className={`w-full h-1 border-[#2E2E2E]`} />
              <p className={`text-sm  my-3 flex`}>
                DP:{" "}
                <span className="ml-2">
                  {" "}
                  {data.data[selectedItem].cinematographer}
                </span>
              </p>
              <hr className={`w-full h-1 border-[#2E2E2E] `} />
              <p className={`text-sm flex my-3`}>
                AGENCY:{" "}
                <span className="ml-2"> {data.data[selectedItem].agency}</span>
              </p>
              <hr className={`w-full h-1 border-[#2E2E2E] `} />
            </div>
          </div>
          <hr className={`w-full h-1 border-[#2E2E2E] mt-24`} />
        </div>
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
