document.addEventListener("DOMContentLoaded", () => {
  fetch("appDetails.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(appDetails => {
      document.getElementById("app-version").textContent = appDetails.version;
      document.getElementById("release-date").textContent = appDetails.releaseDate;
      document.getElementById("app-size").textContent = appDetails.size;

      // Open the modal on button click
      document.getElementById("download-btn").addEventListener("click", () => {
        document.getElementById("download-modal").style.display = "flex";
      });

      // Download for Android
      document.getElementById("download-android").addEventListener("click", () => {
        if (appDetails.apkUrl && appDetails.apkUrl !== "#") {
          window.open(appDetails.apkUrl, "_blank");
        } else {
          alert("Android download link is not available.");
        }
        closeModal();
      });

      // Download for iOS
      document.getElementById("download-ios").addEventListener("click", () => {
        if (appDetails.iosUrl && appDetails.iosUrl !== "#") {
          window.open(appDetails.iosUrl, "_blank");
        } else {
          alert("iOS download link is not available.");
        }
        closeModal();
      });

      // Close the modal
      document.getElementById("close-modal").addEventListener("click", closeModal);
      window.addEventListener("click", (e) => {
        if (e.target.id === "download-modal") {
          closeModal();
        }
      });

      function closeModal() {
        document.getElementById("download-modal").style.display = "none";
      }
    })
    .catch(error => console.error("Error fetching app details:", error));
});
