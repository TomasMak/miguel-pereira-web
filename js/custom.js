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

  let elements = document.querySelector('.imgslide').children;

  let imgNames = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].src !== undefined) {
      imgNames.push(elements[i].alt);
      document.getElementById(project).getElementsByClassName("img-name")[0].innerText = imgNames[index - 1];
    }
  }
  console.log(imgNames[index - 1]);
}


  // Show random text onload



//   window.setInterval(function() {
//     randomNumber = Math.floor(Math.random()*3+1);
//     console.log(randomNumber);

// 	if (randomNumber == 1) {
// 		document.getElementById("p1").style.visibility = "visible";
// 		document.getElementById("p2").style.visibility = "hidden";
// 		document.getElementById("p3").style.visibility = "hidden";
// 	}
// 	if (randomNumber == 2) {
// 		document.getElementById("p1").style.visibility = "hidden";
// 		document.getElementById("p2").style.visibility = "visible";
// 		document.getElementById("p3").style.visibility = "hidden";
// 	}
// 	if (randomNumber == 3) {
// 		document.getElementById("p1").style.visibility = "hidden";
// 		document.getElementById("p2").style.visibility = "hidden";
// 		document.getElementById("p3").style.visibility = "visible";
// 	}
// 	if (randomNumber == 4) {
// 		document.getElementById("p1").style.visibility = "visible";
// 		document.getElementById("p2").style.visibility = "hidden";
// 		document.getElementById("p3").style.visibility = "hidden";
// 	}
// }, 3000)