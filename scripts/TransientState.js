const transientState = {
  metalId: 0,
  sizeId: 0,
  styleId: 0,
};

export const setMetalOption = (chosenMetalOption) => {
  transientState.metalId = chosenMetalOption;
  console.log(transientState);
};
export const setStyleOption = (chosenStyleOption) => {
  transientState.styleId = chosenStyleOption;
  console.log(transientState);
};
export const setSizeOption = (chosenSizeOption) => {
  transientState.sizeId = chosenSizeOption;
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
