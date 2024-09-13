document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const editResumeBtn = document.getElementById('editResumeBtn') as HTMLButtonElement;
    const saveChangesBtn = document.getElementById('saveChangesBtn') as HTMLButtonElement;
    const generateResumeBtn = document.getElementById('generateResumeBtn') as HTMLButtonElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Get form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Display resume
        resumeOutput.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Show edit button and hide generate button
        editResumeBtn.classList.remove('hidden');
        form.classList.add('hidden');
        generateResumeBtn.classList.add('hidden');
    });

    // /Handle PDF Download
    downloadPdfButton.addEventListener('click', ()=> {
        window.print(); //This will open the print dialogue and allow the user to save as PDF
});

    editResumeBtn.addEventListener('click', () => {
        // Show form and hide edit button
        form.classList.remove('hidden');
        generateResumeBtn.classList.remove('hidden');
        editResumeBtn.classList.add('hidden');
        saveChangesBtn.classList.remove('hidden');
    });

    saveChangesBtn.addEventListener('click', () => {
        // Hide save changes button and show edit button
        saveChangesBtn.classList.add('hidden');
        editResumeBtn.classList.remove('hidden');
    });
});
