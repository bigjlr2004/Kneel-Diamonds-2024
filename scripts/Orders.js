export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size"
  );
  const orders = await fetchResponse.json();

  let ordersHTML = orders.map((order) => {
    if (order.style) {
      return `<div class="choiceOptions" id="${order.id}"> Order # ${
        order.id
      } cost $ 
          ${order.metal.price + order.style.price + order.size.price}
          </div>`;
    }
  });

  return ordersHTML.join("");
};
