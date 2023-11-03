// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';


// const CardDetail = ({ card }) => {
//   const [cardData, setCardData] = useState(null);
//   const router = useRouter();
//   const { cardId } = router.query.id;

//   useEffect(() => {
//     const fetchCardData = async () => {
//       try {
//         const response = await axios.get(`/api/fetchLinks/${cardId}`);
//         setCardData(response.data.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCardData();
//   }, [card]);

//   console.log(cardData);

//   if (!cardData) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div>
//       <h1>{cardData.title}</h1>
//       <img src={cardData.image} alt={cardData.title} />
//       <p>{cardData.text}</p>
//       <p>Details about card {cardId}</p>
//     </div>
//   );
// };

// export default CardDetail;
