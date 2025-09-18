const nameInput = document.getElementById("name")
const jobInput = document.getElementById("job_title")
const ageInput = document.getElementById("age")
const bioInput = document.getElementById("bio")

const previewName = document.getElementById("preview-name");
const previewJob = document.getElementById("preview-job");
const previewAge = document.getElementById("preview-age");
const previewBio = document.getElementById("preview-bio");


function previewUpdate(){

    previewName.textContent = nameInput.value;
    previewJob.textContent = jobInput.value;
    previewAge.textContent = ageInput.value;
    previewBio.textContent = bioInput.value;

}

[nameInput, jobInput, ageInput, bioInput].forEach(input => {
    input.addEventListener("input", previewUpdate);
});