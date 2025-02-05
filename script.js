document.addEventListener("DOMContentLoaded", () => {
  fetch("appDetails.json")
    .then(response => response.json())
    .then(appDetails => {
      document.getElementById("app-version").textContent = appDetails.version;
      document.getElementById("release-date").textContent = appDetails.releaseDate;
      document.getElementById("app-size").textContent = appDetails.size;

      document.getElementById("download-btn").addEventListener("click", () => {
        window.open(appDetails.apkUrl, "_blank");
      });
    })
    .catch(error => console.error("Error fetching app details:", error));
});
