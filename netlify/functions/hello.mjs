exports.handler = async (event, context) => {
  console.time("start time");
  const greeting = "Hello from Netlify Function!";
  console.time("end time");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: greeting }),
  };
};
