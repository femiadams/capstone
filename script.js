const symptomImageMap = {
  cough: "cough-image.jpg",
  fever: "fever-image.jpg",
  headache: "headache-image.jpg",
  stomachcramps: "stomachcramps-image.jpg"
  // Add more symptoms and image names as needed
};

function checkSymptoms(event) {
  event.preventDefault();
  const symptomsInput = document.getElementById("symptoms");
  const resultDiv = document.getElementById("result");
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ''; // Clear previous images

  const symptomsArray = symptomsInput.value.split(",").map(symptom => symptom.trim());

  let response = "Based on your symptoms:<br>";
  symptomsArray.forEach(symptom => {
    const imageName = symptomImageMap[symptom.toLowerCase()];
    const imagePath = `images/${imageName}`;

    response += `${symptom}, `;

    if (imageName) {
      imageContainer.innerHTML += `<img src="${imagePath}" alt="${symptom}" width="100">`;
    }
  });

  response += "<br>you may have a common cold. It's recommended to get plenty of rest, drink fluids, and consult a doctor if symptoms persist.";

  resultDiv.innerHTML = response;
}

document.getElementById("symptomsForm").addEventListener("submit", checkSymptoms);
