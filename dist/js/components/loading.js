class LoadContent extends HTMLElement {
     constructor() {
          super();
          this.shadow = this.attachShadow({
               mode: "open"
          });
     }

     connectedCallback() {
          this.render();
     }

     render() {
          this.shadow.innerHTML = `

               <style>
                    svg {
                         position: relative;
                         width: 70px;
                         height: 70px;
                         animation: rotate 1s linear infinite;
                    }

                    svg circle {
                         width: 100%;
                         height: 100%;
                         fill: none;
                         stroke-width: 3;
                         stroke: white;
                         stroke-linecap: round;
                         stroke-dasharray: 15;
                         stroke-dashoffset: 0;
                         transform: translate(5px, 5px);
                    }

                    @keyframes rotate {
                         0% {
                              transform: rotate(0deg);
                         }

                         100% {
                              transform: rotate(360deg);
                         }
                    }
               </style>


               <svg>
                    <circle cx="30" cy="30" r="25"></circle>
               </svg>
          `
     }
}


customElements.define("load-content", LoadContent);