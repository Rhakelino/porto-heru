document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Project 1: Web Development",
            description: "Membuat situs web responsif menggunakan HTML5, CSS3, dan JavaScript.",
            link: "#"
        },
        {
            title: "Project 2: Data Analysis",
            description: "Analisis data menggunakan Python dan library seperti Pandas dan Matplotlib.",
            link: "#"
        },
        {
            title: "Project 3: Mobile App UI",
            description: "Desain antarmuka pengguna aplikasi mobile dengan fokus pada UX.",
            link: "#"
        }
    ];

    const projectGrid = document.querySelector('.project-grid');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Lihat Detail</a>
        `;
        projectGrid.appendChild(projectItem);
    });
});