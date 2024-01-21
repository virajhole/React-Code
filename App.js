const heading = React.createElement("h1", {}, "Namaste React !");
const heading2 = React.createElement("h2", { id: "title" }, "Heading2  !");
const constainer = React.createElement("h1", { id: "container" }, [
  heading,
  heading2,
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(constainer);
