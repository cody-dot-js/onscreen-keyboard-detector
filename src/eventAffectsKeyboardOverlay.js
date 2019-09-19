import overlayInputTypes from "./overlayInputTypes";

export default function eventAffectsKeyboardOverlay(event) {
  const { target } = event;

  if (!target) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  const type = target.type.toLowerCase();

  if (!tagName) {
    return false;
  }

  switch (tagName) {
    case "input": {
      return overlayInputTypes.includes(type);
    }
    case "textarea": {
      return true;
    }
    default: {
      return target.isContentEditable;
    }
  }
}
