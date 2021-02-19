import Layout from "./hoc/Layout/Layout";
import "./App.css";
import Quiz from "./containers/Quiz/Quiz";
import Menu from "./containers/Menu/Menu";

function App() {
  return (
    <Layout>
      <Menu></Menu>
      <Quiz></Quiz>
    </Layout>
  );
}

export default App;
