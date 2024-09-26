document.addEventListener('DOMContentLoaded',()=> {

    fetch('assets/templates/Quera/Quera.hbs')
        .then(response => response.text())
        .then(templateText => {
            function compile(context=null) {
                // send the code to be compiled
                let template = Handlebars.compile(templateText);

                let renderedTemplate = template(
                    {
                        name: context.name,
                        email: context.email,
                        cellPhone: context.cellPhone,
                        location: context.city,
                        ageLabel: context.ageLabel,
                        age: context.age,
                        educationLabel: context.educationLabel,
                        selectedDegree: context.selectedDegree,
                        militaryServiceLabel: context.militaryServiceLabel,
                        MilitaryStatus: context.MilitaryStatus,
                        socialInfo: context.socialInfo,
                        aboutMe: context.aboutMe,
                        tellMeMore: context.tellMeMore,
                        skillsLabel: context.skillsLabel,
                        skillsArray: context.skillsArray,
                        linkedin: context.linkedin,
                        stackoverflow: context.stackoverflow,
                        github: context.github,
                        personalInfo: context.personalInfo,
                        projectLable:context.projectLable,
                        projects: context.projects,
                    }
                );



                document.getElementById("output").innerHTML = renderedTemplate;
            }

            let Context = localStorage.getItem('Context');
            if (Context) {
                let context = JSON.parse(Context);
                compile(context)

            } else {
                console.error("No 'Context' found in localStorage");
            }





        });

})

