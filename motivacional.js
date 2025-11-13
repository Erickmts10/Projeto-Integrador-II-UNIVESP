const depoimentos = document.querySelectorAll('.depoimento');
let index = 0;

function showDepoimento(i) {
  depoimentos.forEach((d, idx) => {
    d.classList.toggle('active', idx === i);
  });
}

setInterval(() => {
  index = (index + 1) % depoimentos.length;
  showDepoimento(index);
}, 5000);

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + depoimentos.length) % depoimentos.length;
  showDepoimento(index);
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % depoimentos.length;
  showDepoimento(index);
});
