const handler = async (req) => {
  const { next_run } = await req.json();

  console.log("Received event! Next invocation at:", next_run);
};

const config = {
  schedule: "@hourly",
};

export { handler, config };
