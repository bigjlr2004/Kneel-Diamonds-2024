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
