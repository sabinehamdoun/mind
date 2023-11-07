import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const CardDetailPage = ({ data }) => {
  const router = useRouter();
  const cardId = router.query;
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    if (data) {
      setCurrentIndex(
        data.data.findIndex((item) => item.id === cardId)
      );
    }
  }, [data, cardId]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const selectedCard = data[currentIndex]; 
  
  return (
    <div>
      <h1>Project Details</h1>
      <p>Id: {cardId}</p>
      <p>Title: {selectedCard.title}</p> 
    </div>
  );
};

export default CardDetailPage;

// export async function getServerSideProps({ locale }) {
//   try {
//     const response = await axios.get("/projects", {
//       headers: {
//         "Accept-Language": locale,
//       },
//     });

//     const data = response.data;

//     return { props: { data } };
//   } catch (error) {
//     console.error(error);
//     return { props: { data: null } };
//   }
// }

 export async function GetServerSideProps({ locale }) {
    let data;
    await axios
      .get("/projects", {
        headers: {
          "Accept-Language": locale,
        },
      })
      .then((res) => {
        data = res.data;
      })
      .catch(console.error);
    return { props: { data } };
  }