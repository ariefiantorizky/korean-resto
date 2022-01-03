const nav = () => {
     const navBtn = document.getElementById("nav-btn");
     const navBar = document.getElementById("nav-bar");
     const navIcon = navBtn.querySelector("ion-icon");
     let right = "hide";

     navBtn.addEventListener("click", function () {

          if (right == "hide") {
               navBar.classList.replace("-right-full", "right-0");

               right = "show";
               navIcon.setAttribute("name", "close-outline");
          } else if (right == "show") {
               navBar.classList.replace("right-0", "-right-full");

               right = "hide";
               navIcon.setAttribute("name", "menu-outline");
          }
     });

     console.log("hello world")
};

nav();

export default nav;