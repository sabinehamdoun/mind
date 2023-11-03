// export default async function handler(req, res) {
//     try {
//       const { query: { projectId } } = req; 
  
//       const headers = {
//         'Accept-Language': 'en',
//       };
  
//       const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${projectId}`;
//       const response = await axios.get(apiURL, { headers });
//       const projectData = response.data;
//       res.status(200).json(projectData);
//     } catch (error) {
//       console.error('API request failed:', error);
//       res.status(500).json({ error: 'API request failed' });
//     }
//   }