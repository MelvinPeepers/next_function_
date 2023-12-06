// netlify/functions/scheduledFunction.mjs

const handler = async (event, context) => {
  console.log("Scheduled function ran at: ", new Date().toISOString());

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Scheduled function ran successfully" }),
  };
};

export { handler };
