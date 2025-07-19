document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const tabs = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      // Снять активность со всех кнопок и табов
      buttons.forEach(btn => btn.classList.remove('active'));
      tabs.forEach(tab => tab.classList.remove('active'));

      // Активировать нажатую кнопку и соответствующий таб
      button.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
});