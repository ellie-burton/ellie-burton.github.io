const projectList = [{
    title: "AI Spotify Analysis",
    description: "I used the Spotify API to analyze my music listening habits and create a playlist of my top songs.",
    skills: ["Python", "Spotify API", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/username/spotify-analysis",
    image: "images/music.jpg"
},
{
    title: "Automations for Daily Life",
    description: "I used Python to automate my daily tasks, such as sending email reminders and downloading new music.",
    skills: ["Python", "Gmail API", "Spotipy", "Pandas"],
    github: "https://github.com/username/spotify-analysis",
    image: "images/automate.jpg"
},
{
    title: "Nebula Navigators",
    description: "At the 2024 AuburnHacks hackathon, I worked with a team to create a sandbox space simulation game where users can explore dynamically generated planets.",
    skills: ["Python", "Pygame", "Git"],
    github: "https://github.com/username/spotify-analysis",
    image: "images/space.jpg"
},
{
    title: "Color Matching Game",
    description: "This simple game generates a random color and challenges the user to find the matching color via RGB value sliders.",
    skills: ["Python", "Gmail API", "Spotipy", "Pandas"],
    github: "https://github.com/username/spotify-analysis",
    image: "images/color.jpg"
},
{
    title: "Happiness/ Gratitude Initiative",
    description: "I created a website to promote positivity and gratitude, and to help people find happiness in their daily lives.",
    skills: ["Python", "iOS Shortcuts", "Gmail API", "Pandas"],
    github: "https://github.com/username/spotify-analysis",
    image: "images/happy.jpg"
},
// Add more projects here...
];


document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjusted for header height
                behavior: "smooth"
            });
        });
    });

    function generatePaginationButtons() {
        projectList.forEach((project, index) => {
            const button = document.createElement('button');
            button.textContent = index + 1;
            button.addEventListener('click', () => showProject(project, index));
            pagination.appendChild(button);
        });
    }

    function showProject(project, index) {
        const projectDiv = document.getElementById('project');
        //projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        

        projectDiv.innerHTML = `<img src="${project.image}" alt="${project.title}" class="image">`;
        projectDiv.innerHTML += `<div class="overlay-text">${project.title}</div><p>${project.description}</p>`;
        projectDiv.innerHTML += `<p>Skills used: ${project.skills.join(', ')}</p>`;
        projectDiv.innerHTML += `<a href="${project.github}" target="_blank">View on GitHub</a>`; 
        var buttons = document.getElementsByTagName('button');
        console.log(buttons);
        const arr = Array.from(buttons);
        arr.forEach(button => button.classList.remove('active'));
        arr[index].classList.add('active');  
    }

    generatePaginationButtons();
    showProject(projectList[0], 0);
});
