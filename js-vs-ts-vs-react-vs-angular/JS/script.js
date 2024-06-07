const hdt = {
  init: function () {
    const nav_items = document.getElementsByClassName("hdtab_nav_item");
    hdt.setDefault();
    for (let i = 0; i < nav_items.length; i++) {
      nav_items[i].addEventListener("click", hdt.tab);
    }
  },

  tab: function () {
    const id = this.getAttribute("data-id");
    //TAB SELECTED STYLING
    const active_nav = document.getElementsByClassName("hdtab_nav_item_active");
    while (active_nav.length > 0) {
      active_nav[0].classList.remove("hdtab_nav_item_active");
    }
    this.classList.add("hdtab_nav_item_active");
    //CONTENT SELECTED
    hdt.removeAllSelectedContetn();
    hdt.setContent(id);
  },
  setDefault: function () {
    const nav_title = document.getElementsByClassName("hdtab_nav_item");
    nav_title[0].classList.add("hdtab_nav_item_active");
    const descrioption = document.getElementById("hdtab_description");
    descrioption.classList.add("hdtab_content_item_active");
  },
  removeAllSelectedContetn: function () {
    const description = document.getElementById("hdtab_description");
    const ingredients = document.getElementById("hdtab_ingredients");
    const review = document.getElementById("hdtab_review");

    description.classList.remove("hdtab_content_item_active");
    ingredients.classList.remove("hdtab_content_item_active");
    review.classList.remove("hdtab_content_item_active");
  },

  setContent: function (id) {
    const selected = document.getElementById("hdtab_" + id);
    selected.classList.add("hdtab_content_item_active");
  },
};

hdt.init();
