import { createWelcomeElement } from "./welcomeView.js";
const loadApp = () => {
    document.body.appendChild(createWelcomeElement());
    console.log("app page loaded")
  };
  
  window.addEventListener('load', loadApp);