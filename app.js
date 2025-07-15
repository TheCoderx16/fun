
const dropdown = document.querySelectorAll(" .dropdown select");
const btn = document.querySelector(".btn"); 
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdown){
    for(currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select. name === "from" && currCode === "USD") {
    newOption. selected = "selected";
    } else if (select.name ==="to" && currCode ==="INR") {
        newOption.selected = "selected";
    }
    select.append(newOption);
    }
 select.addEventListener("change", (evt) =>{
    updateFlag(evt.target);
 })
}
// Update flag for a selected currency
const updateFlag = (element) => {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const img = element.parentElement.querySelector("img");

  if (img && countryCode) {
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
};


btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  const amountInput = document.querySelector(".amount_val");
  let amtVal = parseFloat(amountInput.value);

  if (!amtVal || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const from = fromCurr.value?.toLowerCase();
  const to = toCurr.value?.toLowerCase();

  // ✅ Guard: If from and to are same, skip fetch
  if (from === to) {
    msg.innerText = `${amtVal} ${fromCurr.value} = ${amtVal.toFixed(2)} ${
      toCurr.value
    }`;
    return;
  }

  // ✅ Optional: Validate against known currencies
  if (!countryList[from.toUpperCase()] || !countryList[to.toUpperCase()]) {
    msg.innerText = "Invalid currency selection.";
    return;
  }

const date = new Date();
const year = date.getFullYear();
const month = `0${date.getMonth() + 1}`.slice(-2);
const day = `0${date.getDate()}`.slice(-2);
const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${year}-${month}-${day}/v1/currencies`;
    
  const URL = `${BASE_URL}/${from}/${to}.json`;

  try {
    const response = await fetch(URL);
    console.log(response.json())

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const rate = data[to];

    if (!rate) throw new Error("Missing rate in API response");

    const finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (err) {
    msg.innerText = "Error fetching exchange rate.";
    console.error("Conversion error:", err);
  }
});
