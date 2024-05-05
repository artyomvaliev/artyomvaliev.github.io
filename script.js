

function showHideTable(tabName){
    var selectArrow1 = document.getElementById("selectArrow1");
    var selectArrow2 = document.getElementById("selectArrow2");
    let knowledge = document.getElementById('knowledge');
    let education = document.getElementById('education');
    let abt = document.getElementById('abt');
    if(tabName==='knowledge')
    {
        abt.style.flexDirection = "column";
        education.style.transition = "0s";
        knowledge.style.transition = "2s";
        education.style.opacity = "0";
        knowledge.style.display="grid";
        knowledge.style.opacity = "1";
        knowledge.style.scale = "1";
        selectArrow1.style.display="Inline";
        selectArrow2.style.display="none";
    }
    else
    {   
        abt.style.flexDirection = "column-reverse";
        education.style.transition = "2s";
        knowledge.style.transition = "0s";
        knowledge.style.opacity = "0";
        education.style.display="grid";
        education.style.opacity = "1";
        education.style.scale = "1";
        selectArrow1.style.display="none";
        selectArrow2.style.display="Inline";  
    }
}
