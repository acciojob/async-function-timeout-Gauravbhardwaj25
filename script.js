//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);
  const output = document.getElementById("output");

  // Clear previous message
  output.innerText = "Waiting...";

  // Async delay function
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Async function with await
  async function showMessage() {
    await wait(delay); // wait for user-specified delay
    output.innerText = text; // display message
  }

  showMessage();
});
