import { SaveOrderSubmission } from "./TransientState.js";

const handleSaveOrderSubmission = (clickEvent) => {
  if (clickEvent.target.id === "saveOrder") {
    SaveOrderSubmission();
  }
};

export const SaveSubmission = () => {
  document.addEventListener("click", handleSaveOrderSubmission);
  return "<button id='saveOrder'>Place Order</button>";
};
