import React from "react";
import PropTypes from "prop-types";
import KeyboardOverlayActiveContext from "./KeyboardOverlayActiveContext";
import shouldBeMobile from "./shouldBeMobile";
import eventAffectsKeyboardOverlay from "./eventAffectsKeyboardOverlay";

const propTypes = {
  children: PropTypes.node.isRequired
};

function KeyboardOverlayActiveProvider({ children }) {
  const [
    isOnscreenKeyboardVisible,
    setIsOnscreenKeyboardVisible
  ] = React.useState(false);

  const { current: looksLikeMobile } = React.useRef(shouldBeMobile());

  const handleFocus = React.useCallback(event => {
    if (eventAffectsKeyboardOverlay(event)) {
      setIsOnscreenKeyboardVisible(true);
    }
  }, []);

  const handleBlur = React.useCallback(event => {
    if (eventAffectsKeyboardOverlay(event)) {
      setIsOnscreenKeyboardVisible(false);
    }
  }, []);

  return (
    <KeyboardOverlayActiveContext.Provider value={isOnscreenKeyboardVisible}>
      <div
        onFocusCapture={looksLikeMobile ? handleFocus : undefined}
        onBlurCapture={looksLikeMobile ? handleBlur : undefined}
      >
        {children}
      </div>
    </KeyboardOverlayActiveContext.Provider>
  );
}

KeyboardOverlayActiveProvider.propTypes = propTypes;

export default KeyboardOverlayActiveProvider;
