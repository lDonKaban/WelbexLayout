function changeHeight() {
  let letters = document.getElementById("letters");
  let widgets = document.getElementById("widgets");
  let days = document.getElementById("days");
  let cases = document.getElementById("cases");
  if (window.matchMedia("(max-width: 320px)").matches) {
    letters.textContent = "Кейсы";
    widgets.textContent = "30 виджетов";
    days.textContent = "Месяц аmoCRM";
    cases.textContent = "Благодарность клиентов";
  } else {
    letters.textContent = "Благодарственные письма";
    widgets.textContent = "Виджеты";
    days.textContent = "35 дней";
    cases.textContent = "Кейсы";
  }
}
changeHeight();

window.addEventListener("resize", changeHeight);
