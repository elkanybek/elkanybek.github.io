let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});


document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  const hoverImage = thumbnail.getAttribute("data-hover");
  thumbnail.style.setProperty("--hover-image", `url(${hoverImage})`);

  thumbnail.addEventListener("mouseenter", () => {
    thumbnail.style.backgroundImage = `url(${hoverImage})`;
  });

  thumbnail.addEventListener("mouseleave", () => {
    thumbnail.style.backgroundImage = "none"; 
  });
});


//Typewriter effect
var i = 0;
var wordIndex = 0;
var words = ['Software Engineer Intern', 'Computer Science Student', 'Fortes Spheres', 'AI Tinkerer', 'Data Analyst', 'AI4Good Lab Fellow', 'Content Creator'];
var speed = 45;
var isDeleting = false;

function writeNames() {
  var element = document.getElementById("demo");
  var txt = words[wordIndex];

  if (i < txt.length && !isDeleting) {
    element.innerHTML = txt.substring(0, i + 1) + '<span class="cursor">│</span>';
    i++;
    setTimeout(writeNames, speed);
  } else if (i > 0 && isDeleting) {
    element.innerHTML = txt.substring(0, i - 1) + '<span class="cursor">│</span>';
    i--;
    setTimeout(writeNames, speed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(writeNames, 1000);
  }
}

window.onload = function() {
  setTimeout(writeNames, 2000);
};
