import "./styles.scss"

const queryInput = document.querySelector(".form__input");

window.apiData=function(data) {
  let cityArr = data.result;
  let cities = "";
  cityArr.map(function (city) {
     cities += `<option>${city.name}</option>`;
  });
  queryInput.innerHTML = `<datalist class="form__input-data" id="city-list">${cities}</datalist>`;
}


queryInput.addEventListener("input", (e) => {
  const query = e.target.value;
  const src = `https://kladr-api.ru/api.php?contentType=city&limit=5&query=${query}&callback=apiData`;
  document.body.append(
    Object.assign(document.createElement("script"), {
      src
    })
  );
});

