let pronombre = ['el', 'futbolista'];
let adjetivo = ['fuerte', 'rápido'];
let sustantivo = ['corredor', 'ganador', 'luchador'];
let extensiones = ['.com', '.net', '.us', '.io', '.org', '.co', '.es'];

function generarNombresDeDominio(pronombre, adjetivo, sustantivo, extensiones) {
  let nombresDeDominio = [];

  for (let a = 0; a < pronombre.length; a++) {
    for (let b = 0; b < adjetivo.length; b++) {
      for (let c = 0; c < sustantivo.length; c++) {
        for (let d = 0; d < extensiones.length; d++) {
          let dominio = pronombre[a] + adjetivo[b] + sustantivo[c] + extensiones[d];
          nombresDeDominio.push(dominio);
        }
      }
    }
  }

  return nombresDeDominio;
}

function mostrarDominios() {
  let dominios = generarNombresDeDominio(pronombre, adjetivo, sustantivo, extensiones);
  let resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = '';
  
  dominios.forEach(dominio => {
    let item = document.createElement('div');
    item.className = 'resultado-item';
    item.textContent = dominio;
    resultadosDiv.appendChild(item);
  });
}
