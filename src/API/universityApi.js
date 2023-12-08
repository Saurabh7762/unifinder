const fetchUniversities = async (searchUniversity) => {
  try {
    const response = await fetch(
      `http://universities.hipolabs.com/search?name=${searchUniversity}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching university data:", error);
    return [];
  }
};

export default fetchUniversities;
