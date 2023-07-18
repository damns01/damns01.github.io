document.addEventListener("DOMContentLoaded", function () {
  const addReasonBtn = document.getElementById("addReasonBtn");
  addReasonBtn.addEventListener("click", function () {
    const inputReason = document.querySelector("#addReason input");
    const reason = inputReason.value.trim();
    if (reason !== "") {
      addReasonToList(reason);
      inputReason.value = "";
    }
  });

  // Show the heartwarming message overlay
  const heartwarmingMessage = document.querySelector(".heartwarming-message");
  heartwarmingMessage.style.opacity = "1";

  // Set the countdown duration (in seconds)
  const countdownDuration = 4;

  // Get the countdown element
  const countdownElement = document.getElementById("countdown");

  // Function to update the countdown
  function updateCountdown() {
    countdownElement.textContent = `Love is on its way... ${countdownDuration}`;
    countdownDuration--;

    if (countdownDuration >= 0) {
      setTimeout(updateCountdown, 1000); // Update every second
    } else {
      // Hide the heartwarming message overlay after the countdown
      heartwarmingMessage.style.opacity = "0";
    }
  }

  // Start the countdown and fade in the heartwarming message overlay
  updateCountdown();
});

function addReasonToList(reason) {
  const reasonsList = document.getElementById("reasonsList");
  const newReason = document.createElement("li");
  newReason.textContent = reason;
  reasonsList.appendChild(newReason);
}
