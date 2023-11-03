import axios from "axios";
export default async function handler(req, res) {
  try {
    const headers = {
      "Accept-Language": "en",
    };
    const apiURL = process.env.NEXT_PUBLIC_BASE_URL+"/projects"
    const response = await axios.get(apiURL, { headers });
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("API request failed:", error);
    res.status(500).json({ error: "API request failed" });
  }
}


