
window.addEventListener("load", () => {
    fetch("http://localhost:3000/backend/server/index.mjs")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to start server");
        }
        console.log("Server started successfully");
      })
      .catch(error => {
        console.error(error);
      });
  });

