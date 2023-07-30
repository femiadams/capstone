function showMedicalRecords() {
  hideAll

t.getElementById("medicalRecordsContent").style.display = "block";
}

function showAppointments() {
  hideAllContents();
  document.getElementById("appointmentsContent").style.display = "block";
}

function showPrescriptions() {
  hideAllContents();
  document.getElementById("prescriptionsContent").style.display = "block";
}

function showSettings() {
  hideAllContents();
  document.getElementById("settingsContent").style.display = "block";
}

function hideAllContents() {
  const contents = document.getElementsByClassName("content");
  for (const content of contents) {
    content.style.display = "none";
  }
}