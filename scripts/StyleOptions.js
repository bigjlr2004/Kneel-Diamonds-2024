export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleHTML = `<ul>`;

  for (const style of styles) {
    styleHTML += `<div class="choiceOptions"><input type='radio' name='styleRadio'  value="${style.id}" />${style.style} </div>`;
  }

  styleHTML += "</ul>";
  return styleHTML;
};
