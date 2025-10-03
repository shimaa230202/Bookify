document.getElementById("getJoke").addEventListener("click", async () => {
  try {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();
    document.getElementById("jokeText").textContent = data.setup + " - " + data.punchline;
  } catch (error) {
    document.getElementById("jokeText").textContent = "Oops! Something went wrong.";
  }
});
document.getElementById("addItem").addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.querySelectorAll("#itemList li").length + 1);
  document.getElementById("itemList").appendChild(li);
});
document.getElementById("itemList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("output").textContent = "Submitted: " + document.getElementById("myInput").value;
});
document.getElementById("myInput").addEventListener("input", (e) => {
  document.getElementById("output").textContent = "Typing: " + e.target.value;
});
document.getElementById("myInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") alert("You pressed Enter!");
});
window.addEventListener("scroll", () => {
  document.querySelectorAll(".box").forEach((box) => {
    let position = box.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      box.classList.add("show");
    }
  });
});

