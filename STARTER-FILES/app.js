const rangeSlider = document.querySelector('input[type="range"]');
const amount = document.querySelector(".dollars");

const priceFormatter = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price / 100);

  return formatter;
};

const updateSlider = () => {
  amount.innerHTML = priceFormatter(rangeSlider.value);
};

rangeSlider.addEventListener("input", updateSlider);
