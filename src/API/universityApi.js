import axios from "axios";

const fetchUniversities = async (searchUniversity) => {
  try {
    const response = await axios.get(
      `//universities.hipolabs.com/search?name=${searchUniversity}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching university data:", error);
    return [];
  }
};

export default fetchUniversities;
