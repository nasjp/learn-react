import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const logoOptions = {
    className: "App-logo",
    src: logo
  };
  const alt = "logo";

  const title = "こんにちは React";
  const targets = ["World", "Kanane", "Yukina"];

  return (
    <div className="App">
      <header className="App-header">
        {
          // コメントはこう書く
        }
        <img alt={alt} {...logoOptions} />
        {title && <p>{title}</p>}
        {targets.map(target => (
          <p>Hello, {target}!</p>
        ))}
      </header>
    </div>
  );
};

export default App;
