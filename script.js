function showModal() {
  document.getElementById("cvModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("cvModal").style.display = "none";
}

// Tutup modal jika klik di luar modal-content
window.onclick = function (event) {
  const modal = document.getElementById("cvModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Data Projects
  const projects = [
    {
      foto: "assets/img/ipdc.png",
      project_name: "Laundry Management Web App",
      project_desc:
        "A web application built using HTML, CSS, Bootstrap, and JavaScript for managing laundry operations efficiently. The system allows users to manage customers, process laundry transactions, view transaction reports with filter functionality, and print receipts.",
    },
    {
      foto: "assets/img/ipdc.png",
      project_name: "Finance Landing Page UI Slicing",
      project_desc:
        "As part of a training project, the task involved slicing the UI for a finance landing page website. The project focused on translating designs from Figma into code using HTML, CSS, and JavaScript, ensuring a pixel-perfect and responsive layout across various devices.",
    },
    {
      foto: "assets/img/monevng.png",
      project_name: "MONEVNG",
      project_desc:
        "This web was developed during Internship - In this case, MONEVNG provides information and analysis regarding the list of blacklisted procurement providers. (Tech Stack: HTML, CSS, Java, JavaScript, and Play Framework)",
    },
    {
      foto: "assets/img/jline_work.png",
      project_name: "JLINE 005 - Web Design",
      project_desc:
        "Participated in Web Design project for JLlNE in collaboration with PT Permata Insan Nusantara (Tech Stack: HTML, CSS, Bootstrap)",
    },
    {
      foto: "assets/img/paramore.png",
      project_name: "SWOG Music",
      project_desc:
        "A static website, simple website store with simple design (Tech Stack: HTML, CSS, Bootstrap)",
    },
    {
      foto: "assets/img/covid-19 web.png",
      project_name: "COVID-19 Information Web",
      project_desc:
        "COVID-19 Information Web as a requirement to pass the competency test. (Tech Stack: HTML, CSS, Bootstrap, PHP)",
    },
  ];

  // Menampilkan Project
  const projectContainer = document.getElementById("project-container");

  projects.forEach((project) => {
    const projectCard = `
        <div class="col-md-6">
          <div class="row p-3">
            <div class="card">
              <div class="col-md-12 text-center">
                <img src="${project.foto}" class="project-img img-fluid" alt="Project image">
              </div>
              <div class="row p-3">
                <div class="col-sm-12">
                  <div class="card-title p-1">${project.project_name}</div>
                  <div class="card-body">
                    <p>${project.project_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    projectContainer.insertAdjacentHTML("beforeend", projectCard);
  });

  // Data Skills
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "React.js",
    "Laravel",
    "SQL",
    "GitHub",
    "Ahay",
    "Photoshop",
    "Playing Guitar",
  ];

  // Menampilkan Skills
  const skillsContainer = document.getElementById("skills-container");

  skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.classList.add("skill-item");
    skillItem.textContent = skill;
    skillsContainer.appendChild(skillItem);
  });
});
