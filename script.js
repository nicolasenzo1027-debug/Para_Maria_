document.addEventListener('DOMContentLoaded', () => {
    const btnMaria = document.getElementById('btn-maria');
    const panel1 = document.getElementById('panel1');
    const panel2 = document.getElementById('panel2');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const delayedContent = document.getElementById('delayed-content');
    const btnRed = document.getElementById('btn-red');
    const cotillaText = document.getElementById('cotilla-text');
    const cotillaImg = document.getElementById('cotilla-img');

    btnMaria.addEventListener('click', () => {
        panel1.classList.remove('active');
        panel1.classList.add('hidden');
        
        setTimeout(() => {
            panel2.classList.remove('hidden');
            panel2.classList.add('active');
            
            // Show delayed content after 2 seconds
            setTimeout(() => {
                delayedContent.classList.add('show');
                
                // Desplazar la pantalla hacia abajo automáticamente para revelar la carta
                setTimeout(() => {
                    delayedContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }, 2000);
            
        }, 1000);
    });

    envelopeWrapper.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    btnRed.addEventListener('click', () => {
        cotillaText.classList.toggle('show');
        cotillaImg.classList.toggle('show');
    });
});
