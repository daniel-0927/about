function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

document.getElementById("main").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("show");
});