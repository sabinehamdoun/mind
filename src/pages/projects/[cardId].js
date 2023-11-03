import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CardDetailPage = () => {
  const router = useRouter();
  const { cardId } = router.query;
  const [data, setData] = useState(null);
  

  if (typeof cardId === 'undefined') {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Fetching project details...</p>;
  }

  return (
    <div>
      <h1>Project Details</h1>
      <h2>Title: {data.title}</h2>
      <p>Agency: {data.agency}</p>
      <p>Client: {data.client}</p>
    </div>
  );
};

export default CardDetailPage;
