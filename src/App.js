import React from "react";
import Paper from "material-ui/Paper";
import "./App.css";
import Footer from "./components/footer";

const App = props => {
  const styles = {
    width: "97%",
    margin: "auto",
    marginTop: 10,
    marginBottom: "20px",
    textAlign: "center",
    display: "inline-block",
    minHeight: "500px",
    title: {
      cursor: "pointer"
    },
    container: {
      flex: "1 1 100%",
      display: "flex",
      flexDirection: "column"
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{`{} JSON PLACEHOLDER - POSTS`}</h1>
      </header>
      <Paper style={{ ...styles, ...styles.container }}>
        <div>
          {props.children}
          <br />
        </div>
      </Paper>
      <Footer style={{ margin: "40px" }} />
    </div>
  );
};
export default App;
