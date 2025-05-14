const projectList = [{
  title: "PlaylistPainter",
  description: "PlaylistPainter is a web application that transforms your Spotify playlists into beautiful, AI-generated album covers. By leveraging advanced AI models and seamless Spotify integration, it creates stunning visual representations of your music taste. Users can generate unique images from any Spotify playlist URL, view their playlist songs in a sleek layout, and download the created images. ",
  skills: ["Python", "Spotify API", "Spotipy","HuggingFace", "Pillow","Heroku"],
  github: "https://github.com/ellie-burton/spotify-img",
  link: "https://spotify-img-bcf4303e41dc.herokuapp.com/",
  image: "images/music.jpg"
},
{
  title: "Personal Website",
  description: "I created this personal website to showcases my skills and projects. It was an incredible learning experience, as well as a creative exercise. I loved the process of creating a landing page for presenting my work in a way that reflects my personality.",
  skills: ["HTML", "CSS", "JavaScript", "Git","Bootstrap"],
  github: "https://github.com/ellie-burton.github.io",
  link: "https://ellie-burton.github.io",
  image: "images/computer.jpg"
},
{
  title: "Automations for Daily Life",
  description:'This automation process helps you log moments of gratitude and happiness through a convenient widget on your iPhone and receive a weekly recap email summarizing these moments along with five random photos from your Google Photos. The system is designed to streamline the process of tracking positive moments and reflecting on them weekly, enhancing your mindfulness and well-being.',
  skills: ["Python", "Gmail API", "iOS Shortcuts", "NFC Tags","Google Photos API"],
  github: "https://github.com/ellie-burton/automations",
  image: "images/automate.jpg"
},
{
  title: "Nebula Navigators",
  description: "At the 2024 AuburnHacks hackathon, I worked with a team to create a sandbox space simulation game where users can explore dynamically generated planets.",
  skills: ["Python", "Pygame", "Git"],
  github: "https://github.com/ahconnors/Nebula-Navigators",
  image: "images/space.jpg"
},
{
  title: "Color Matching Game",
  description: "This simple game generates a random color and challenges the user to find the matching color via RGB value sliders.",
  skills: ["Python", "Pygame",],
  github: "https://github.com/ellie-burton/ColorMatchGame",
  image: "images/color.jpg"
},
{
  title: "Belize Conch Population Analysis",
  description: "I analyzed the population of the Belize Conch population on a study abroad trip. The data was then used to create a visualization that showed changes in the population over time.",
  skills: ["Python", "Pandas", "Matplotlib"],
  github: "https://github.com/ellie-burton/conch",
  image: "images/conch.jpg"
}
// Add more projects here...
];

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      if (href.startsWith('http') || href.startsWith('mailto') || href.endsWith('.pdf')) {
        // Do not prevent default for external links
        return;
      }

      event.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with ID '${targetId}' not found.`);
      }
    });
  });

  // Initialize projects carousel
  const carouselInner = document.querySelector('#projectCarousel .carousel-inner');
  const carouselIndicators = document.querySelector('#projectCarousel .carousel-indicators');

  projectList.forEach((project, index) => {
    // Create carousel item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) carouselItem.classList.add('active');

    // Create project card
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    
    // Create image section
    const imageSection = document.createElement('div');
    imageSection.classList.add('project-image');
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    imageSection.appendChild(img);
    
    // Create content section
    const contentSection = document.createElement('div');
    contentSection.classList.add('project-content');
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const skills = document.createElement('div');
    skills.classList.add('project-skills');
    project.skills.forEach(skill => {
      const badge = document.createElement('span');
      badge.classList.add('skill-badge');
      badge.textContent = skill;
      skills.appendChild(badge);
    });
    
    const links = document.createElement('div');
    links.classList.add('project-links');
    
    if (project.github) {
      const githubLink = document.createElement('a');
      githubLink.href = project.github;
      githubLink.target = '_blank';
      githubLink.classList.add('btn', 'btn-outline-light');
      githubLink.innerHTML = '<i class="fab fa-github"></i> View Code';
      links.appendChild(githubLink);
    }
    
    if (project.link) {
      const demoLink = document.createElement('a');
      demoLink.href = project.link;
      demoLink.target = '_blank';
      demoLink.classList.add('btn', 'btn-light');
      demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
      links.appendChild(demoLink);
    }
    
    contentSection.appendChild(title);
    contentSection.appendChild(description);
    contentSection.appendChild(skills);
    contentSection.appendChild(links);
    
    projectCard.appendChild(imageSection);
    projectCard.appendChild(contentSection);
    carouselItem.appendChild(projectCard);
    carouselInner.appendChild(carouselItem);

    // Create indicator
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', '#projectCarousel');
    indicator.setAttribute('data-bs-slide-to', index.toString());
    if (index === 0) indicator.classList.add('active');
    indicator.setAttribute('aria-label', `Slide ${index + 1}`);
    carouselIndicators.appendChild(indicator);
  });

  // Initialize carousel
  new bootstrap.Carousel(document.querySelector('#projectCarousel'), {
    interval: 5000,
    touch: true
  });
});

//BOOKS
// List of book image URLs
const BookList = [{
  title: "Meditations",
  author: "Marcus Aurelius",
  rating: 5,
  isbn: "9780812968255",
  image:"https://images.penguinrandomhouse.com/cover/9780812968255",
  notes: "I really enjoyed this book. It was my first time reading a philosophy book and I found it very insightful."
},
{
  title: "10% Happier",
  author: "Dan Harris",
  rating: 5,
  isbn: "9780062917607",
  image:"https://m.media-amazon.com/images/I/41RsOoojQXL._AC_UF1000,1000_QL80_.jpg",
  notes: "I enjoyed the skeptical tone of the author. It led to a convincing argument on the value of mindfulness in busy, productive lives. It was interesting to think that intentionally slowing down could actually improve the quality of your work and life."
},
{
  title: "What I Know for Sure",
  author: "Oprah Winfrey",
  rating: 4,
  isbn: "9781250054050",
  image:"https://images.booksense.com/images/050/054/9781250054050.jpg",
  notes: "I loved this book. It was a very easy read and I found Oprah's insights very inspiring. It also referenced many books I've read and enjoyed/ that are on my TBR list."
},
{
  title: "The Power of Now",
  author: "Eckhart Tolle",
  rating: 3,
  isbn: "9781577314806",
  image:"https://m.media-amazon.com/images/I/61Ij8nLooNL._AC_UF1000,1000_QL80_.jpg",
  notes: "This book was a bit heavy at times, but overall I enjoyed it."
},
{
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  rating: 4,
  image:"https://jamesclear.com/wp-content/uploads/2016/08/The-Subtle-Art-of-Not-Giving-a-Fuck-by-Mark-Manson.png",
  isbn: "9780062457714",
  notes: "This book was a very easy read and I found it very insightful about the modern world's take on stoicism. I loved the author's sense of humor."
},
{
  title: "Moonwalking with Einstein",
  author: "Joshua Foer",
  rating: 3,
  isbn: "9780143120537",
  image:"https://m.media-amazon.com/images/I/71wxNktCqKL._AC_UF1000,1000_QL80_.jpg",
  notes: "This book was very informative on memory and how it can be best utilized. I found it motivating to treat memory as an important skill to continualy exercise."
},
{
  title: "Atomic Habits",
  author: "James Clear",
  rating: 5,
  isbn: "9780735211292",
  image:"https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
  notes: "I loved this book, and I base many of my habits on it. Specifically, I enjoy utilizing habit stacking and '1% better everyday' in my daily life."
},
// {
//   title: "Outliers",
//   author: "Malcolm Gladwell",
//   rating: 4,
//   isbn: "9780141036250",
//   notes: "This book had an interesting viewpoint on success and how it can be achieved. I found it to be a unique perspective that broadened my view."
// },
// {
//   title: "Outlive",
//   author: "Peter Attia",
//   rating: 3,
//   isbn: "9780593236598",
//   notes: "I am fascinated by 'Blue Zones', so I really enjoyed this book. I found it to be a very informative book on health and how it can be best utilized."
// },
// {
//   title: "Man's Search for Meaning",
//   author: "Viktor E. Frankl",
//   rating: 4,
//   isbn: "9781846041242",
//   notes: "This book was incredibly inspiring. It gave a great perspective on the purpose of life and finding personal meaning."
// },
// {
//   title:"Ikigai",
//   author: "Héctor García",
//   rating: 5,
//   isbn: "9780143130727",
//   notes: "This book gave amazing insights on 'blue zones' and how many people achieve great longevity."
// },
// {
//   title:"Designing Your Life: How to Build a Well-Lived, Joyful Life",
//   author:"Bill Burnett and Dave Evans",
//   rating: 4,
//   isbn: "9781101875322",
//   notes: "This book gave amazing insights on 'blue zones' and how many people achieve great longevity."
// }
];
// Function to create a book element
function createBookElement(book) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.style.setProperty('--bg-image', `url(${book.image})`);

  bookElement.addEventListener('click', () => {
    const bookModal = new bootstrap.Modal(document.getElementById('bookModal'));
    populateBookModal(book);
    bookModal.show();
  });
  
  return bookElement;
}

function populateBookModal(book) {
  const titleElement = document.getElementById('bookModalTitle');
  const authorElement = document.getElementById('bookModalAuthor');
  const ratingElement = document.getElementById('bookModalRating');
  const notesElement = document.getElementById('bookModalNotes');
  const linkElement = document.getElementById('bookModalLink');

  titleElement.textContent = book.title;
  authorElement.textContent = `by ${book.author}`;
  
  // Create star rating
  ratingElement.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = i < book.rating ? '★' : '☆';
    ratingElement.appendChild(star);
  }
  
  notesElement.textContent = book.notes;
  linkElement.href = `https://www.amazon.com/s?k=${book.isbn}`;
}

function appendBooks() {
  const container = document.getElementById('bookshelf');
  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books');

  BookList.sort((a, b) => a.title.localeCompare(b.title));

  BookList.forEach(book => {
    const bookElement = createBookElement(book);
    booksContainer.appendChild(bookElement);
  });

  booksContainer.id = 'style-3';
  container.appendChild(booksContainer);
}

// Append books when the DOM content is loaded
document.addEventListener('DOMContentLoaded', appendBooks);

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  
  // Add scrolled class to navbar when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Highlight active section in navbar
  function highlightNavLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);
  window.addEventListener('load', highlightNavLink);
});

