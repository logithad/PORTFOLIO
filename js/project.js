
function displayProjectTwo(){
    document.getElementsByClassName("project-One")[0].style.display='none';
    document.getElementsByClassName("project-Two")[0].style.display='flex';
    
}
function displayProjectOne(){
    document.getElementsByClassName("project-One")[0].style.display='flex';
    document.getElementsByClassName("project-Two")[0].style.display='none';
}
function displayEducation(){
    document.getElementsByClassName("resume-Education")[0].style.display='block';
    document.getElementsByClassName("resume-skills")[0].style.display='none';
    document.getElementById("resume-onclick-education").style.backgroundColor='orange';
    document.getElementById("resume-onclick-education-a").style.color='white';
    document.getElementById("resume-onclick-skills-a").style.color='black';
    document.getElementById("resume-onclick-skills").style.backgroundColor='white';

}
function displaySkills(){
    document.getElementsByClassName("resume-Education")[0].style.display='none';
    document.getElementsByClassName("resume-skills")[0].style.display='block';
    document.getElementById("resume-onclick-skills").style.backgroundColor='orange';
    document.getElementById("resume-onclick-skills-a").style.color='white';
    document.getElementById("resume-onclick-education-a").style.color='black';
    document.getElementById("resume-onclick-education").style.backgroundColor='white';


}