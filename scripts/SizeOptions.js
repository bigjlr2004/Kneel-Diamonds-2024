import { setSizeOption } from "./TransientState.js";

const handleSizeChange = (changeEvent) => {
  if (changeEvent.target.name === "sizeRadio") {
    const chosenSizeOption = parseInt(changeEvent.target.value);
    setSizeOption(chosenSizeOption);
  }
};
export const SizeOptions = async () => {
  document.addEventListener("change", handleSizeChange);

  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let sizeHTML = ``;

  const divStringArray = sizes.map((size) => {
    return `<div class="choiceOptions">
            <input type='radio' name='sizeRadio'  value="${size.id}" />${size.carets} 
    </div>`;
  });

  sizeHTML += divStringArray.join("");
  return sizeHTML;
};
