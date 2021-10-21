const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');
const open = document.querySelector('.menu');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('nav-menu-active');
  close.classList.add('close-appear');
  hamburger.classList.add('hamburger-disappear')
});

close.addEventListener('click', () => {
  navMenu.classList.remove('nav-menu-active');
  close.classList.remove('close-appear');
  hamburger.classList.remove('hamburger-disappear');
});

for (let i = 0; i < navLink.length; i += 1) {
  navLink[i].addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-active');
    close.classList.remove('close-appear');
    hamburger.classList.remove('hamburger-disappear');
  });
}


const projectSection = document.getElementById('program-section');
const projectSectionTitle = document.createElement('h3');
// const underLineImage = document.createElement('img');
// const projectCard = document.createElement('div');
// underLineImage.src = 'img/Vector4.png';
// underLineImage.setAttribute('alt', 'Project Image');
projectSectionTitle.innerText = 'Main Program';
projectSection.appendChild(projectSectionTitle);
// const projectData = [
//   4,
//   {
//     projectTitle: '',
//     projectDescription: "A website created for a digital marketing agency to help improve sales and give information about company's product. This website also helps the client to contact the company for a business deal and showcases the company's different services and packages.",
//   },
//   {
//     firstLang: 'CSS',
//     secondLang: 'HTML',
//     thirdLang: 'JavaScript',
//     fourthLang: 'Ruby',
//   },
//   {
//     imag1: 'img/fola2.PNG',
//     image2: 'img/fola3.PNG',
//     image3: 'img/spike.PNG',
//     image4: 'img/fola2.PNG',
//   },
// ];

// for (let i = 1; i <= projectData[0]; i += 1) {
//   const projects = `
//   <div class="proof proof-space">
//     <img id="project-image${i}" class="project-img" src="" alt="Project33" />
//     <div class="inner-element">
//       <h3>MARKETING AGENCY</h3>
//       <p>${projectData[1].projectDescription}</p>
//       <div class="tools">
//         <ul>
//           <li class="line">${projectData[2].firstLang}</li>
//           <li class="line">${projectData[2].secondLang}</li>
//           <li class="line">${projectData[2].thirdLang}</li>
//           <li>${projectData[2].fourthLang}</li>
//         </ul>
//       </div>
//       <button class="project-link btnsee btncheck">See Project</button>
//     </div>
//   </div>`;
//   projectSection.innerHTML += projects;
// }
// document.getElementById('project-image1').src = projectData[3].imag1;
// document.getElementById('project-image2').src = projectData[3].image2;
// document.getElementById('project-image3').src = projectData[3].image3;
// document.getElementById('project-image4').src = projectData[3].image4;

// projectSectionTitle.className = 'recent';
// underLineImage.className = 'line-divider2';
// projectCard.className = 'inner-element';
