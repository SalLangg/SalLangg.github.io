const tabs = document.querySelectorAll('.nav-tabs a');
const sections = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    // Убираем активность у всех
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active-tab'));

    // Активируем нужную вкладку
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.tab);
    if (target) target.classList.add('active-tab');
  });
});
