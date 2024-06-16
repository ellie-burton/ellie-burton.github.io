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
  description: "I created this personal website using HTML, CSS, and JavaScript. It's a simple website that showcases my skills and projects.",
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
  skills: ["Python", "Gmail API", "Spotipy", "Pandas"],
  github: "https://github.com/ellie-burton/ColorMatchGame",
  image: "images/color.jpg"
},
{
  title: "Happiness/ Gratitude Initiative",
  description: "I created a website to promote positivity and gratitude, and to help people find happiness in their daily lives.",
  skills: ["Python", "iOS Shortcuts", "Gmail API", "Pandas"],
  github: "https://github.com/username/spotify-analysis",
  image: "images/happy.jpg"
},
{
  title: "Belize Conch Population Analysis",
  description: "I analyzed the population of the Belize Conch population on a study abroad trip. The data was then used to create a visualization that showed changes in the population over time.",
  skills: ["Python", "Pandas", "Matplotlib", "Pandas"],
  github: "https://github.com/username/spotify-analysis",
  image: "images/happy.jpg"
}
// Add more projects here...
];

const carouselInner = document.querySelector('.carousel-inner');
const carouselIndicators = document.querySelector('.carousel-indicators');

projectList.forEach((project, index) => {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) {
    carouselItem.classList.add('active');
  }

  const imageContent = document.createElement('div');
  imageContent.classList.add('image-content');
  const img = document.createElement('img');
  img.classList.add('d-block', 'w-100');
  img.src = project.image;
  img.alt = project.title;
  imageContent.appendChild(img);
  carouselItem.appendChild(imageContent);

  const textContent = document.createElement('div');
  textContent.classList.add('text-content');
  const title = document.createElement('h5');
  title.textContent = project.title;
  textContent.appendChild(title);

  const description = document.createElement('p');
  description.textContent = project.description;
  textContent.appendChild(description);

  const skills = document.createElement('p');
  skills.textContent = `Skills: ${project.skills.join(', ')}`;
  textContent.appendChild(skills);

  const githubLink = document.createElement('a');
  githubLink.href = project.github;
  githubLink.target = '_blank';
  const githubLogo = document.createElement('img');
  githubLogo.src = 'images/github.png'; // Path to your GitHub logo
  githubLogo.alt = 'GitHub Logo';
  githubLogo.style.width = '50px'; // Adjust the width of the GitHub logo here
  githubLogo.style.height = 'auto'; // Maintain aspect ratio
  githubLink.appendChild(githubLogo);
  textContent.appendChild(githubLink);
  //if link exists
  if (project.link) {
    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.target = '_blank';
    const linkLogo = document.createElement('img');
    linkLogo.src = 'images/link.png'; // Path to your GitHub logo
    linkLogo.alt = 'Link Logo';
    linkLogo.style.width = '50px'; // Adjust the width of the GitHub logo here
    linkLogo.style.height = 'auto'; // Maintain aspect ratio
    projectLink.appendChild(linkLogo);

    textContent.appendChild(projectLink);
  }

  carouselItem.appendChild(textContent);

  carouselInner.appendChild(carouselItem);

  const indicator = document.createElement('li');
  indicator.setAttribute('data-target', '#carouselExampleIndicators');
  indicator.setAttribute('data-slide-to', index.toString());
  if (index === 0) {
    indicator.classList.add('active');
  }
  carouselIndicators.appendChild(indicator);
});



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
});




//BOOKS
// List of book image URLs
const BookList = [{
  title: "Meditations",
  author: "Marcus Aurelius",
  rating: 5,
  isbn: "9780812968255",
  notes: "I really enjoyed this book. It was my first time reading a philosophy book and I found it very insightful."
},
{
  title: "What I Know for Sure",
  author: "Oprah Winfrey",
  rating: 4,
  isbn: "9781250054050",
  notes: "I loved this book. It was a very easy read and I found Oprah's insights very inspiring."
},
{
  title: "The Power of Now",
  author: "Eckhart Tolle",
  rating: 4,
  isbn: "9781577314806",
  notes: "I found this book very intersting. It was a bit heavy at times, but overall I enjoyed it."
},
{
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  rating: 4,
  isbn: "9780062457714",
  notes: "This book was a very easy read and I found it very insightful about the modern world's take on stoicism. I loved the author's sense of humor."
},
{
  title: "Moonwalking with Einstein",
  author: "Joshua Foer",
  rating: 3,
  isbn: "9780143120537",
  notes: "This book was very informative on memory and how it can be best utilized. I found it motivating to treat memory as an important skill to continualy exercise."
},
{
  title: "Atomic Habits",
  author: "James Clear",
  rating: 5,
  isbn: "9780735211292",
  notes: "I loved this book. I base many of my habits on it. Specifically, I enjoy utilizing habit stacking and '1% better everyday' in my daily life."
},
{
  title: "Outliers",
  author: "Malcolm Gladwell",
  rating: 4,
  isbn: "9780141036250",
  notes: "This book had an interesting viewpoint on success and how it can be achieved. I found it to be a unique perspective that broadened my view."
},
{
  title: "Outlive",
  author: "Peter Attia",
  rating: 3,
  isbn: "9780593236598",
  notes: "This book was a bit heavy at times, but overall I enjoyed it. I found it to be a very informative book on health and how it can be best utilized."
},
{
  title: "Man's Search for Meaning",
  author: "Viktor E. Frankl",
  rating: 4,
  isbn: "9781846041242",
  notes: "This book was incredibly inspiring. It gave a great perspective on the purpose of life and finding personal meaning."
},
{
  title:"Ikigai",
  author: "Héctor García",
  rating: 5,
  isbn: "9780143130727",
  notes: "This book gave amazing insights on 'blue zones' and how many people achieve great longevity."
}
];
// Function to create a book element
function createBookElement(bookData) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.style.setProperty('--bg-image', `url(https://covers.openlibrary.org/b/isbn/${bookData.isbn}-L.jpg)`);

  bookElement.setAttribute('data-toggle', 'modal');
  bookElement.setAttribute('data-target', '#bookModal');

  bookElement.addEventListener('click', () => {
    populateBookModal(bookData);
  });
  
  return bookElement;
}

function populateBookModal(bookData) {
  const modalTitle = document.getElementById('bookModalTitle');
  const modalAuthor = document.getElementById('bookModalAuthor');
  const modalRating = document.getElementById('bookModalRating');
  const modalNotes = document.getElementById('bookModalNotes');
  const modalLink = document.getElementById('bookModalLink');

  modalTitle.textContent = bookData.title;
  modalAuthor.textContent = `by ${bookData.author}`;
  modalRating.textContent = Array(bookData.rating).join('⭐');
  modalNotes.textContent = `My Notes: ${bookData.notes}`;
  modalLink.href = `https://www.amazon.com/s?k=${bookData.isbn}`;
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

function createBookElement(book) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');

  const imageUrl = `url(https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg)`;
  bookElement.style.setProperty('--bg-image', imageUrl);

  bookElement.setAttribute('data-toggle', 'modal');
  bookElement.setAttribute('data-target', '#bookModal');

  bookElement.addEventListener('click', () => {
    populateBookModal(book);
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
  ratingElement.textContent = Array(book.rating).join('⭐');
  notesElement.textContent = `My Notes: ${book.notes}`;
  linkElement.href = `https://www.amazon.com/s?k=${book.isbn}`;
}

// Append books when the DOM content is loaded
document.addEventListener('DOMContentLoaded', appendBooks);

