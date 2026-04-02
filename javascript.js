const text = ["Web Developer", "Data Analyst", "Student"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("text").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("text").innerHTML = current.substring(0, j--);
    if (j == 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

function copyEmail() {
  navigator.clipboard.writeText("shubhamsanojgupta@gmail.com");
  alert("Email copied!");
}

const toggle = document.getElementById("themeToggle");






type();