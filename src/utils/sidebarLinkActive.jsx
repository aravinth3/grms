export const sidebarLinkActive = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const isMobile = width < 427;
  const body = document.querySelector("body");
  if (isMobile && body.classList.contains("toggle-sidebar")) {
    body.classList.remove("toggle-sidebar");
  }
};
