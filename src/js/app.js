// Actualizar timestamp
function updateTimestamp() {
    const now = new Date();
    const timestampElement = document.getElementById('timestamp');
    
    timestampElement.textContent = now.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// Efectos de animación
function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}

// Actualizar estado dinámico (simulación)
function updateDynamicStatus() {
    const statusItems = document.querySelectorAll('.status-item.pending');
    let step = 0;
    
    setInterval(() => {
        statusItems.forEach(item => {
            item.classList.remove('success');
            item.classList.add('pending');
        });
        
        if (step < statusItems.length) {
            statusItems[step].classList.remove('pending');
            statusItems[step].classList.add('success');
            step++;
        } else {
            step = 0;
        }
    }, 3000);
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    updateTimestamp();
    animateCards();
    updateDynamicStatus();
    
    // Actualizar timestamp cada minuto
    setInterval(updateTimestamp, 60000);
});