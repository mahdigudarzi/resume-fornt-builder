import {addAnotherProject, DeleteProjects, getTheProjects} from "../utils/Projects.js";


document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    // Submit event handler
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        getFormValues();

    });
    const addProjectButton = document.getElementById('add-project-btn');
    addProjectButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        addAnotherProject()

    })

    const  deleteProjectButton = document.getElementById('delete-project-btn');
    deleteProjectButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        DeleteProjects()
    })
    // Function to get and handle form values
    function getFormValues() {
        const personalInfo = "اطلاعات شخصی";
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const cellphone = document.getElementById('cellphone').value;
        const location = document.getElementById('location').value;

        const ageLabel = "سن";
        const age = document.getElementById('age').value;

        const educationLabel = "مدرک تحصیلی";
        const degreeSelectElement = document.getElementById("degree");
        const selectedDegree = degreeSelectElement.value;

        const militaryServiceLabel = "وضیعت سربازی";
        const militaryStatusElement = document.getElementById('military-status');
        const selectedMilitaryStatus = militaryStatusElement.value;

        const aboutMe = "درباره من ";
        const tellMeMore = document.getElementById('aboutMe').value;

        const skillsLabel = "مهارت ها";
        const skillsInputValue = document.getElementById("skills").value;
        const skillsArray = skillsInputValue.split("-");

        const projectLable ="نمونه پروژها"
        const projects = getTheProjects();

        const socialInfo = "شبکه های اجتماعی";
        const linkedin =document.getElementById('linkedin').value;
        const stackoverflow =document.getElementById('stackoverflow').value;
        const github =document.getElementById('github').value;

        // set up the context
        let context = {

            name: name,
            email: email,
            cellPhone: cellphone,
            city: location,
            ageLabel: ageLabel,
            age: age,
            educationLabel: educationLabel,
            selectedDegree: selectedDegree,
            militaryServiceLabel: militaryServiceLabel,
            MilitaryStatus: selectedMilitaryStatus,
            socialInfo: socialInfo,
            aboutMe: aboutMe,
            tellMeMore: tellMeMore,
            skillsLabel: skillsLabel,
            skillsArray: skillsArray,
            linkedin: linkedin,
            github: github,
            stackoverflow: stackoverflow,
            personalInfo: personalInfo,
            projectLable:projectLable,
            projects: projects,
        };

        // Store in localStorage
        localStorage.setItem('Context', JSON.stringify(context));

        // Redirect to another page
        window.location.href = 'outter.html';
    }
});
