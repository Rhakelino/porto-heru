document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            title: "Web Development",
            description: "Situs web responsif pakai HTML5, CSS3, dan JavaScript.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>`
        },
        {
            title: "Data Analysis",
            description: "Analisis data pakai Python dan library Pandas & Matplotlib.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 4-8"/></svg>`
        },
        {
            title: "Mobile App UI",
            description: "Desain UI aplikasi mobile dengan fokus pada UX.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>`
        }
    ];

    const grid = document.querySelector('.project-grid');

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-item';
        card.innerHTML = `
            <span class="project-icon">${p.icon}</span>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
        `;
        grid.appendChild(card);
    });
});