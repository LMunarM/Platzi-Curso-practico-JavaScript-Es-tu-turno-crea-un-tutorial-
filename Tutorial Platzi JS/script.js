const uploadButton = document.getElementById("upload_button");
const uploadText = document.getElementById("upload_text");
const inputFile = document.getElementById("input-file");
         
function handleFileSelection(file) {
  const type = file.type;

  if (type.includes("video/") || type.includes("audio/") || fileName.endsWith(".mp3") || fileName.endsWith(".mp4")) { 
   
    uploadButton.classList.remove("invalid");
    uploadButton.classList.add("valid");
    uploadText.textContent = file.name;
  } else { 
    
    uploadButton.classList.remove("valid");
    uploadButton.classList.add("invalid");
    alert("Uploaded file isn't valid.");
    setTimeout(() => {
      uploadButton.classList.remove("invalid");
    }, 3000);
  }
}

uploadButton.addEventListener("dragover", (e) => {
    e.preventDefault();
  
  });
  uploadButton.addEventListener("drop", (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileSelection(file);
  });

  inputFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    handleFileSelection(file);
  });
