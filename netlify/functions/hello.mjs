// https://answers.netlify.com/t/support-guide-why-is-my-function-taking-long-or-timing-out/71689

const handler = async (event, context) => {
  console.time("functionExecution"); // Start measuring function execution time

  // Simulate some async operation (e.g., waiting for 1 second)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.timeLog("functionExecution", "Async operation completed"); // Log time after async operation

  const message = "Hello from Netlify Functions!";

  console.timeLog("functionExecution", "Message generated"); // Log time after message generation

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };

  console.timeEnd("functionExecution", "End"); // End measuring function execution time and display the total time

  return response;
};

export { handler };
