function calcular() {
    const monto = parseFloat(document.getElementById('monto').value);
    const interesDiario = parseFloat(document.getElementById('interes').value);
    const agregarImpuesto = document.getElementById('impuesto').checked;

    let total = monto + interesDiario;
    let resultado;

    if (agregarImpuesto) {
        const impuesto = total * 0.0015;
        resultado = total + impuesto;
        document.getElementById('resultado').innerText = `El monto con impuesto del 0.15% es: $${resultado.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    } else {
        resultado = total;
        document.getElementById('resultado').innerText = `El monto es: $${resultado.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
}
