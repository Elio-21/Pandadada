// Inicializa el oro acumulado
let gold = parseFloat(localStorage.getItem('gold')) || 0;
let goldPerSecond = parseFloat(localStorage.getItem('goldPerSecond')) || 0.002;

// Función para recolectar oro
function collectGold() {
    const increment = Math.random() * (0.003 - 0.001) + 0.001;
    gold += increment;
    document.getElementById('gold').innerText = gold.toFixed(8);

    // Guardar el oro acumulado en el almacenamiento local
    localStorage.setItem('gold', gold);
    localStorage.setItem('goldPerSecond', goldPerSecond);
}

// Cargar oro en el contador al iniciar
function loadGold() {
    document.getElementById('gold').innerText = gold.toFixed(7);
}

// Llama a esta función para iniciar el juego
function initializeGame() {
    loadGold();
}

// Llama a initializeGame() al cargar el documento
document.addEventListener('DOMContentLoaded', initializeGame);