export const scrollToForm = () => {
  const element = document.querySelector('#form');
  const header = document.querySelector('#header-comp');

  if (!(element && header)) return;

  const y = element.getBoundingClientRect()?.top + window.scrollY - header.clientHeight;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
};
