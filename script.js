function showHideKnowledge()
{   
    let tableSection = document.querySelector(".table");
    let showArrow = document.querySelector("arrow-button show");
    let hideArrow = document.querySelector("arrow-button hide");
    if(tableSection.style.display=="grid")
    {
        tableSection.style.display="none";
        showArrow.style.display="Inline";
        hideArrow.style.display="none";
    }
    else if(tableSection.style.display=="none")
    {
        tableSection.style.display="grid";
        tableSection.style.setAttribute("style", "grid-gap: 20px; grid-template-columns: repeat(auto-fit, minmax( 290px,1fr));");
        showArrow.style.display="none";
        hideArrow.style.display="Inline";
    }

}

function showHideTable(tabName){
    var selectArrow1 = document.getElementById("selectArrow1");
    var selectArrow2 = document.getElementById("selectArrow2");
    let knowledge = document.getElementById('knowledge');
    let education = document.getElementById('education');
    if(tabName==='knowledge')
    {
        knowledge.style.display="grid";
        education.style.display="none";
        selectArrow1.style.display="Inline";
        selectArrow2.style.display="none";
        knowledge.style.setAttribute("style", "text-align: left;margin-left:2%;margin-top:2%;");
    }
    else
    {
        knowledge.style.display="none";
        education.style.display="grid";
        selectArrow1.style.display="none";
        selectArrow2.style.display="Inline";
        education.style.setAttribute("style", "text-align: left;margin-left:2%;margin-top:2%;");
    }
}