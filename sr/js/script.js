// Добавим плавное раскрытие details с анимацией (плавное открытие/закрытие)
document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', (e) => {
    if (detail.open) {
      // анимация открытия — например, плавное появление содержимого
      const summary = detail.querySelector('summary');
      const content = Array.from(detail.childNodes).filter(n => n.nodeType === 1 && n.tagName !== 'SUMMARY');
      content.forEach(el => {
        el.style.maxHeight = el.scrollHeight + 'px';
        el.style.transition = 'max-height 0.5s ease';
        el.style.overflow = 'hidden';
      });
    } else {
      // анимация закрытия
      const content = Array.from(detail.childNodes).filter(n => n.nodeType === 1 && n.tagName !== 'SUMMARY');
      content.forEach(el => {
        el.style.maxHeight = '0';
        el.style.transition = 'max-height 0.5s ease';
        el.style.overflow = 'hidden';
      });
    }
  });
});
