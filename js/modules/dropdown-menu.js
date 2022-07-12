import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";

    // define touchstart e click como argumento padrão de events
    // caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown e adiciona
  // a função menu e observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  // adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropdownMenusEvent();

    return this;
  }
}
