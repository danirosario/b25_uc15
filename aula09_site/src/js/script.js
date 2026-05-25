document.addEventListener("DOMContentLoaded", () => {
    
    const linksContato = document.querySelectorAll('.link-animado');

    const keyframesBalanco = [
        { transform: 'rotate(0deg)' },    // 0%
        { transform: 'rotate(-15deg)' },  // 20%
        { transform: 'rotate(10deg)' },   // 40%
        { transform: 'rotate(-5deg)' },   // 60%
        { transform: 'rotate(3deg)' },    // 80%
        { transform: 'rotate(0deg)' }     // 100%
    ];

    // Configurações da animação (0.4s e efeito suave)
    const opcoesAnimacao = {
        duration: 400, 
        easing: 'ease-in-out'
    };

    // Aplica o evento de passar o mouse (mouseenter) individualmente
    linksContato.forEach(link => {
        link.addEventListener('mouseenter', () => {
            
            // Busca o elemento visual de fato dentro do link atual (seja o <svg> ou a <img>)
            const elementoVisual = link.querySelector('svg, img');
            
            if (elementoVisual) {
                // Garante que o ícone rotacione a partir do próprio centro
                elementoVisual.style.transformOrigin = 'center';
                
                // Dispara o balanço direto no ícone
                elementoVisual.animate(keyframesBalanco, opcoesAnimacao);
            }
        });
    });
    
});