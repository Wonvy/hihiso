"use strict";
console.log("严格模式:", this === undefined);

let link = document.querySelector(".bootmarks .link");

link.addEventListener("mouseover", (e) => {
  let a = e.target.closest('a');
  let img = document.querySelector(".introduction img");
  let h3 = document.querySelector(".introduction h3");
  let p = document.querySelector(".introduction p");

  if (!a) { return };
  let href = a.dataset.href;
  img.setAttribute("src", `https://s0.wp.com/mshots/v1/${href}`);
  h3.textContent = a.querySelector("p").textContent;
  p.textContent = a.dataset.href;
})

