export function addAnotherProject(){

    document.getElementById('add-project-btn').addEventListener('click', function() {
        const skillWrapper = document.getElementById('skills-wrapper');

        // ایجاد یک دیو جدید برای مهارت
        const newSkillForm = document.createElement('div');
        newSkillForm.classList.add('skill-form');

        // ایجاد فیلد توضیحات
        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'توضیحات';
        const descriptionInput = document.createElement('input');
        descriptionInput.type = 'text';
        descriptionInput.name = 'description[]';
        descriptionInput.placeholder = 'توضیحات پروژه ها';

        // ایجاد فیلد لینک
        const linkLabel = document.createElement('label');
        linkLabel.textContent = 'لینک';
        const linkInput = document.createElement('input');
        linkInput.type = 'url';
        linkInput.name = 'link[]';
        linkInput.placeholder = 'لینک';

        // افزودن فیلدها به دیو جدید
        newSkillForm.appendChild(descriptionLabel);
        newSkillForm.appendChild(descriptionInput);
        newSkillForm.appendChild(linkLabel);
        newSkillForm.appendChild(linkInput);

        // افزودن دیو جدید به لیست مهارت‌ها
        skillWrapper.appendChild(newSkillForm);
    });


}

export function DeleteProjects() {
    const skillsWrapper = document.getElementById('skills-wrapper');
    const skillForms = skillsWrapper.querySelectorAll('.skill-form');

    // Check if there are any skill forms to delete
    if (skillForms.length > 0) {
        const lastSkillForm = skillForms[skillForms.length - 1];
        skillsWrapper.removeChild(lastSkillForm);
    }


}



export  function getTheProjects() {
    const skillsWrapper = document.getElementById('skills-wrapper');
    const skillForms = skillsWrapper.querySelectorAll('.skill-form');

    // Initialize an array to hold the projects
    const projects = [];

    // Loop through each skill form and extract the description and link
    skillForms.forEach(form => {
        const descriptionInput = form.querySelector('input[name="description[]"]');
        const linkInput = form.querySelector('input[name="link[]"]');

        if (descriptionInput && linkInput) {
            const description = descriptionInput.value.trim();
            const link = linkInput.value.trim();

            // Only add non-empty descriptions and links
            if (description && link) {
                projects.push([description, link]);
            }
        }
    });

    // Save the projects array as a JSON string in local storage
    return projects;

}


