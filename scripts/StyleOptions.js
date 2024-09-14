import { setStyleOption } from "./TransientState.js";

const handleStyleChange = (changeEvent) => {
  if (changeEvent.target.name === "styleRadio") {
    const chosenStyleOption = parseInt(changeEvent.target.value);
    setStyleOption(chosenStyleOption);
  }
};

export const StyleOptions = async () => {
  document.addEventListener("change", handleStyleChange);

  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleHTML = "";

  const divStringArray = styles.map((style) => {
    return `<div class="choiceOptions">
            <input type='radio' name='styleRadio'  value="${style.id}" />${style.style} 
    </div>`;
  });

  styleHTML += divStringArray.join("");
  return styleHTML;
};
