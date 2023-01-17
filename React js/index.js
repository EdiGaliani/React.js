const root = document.querySelector("#root");

const t1 = React.createElement("h1", { id: "Título Principal" }, "Hello World");
const t2 = React.createElement("h3", { id: "Título Secundario" }, "How Are You");

const headLine = React.createElement("div", null, t1, t2);

ReactDOM.render(headLine, root);
