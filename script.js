const letters = [
  {
    title: "Dear Aaron,",
    body: [
      "Happy 22nd birthday! This little book is made of 22 letters for 22 years of you.",
      "I hope every page reminds you how loved, celebrated, and special you are."
    ]
  },
  {
    title: "Letter 2",
    body: [
      "Replace this with your second letter.",
      "You can make each one sweet, funny, nostalgic, romantic, or anything you want."
    ]
  },
  {
    title: "Letter 3",
    body: ["Write a memory here. Maybe the first time you met, a favorite day, or a moment that always makes you smile."]
  },
  { title: "Letter 4", body: ["Write letter 4 here."] },
  { title: "Letter 5", body: ["Write letter 5 here."] },
  { title: "Letter 6", body: ["Write letter 6 here."] },
  { title: "Letter 7", body: ["Write letter 7 here."] },
  { title: "Letter 8", body: ["Write letter 8 here."] },
  { title: "Letter 9", body: ["Write letter 9 here."] },
  { title: "Letter 10", body: ["Write letter 10 here."] },
  { title: "Letter 11", body: ["Write letter 11 here."] },
  { title: "Letter 12", body: ["Write letter 12 here."] },
  { title: "Letter 13", body: ["Write letter 13 here."] },
  { title: "Letter 14", body: ["Write letter 14 here."] },
  { title: "Letter 15", body: ["Write letter 15 here."] },
  { title: "Letter 16", body: ["Write letter 16 here."] },
  { title: "Letter 17", body: ["Write letter 17 here."] },
  { title: "Letter 18", body: ["Write letter 18 here."] },
  { title: "Letter 19", body: ["Write letter 19 here."] },
  { title: "Letter 20", body: ["Write letter 20 here."] },
  { title: "Letter 21", body: ["Write letter 21 here."] },
  {
    title: "Letter 22",
    body: [
      "The final letter goes here.",
      "End with your birthday message, your favorite promise, or a sweet sign-off. ♡"
    ]
  }
];

let currentPage = 0;

const book = document.getElementById("book");
const pageNumber = document.getElementById("pageNumber");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.getElementById("dots");

function renderDots() {
  dots.innerHTML = "";
  letters.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (index === currentPage ? " active" : "");
    dot.setAttribute("aria-label", `Go to letter ${index + 1}`);
    dot.addEventListener("click", () => goToPage(index));
    dots.appendChild(dot);
  });
}

function renderPage() {
  const letter = letters[currentPage];
  pageNumber.textContent = `Letter ${currentPage + 1} of ${letters.length}`;
  letterTitle.textContent = letter.title;
  letterText.innerHTML = letter.body.map(paragraph => `<p>${paragraph}</p>`).join("");
  prev.disabled = currentPage === 0;
  next.disabled = currentPage === letters.length - 1;
  renderDots();
}

function goToPage(index) {
  if (index < 0 || index >= letters.length || index === currentPage) return;
  currentPage = index;
  book.classList.remove("flipping");
  void book.offsetWidth;
  book.classList.add("flipping");
  renderPage();
}

prev.addEventListener("click", () => goToPage(currentPage - 1));
next.addEventListener("click", () => goToPage(currentPage + 1));

document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") goToPage(currentPage - 1);
  if (event.key === "ArrowRight") goToPage(currentPage + 1);
});

renderPage();
