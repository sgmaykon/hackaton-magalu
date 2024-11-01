document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const cloudNameInput = document.getElementById("input-box1");
    const osSelect = document.getElementById("lang");
    const languageCheckboxes = document.querySelectorAll('input[name="language"]');
    const fileInput = document.getElementById("file-upload");
    const submitButton = document.querySelector(".custom-button");
  
    // Event listener for the ENVIAR button
    submitButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the cloud name
      const cloudName = cloudNameInput.value.trim();
      if (!cloudName) {
        alert("Por favor, insira um nome para sua Cloud!");
        return;
      }
  
      // Get selected OS
      const selectedOS = osSelect.value;
  
      // Get selected programming languages
      const selectedLanguages = Array.from(languageCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
  
      // Get the uploaded file details
      const file = fileInput.files[0];
      const fileName = file ? file.name : "Nenhum arquivo selecionado";
  
      // Display the data (for debugging purposes)
      const requestData = {
        cloudName: cloudName,
        operatingSystem: selectedOS,
        languages: selectedLanguages,
        fileName: fileName
    };

    console.log("Dados para envio:", requestData);
  
      // Example of sending data to a server (uncomment to use)
      /*
      fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cloudName: cloudName,
          operatingSystem: selectedOS,
          languages: selectedLanguages,
          fileName: fileName,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert("Informações enviadas com sucesso!");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      */
    });
  });
  