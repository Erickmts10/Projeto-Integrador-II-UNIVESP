const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // para não recarregar a página

  const user = form.querySelector("input[type='text']").value;
  const pass = form.querySelector("input[type='password']").value;

  // apenas simulação de login (depois conectamos a um backend)
  if (user === "admin" && pass === "1234") {
    alert("Login bem-sucedido! 🚀");
    // aqui no futuro se possível: redirecionar para a área interna
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
});
