export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let sizeHTML = `<ul>`;

  for (const size of sizes) {
    sizeHTML += `<div class="choiceOptions"><input type='radio' name='sizeRadio'  value="${size.id}" />${size.carets} </div>`;
  }

  sizeHTML += "</ul>";
  return sizeHTML;
};
