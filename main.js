import "./dist/js/components/loading.js";
import nav from "./dist/js/navigation-btn.js";


window.addEventListener("load", () => {

     setInterval(() => {

          document.body.classList.remove("load");
          document.querySelector("load-content").style.display = "none";

     }, 1500);

})