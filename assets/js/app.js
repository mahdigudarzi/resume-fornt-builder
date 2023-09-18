

const  form = document.getElementById('myForm')
form.addEventListener('submit', getFormValues);

function getFormValues(){
    event.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const cellphone = form.elements['cellphone'].value;
    const location = form.elements['location'].value;
    const age = form.elements['age'].value;
    const linkedin = form.elements['linkedin'].value;
    const stackoverflow = form.elements['stackoverflow'].value;
    const github = form.elements['github'].value;
    const education = "تحصیلات";
    const ServiceStat = "وضیعت سربازی";
    const selectElement = document.getElementById('hobbies');
    const state = selectElement.value;
    const tellMeMore = document.getElementById('aboutMe').value;
    const aboutMe ="درباره من ";
    const personalInfo= "اطلاعات شخصی";
    const socialInfo = "شبکه های اجتماعی";
    const selectTag = document.getElementById("degree");
    const degree = selectTag.value;
    let inputString = document.getElementById("skills").value;
    let userArray = inputString.split(",");
    let skills="مهارت ها";
    let context = {
        name:name,
        email:email,
        cellPhone:cellphone,
        city:location,
        age:age,
        education:education,
        serviceStat:ServiceStat,
        nameAndLastName:name,
        degree:degree,
        tellMeMore:tellMeMore,
        personalInfo:personalInfo,
        state:state,
        ServiceStat:ServiceStat,
        socialInfo:socialInfo,
        aboutMe:aboutMe,
        lskills :userArray,
        skills:skills,
        linkedin:linkedin,
        github:github,
        stackoverflow:stackoverflow
    }



    const url = 'outter.html';
    const encodedContext = encodeURIComponent(JSON.stringify(context));
    console.log(`${url}?context=${encodedContext}`)
    window.location.href = `${url}?context=${encodedContext}`;



}




