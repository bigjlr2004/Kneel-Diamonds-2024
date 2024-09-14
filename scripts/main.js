import { MetalOptions } from "./MetalOptions.js";
import { Orders } from "./Orders.js";
import { SaveSubmission } from "./SaveOrder.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const styleOptionsHTML = await StyleOptions();
  const sizeOptionsHTML = await SizeOptions();
  const saveOrder = await SaveSubmission();
  const OrdersList = await Orders();

  const container = document.querySelector("#main");

  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
               ${saveOrder}

        </article>

        <article class="customOrders options">
            <h2>Custom Jewelry Orders</h2>
            <div>
                ${OrdersList}
            </div>

        </article>`;
  container.innerHTML = composedHTML;
};

render();

document.addEventListener("newOrder", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  render();
});
