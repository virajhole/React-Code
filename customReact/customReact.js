function customRender(reactElement, constainer) {
//   const domElement = document.createElement(reactElement.type);

//   domElement.innerHTML = reactElement.children;

//   domElement.setAttribute("href", reactElement.props.herf);
//   domElement.setAttribute("target", reactElement.props.target);

//   constainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    herf: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
