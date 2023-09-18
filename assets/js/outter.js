

const urlParams = new URLSearchParams(window.location.search);
const encodedContext = urlParams.get('context');

// Decode and parse the JSON-encoded context
const decodedContext = decodeURIComponent(encodedContext);


// Process the data from the context object
// Example: Accessing the 'name' property

let context =JSON.parse(decodedContext)
console.log(context.name)
// compile the template !
function compile(context) {

    //Assuming you have an HTML element with the ID "entry-template"
    let source = document.getElementById("entry-template").innerHTML;
    let template = Handlebars.compile(source);
    // Assuming you want to render the template inside an HTML element with the ID "output"
    let renderedTemplate = template(
    {
        name:context.name,
        email:context.email,
        cellPhone:context.cellPhone,
        city:context.city,
        age:context.age,
        education:context.education,
        ServiceStat:context.ServiceStat,
        state:context.state,
        socialInfo:context.socialInfo,
        aboutMe:context.aboutMe,
        tellMeMore:context.tellMeMore,
        skills:context.skills,
        degree:context.degree,
        lskills: context.lskills,
        linkedin:context.linkedin,
        stackoverflow:context.stackoverflow,
        github:context.github,
    }


    );
    document.getElementById("output").innerHTML = renderedTemplate;
}

compile(context)
document.getElementById("generatePdfButton").addEventListener("click", generatePdf);

function generatePdf() {
    // Trigger the print dialog
    window.print();
}

