/* ==========================================
   PARTE 1: ANIMAÇÃO DE SCROLL (APARECER)
   ========================================== */
document.addEventListener("DOMContentLoaded", function() {
    const elementosAnimar = document.querySelectorAll('.animar');

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas, observador) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visivel');
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.1 });

        elementosAnimar.forEach(el => {
            observador.observe(el);
        });
    } else {
        // Fallback para navegadores antigos
        elementosAnimar.forEach(el => {
            el.classList.add('visivel');
        });
    }
});

/* ==========================================
   PARTE 2: LÓGICA DO BOTÃO "SAIBA MAIS"
   ========================================== */
// Esta função precisa ficar FORA do 'DOMContentLoaded' para ser acessível pelo HTML
function toggleCard(button) {
    // 1. Encontra o cartão pai do botão clicado
    const card = button.closest('.material-card');
    
    // 2. Encontra a div de expansão dentro desse cartão
    const expansion = card.querySelector('.card-expansion');
    
    // 3. Alterna a classe 'active' (que expande a altura no CSS)
    expansion.classList.toggle('active');
    
    // 4. Troca o texto do botão
    if (expansion.classList.contains('active')) {
        button.innerText = "Fechar";
        // Opcional: Adiciona uma classe ao botão se quiser mudar a cor quando aberto
    } else {
        button.innerText = "Saiba mais";
    }
}