function startTimer() {
      let count = 0;
      const timerDisplay = document.getElementById("timer");

      
      if (window.timerInterval) {
        clearInterval(window.timerInterval);
      }

      
      window.timerInterval = setInterval(() => {
        if (count <= 60) {
          timerDisplay.textContent = count;
          count++;
        } else {
          clearInterval(window.timerInterval);
          timerDisplay.textContent = "Time is up!";
        }
      }, 1000); 
    }


    function readFileSimulator(fileName, callback) {
      document.getElementById("output").innerText = `Reading ${fileName}... Please wait`;

      setTimeout(() => {
        const fileContent = `File read successfully and here is the content of ${fileName}`;
        callback(null, fileContent);
      }, 2000);
    }

    function displayContent(error, content) {
      if (error) {
        document.getElementById("output").innerText = "Error reading file.";
      } else {
        document.getElementById("output").innerText = content;
      }
    }