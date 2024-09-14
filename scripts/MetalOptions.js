export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalHTML = `<ul>`;

  for (const metal of metals) {
    metalHTML += `<div class="choiceOptions"><input type='radio' name='metalRadio'  value="${metal.id}" />${metal.metal} </div>`;
  }

  metalHTML += "</ul>";
  return metalHTML;
};
