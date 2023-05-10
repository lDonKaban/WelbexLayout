function changeHeight() {
  const letters = document.getElementById("letters");
  const widgets = document.getElementById("widgets");
  const days = document.getElementById("days");
  const cases = document.getElementById("cases");
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
