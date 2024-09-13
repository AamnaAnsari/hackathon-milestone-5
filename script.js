document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var editResumeBtn = document.getElementById('editResumeBtn');
    var saveChangesBtn = document.getElementById('saveChangesBtn');
    var generateResumeBtn = document.getElementById('generateResumeBtn');
    var downloadPdfButton = document.getElementById('download-pdf');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        var skills = document.getElementById('skills').value;
        // Display resume
        resumeOutput.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Show edit button and hide generate button
        editResumeBtn.classList.remove('hidden');
        form.classList.add('hidden');
        generateResumeBtn.classList.add('hidden');
    });
    editResumeBtn.addEventListener('click', function () {
        // Show form and hide edit button
        form.classList.remove('hidden');
        generateResumeBtn.classList.remove('hidden');
        editResumeBtn.classList.add('hidden');
        saveChangesBtn.classList.remove('hidden');
    });
// /Handle PDF Download
downloadPdfButton.addEventListener('click', function () {
    window.print(); //This will open the print dialogue and allow the user to save as PDF
});

    saveChangesBtn.addEventListener('click', function () {
        // Hide save changes button and show edit button
        saveChangesBtn.classList.add('hidden');
        editResumeBtn.classList.remove('hidden');
    });
});
