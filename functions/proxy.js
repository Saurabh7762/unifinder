// functions/proxy.js
const axios = require("axios");

exports.handler = async function (event, context) {
  const { name } = event.queryStringParameters;

  try {
    const response = await axios.get(
      `http://universities.hipolabs.com/search`,
      {
        params: { name },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching university data:", error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
