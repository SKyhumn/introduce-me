let typed=new Typed("#typed",{
    strings:["안녕하세요.", "프론트엔드 개발자 최준영입니다."],
    typeSpeed: 30,
    backSpeed: 30, 
    startDelay: 500, 
    backDelay: 1000, 
    loop: true,
})

const headerEl=document.querySelector("header");
window.addEventListener("scroll", function(){
    const ScrollY=this.window.scrollY;
    if(ScrollY>0){
        headerEl.classList.add("active");
    }
    else{
        headerEl.classList.remove("active");
    }
})

const homeBtn=document.querySelector("header .home");
const aboutBtn=document.querySelector("header nav .about");
const featuresBtn=document.querySelector("header nav .features");
const portfolioBtn=document.querySelector("header nav .portfolio");
const contactBtn=document.querySelector("header nav .contact");

const homeSection=document.querySelector("#main");
const aboutSection=document.querySelector("#about");
const featuresSection=document.querySelector("#features");
const portfolioSection=document.querySelector("#portfolio");
const contactSection=document.querySelector("#contact");

homeBtn.addEventListener("click",function(){
    homeSection.scrollIntoView({behavior:"smooth"});
})
aboutBtn.addEventListener("click",function(){
    aboutSection.scrollIntoView({behavior:"smooth"});
})
featuresBtn.addEventListener("click",function(){
    featuresSection.scrollIntoView({behavior:"smooth"});
})
portfolioBtn.addEventListener("click",function(){
    portfolioSection.scrollIntoView({behavior:"smooth"});
})
contactBtn.addEventListener("click",function(){
    contactSection.scrollIntoView({behavior:"smooth"});
})

document.forms[0].addEventListener("submit", function(event){
    event.preventDefault();

    const nm=document.forms[0].name;
    const em=document.forms[0].email;
    const msg=document.forms[0].msg;

    if(nm.value.trim()==''){
        alert('이름을 입력해 주세요.');
        contactSection.scrollIntoView({behavior:"smooth"});
    }

    if(em.value.trim()==''){
        alert('이메일을 입력해 주세요.');
        contactSection.scrollIntoView({behavior:"smooth"});
    }
    else if(em.value.indexOf("@")==-1){
        alert('이메일은 @를 포함해서 입력해 주세요.');
        contactSection.scrollIntoView({behavior:"smooth"});
    }

    if(msg.value.trim().length<5){
        alert('메세지는 최소 5자 입력해 주세요.');
        contactSection.scrollIntoView({behavior:"smooth"});
    }
    
    if(nm.value.trim()!==''&&em.value.indexOf("@")!==-1&&msg.value.trim().length>=5){
        this.submit();
    }
})
