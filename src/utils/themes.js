export function setupThemeSwitcher() {
  const themeBtn = document.createElement("button");
  themeBtn.textContent = "Thema wisselen";
  themeBtn.id = "toggle-theme" ; 
  document.querySelector("header").appendChild(themeBtn);

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
}