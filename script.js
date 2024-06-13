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

const slideOverlay = document.createElement('div');
slideOverlay.classList.add('slide-overlay');
carouselItem.appendChild(slideOverlay);

const img = document.createElement('img');
img.classList.add('d-block', 'w-100');
img.src = project.image;
img.alt = project.title;
carouselItem.appendChild(img);

const caption = document.createElement('div');
caption.classList.add('carousel-caption', 'd-none', 'd-md-block');

const title = document.createElement('h3');
title.textContent = project.title;
caption.appendChild(title);

const description = document.createElement('p');
description.textContent = project.description;
caption.appendChild(description);

const skills = document.createElement('p');
skills.textContent = `Skills: ${project.skills.join(', ')}`;
caption.appendChild(skills);

const githubLink = document.createElement('a');
githubLink.href = project.github;
githubLink.target = '_blank';
const githubLogo = document.createElement('img');
githubLogo.src = 'images/github.png'; // Path to your GitHub logo
githubLogo.alt = 'GitHub Logo';
githubLogo.style.width = '50px'; // Adjust the width of the GitHub logo here
githubLogo.style.height = 'auto'; // Maintain aspect ratio
githubLink.appendChild(githubLogo);
caption.appendChild(githubLink);

carouselItem.appendChild(caption);

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
  notes: "I found this book very insightful. It was a bit heavy at times, but overall I enjoyed it."
},
{
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  rating: 4,
  isbn: "9780062457714",
  notes: "This book was a very easy read and I found it very insightful. I loved the author's sense of humor."
},
{
  title: "Moonwalking with Einstein",
  author: "Joshua Foer",
  rating: 3,
  isbn: "9780143120537",
  notes: "I loved this book. It was a very easy read and I found the author's insights very inspiring."
},
{
  title: "Atomic Habits",
  author: "James Clear",
  rating: 5,
  isbn: "9780735211292",
  notes: "I loved this book. It was a very easy read and I found the author's insights very inspiring."
},
{
  title: "Outliers",
  author: "Malcolm Gladwell",
  rating: 4,
  isbn: "9780141036250",
  notes: "I loved this book. It was a very easy read and I found the author's insights very inspiring."
},
{
  title: "Outlive",
  author: "Peter Attia",
  rating: 5,
  isbn: "9780593236598",
  notes: "I loved this book. It was a very easy read and I found the author's insights very inspiring."
},
{
  title: "Man's Search for Meaning",
  author: "Viktor E. Frankl",
  rating: 4,
  isbn: "9781846041242",
  notes: "I loved this book. It was a very easy read and I found the author's insights very inspiring."
},
{
  title:"Ikigai",
  author: "Héctor García",
  rating: 5,
  isbn: "9780143130727",
  notes: "I loved this book. It was a very easy read and I found the author's insights very inspiring."
}
];
// Function to create a book element
function createBook(data) {
  const book = document.createElement('div');
  book.classList.add('book');
  const url = `url(https://covers.openlibrary.org/b/isbn/`+data.isbn+'-L.jpg)';
  //const link = `https://www.amazon.com/s?k=`+data.isbn;
  book.style.setProperty('--bg-image', `${url}`);

  book.setAttribute('data-toggle', 'modal');
  book.setAttribute('data-target', '#bookModal');

  book.addEventListener('click', () => {
    document.getElementById('bookModalTitle').textContent = data.title;
    document.getElementById('bookModalAuthor').textContent = 'by '+ data.author;
    document.getElementById('bookModalRating').textContent = '';
    for (let i = 0; i < data.rating; i++) {
      document.getElementById('bookModalRating').textContent+='⭐';
    }
    document.getElementById('bookModalNotes').textContent = 'My Notes: '+data.notes;
    document.getElementById('bookModalLink').href = `https://www.amazon.com/s?k=`+data.isbn;
  });
  
  return book;
}

// Function to append books to the bookshelf
function appendBooks() {
  const bookshelf = document.getElementById('bookshelf');
  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books');

  //sort Books by title
  BookList.sort((a, b) => (a.title > b.title) ? 1 : -1);

  BookList.forEach(bookItem => {
    const book = createBook(bookItem);
    booksContainer.appendChild(book);
  });
  
  booksContainer.setAttribute('id', 'style-3');
  bookshelf.appendChild(booksContainer);
}

// Append books when the DOM content is loaded
document.addEventListener('DOMContentLoaded', appendBooks);

