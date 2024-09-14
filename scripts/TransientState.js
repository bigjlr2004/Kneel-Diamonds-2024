const transientState = {
  metalOption: 0,
  sizeOption: 0,
  styleOption: 0,
};

export const setMetalOption = (chosenMetalOption) => {
  transientState.metalOption = chosenMetalOption;
  console.log(transientState);
};
export const setStyleOption = (chosenStyleOption) => {
  transientState.styleOption = chosenStyleOption;
  console.log(transientState);
};
export const setSizeOption = (chosenSizeOption) => {
  transientState.sizeOption = chosenSizeOption;
  console.log(transientState);
};

// Post function for converting transient state to permanent state

export const SaveOrderSubmission = async () => {
  // options for a post request
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const repsonse = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newOrder");
  document.dispatchEvent(customEvent);
};
