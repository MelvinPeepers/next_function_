const handler = async (event, context) => {
  console.time("start time");
  const greeting = "Hello from Netlify Function!";
  console.timeEnd("end time");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Netlify Function using mjs file!",
    }),
  };
};

export { handler };
