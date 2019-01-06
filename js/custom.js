// Project images galleries 

let projectIndexes = {
    project1: 1,
    project2: 1,
    project3: 1,
    project4: 1
  }
  showDivs("project1", projectIndexes.project1);
  showDivs("project2", projectIndexes.project2);
  showDivs("project3", projectIndexes.project3);
  showDivs("project4", projectIndexes.project4);
  
  function plusDivs(project, n) {
    showDivs(project, projectIndexes[project] += n);
  }
  
  function showDivs(project, index) {
    let i;
    let x = document.getElementById(project).getElementsByClassName("slides");
    if (index > x.length) { index = 1 }
    if (index < 1) { index = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
    document.getElementById(project).getElementsByClassName("pagination")[0].innerText = index + ' / ' + x.length;
    projectIndexes[project] = index;
  }
