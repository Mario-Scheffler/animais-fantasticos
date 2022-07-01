import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  // selecionar todos os submenus e por em uma variavel
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  // forEach em cada submenu
  // array criada para passar dois eventos + forEach

  // criar a funcao do handleClick prevenindo o evento do primeiuro LI
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
