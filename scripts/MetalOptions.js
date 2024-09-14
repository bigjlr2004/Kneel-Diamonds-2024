import { setMetalOption } from "./TransientState.js";

export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  const handleMetalOptionChange = (changeEvent) => {
    if (changeEvent.target.name === "metalRadio") {
      const chosenMetalOption = parseInt(changeEvent.target.value);
      setMetalOption(chosenMetalOption);
    }
  };

  let metalHTML = "";

  document.addEventListener("change", handleMetalOptionChange);

  const divStringArray = metals.map((metal) => {
    return `<div class="choiceOptions">
            <input type='radio' name='metalRadio'  value="${metal.id}" />${metal.metal}
      </div>`;
  });
  metalHTML += divStringArray.join("");
  return metalHTML;
};
