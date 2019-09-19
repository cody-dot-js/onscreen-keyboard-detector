import React from "react";
import "./App.css";
import KeyboardOverlayActiveContext from "./KeyboardOverlayActiveContext";

function App() {
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const isOverlayKeyboardActive = React.useContext(
    KeyboardOverlayActiveContext
  );

  function handleBlur() {
    setIsInputFocused(false);
  }

  function handleFocus() {
    setIsInputFocused(true);
  }

  const isNavigatorMobile = /Mobi/.test(navigator.userAgent);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Is overlay keyboard active? {isOverlayKeyboardActive.toString()}
        </div>
        <div>Is input focused? {isInputFocused.toString()}</div>
        <div>Navigator looks mobile? {isNavigatorMobile.toString()}</div>
        <input type="text" onBlur={handleBlur} onFocus={handleFocus} />
      </header>
    </div>
  );
}

export default App;
