document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    // --- 1. Filtro por Plataforma ---
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Estilização do botão ativo
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const platform = card.getAttribute('data-platform');
                if (filterValue === 'all' || platform === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '0'; // Reinicia para animação
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 2. Contador Regressivo ---
    const updateCountdowns = () => {
        const timers = document.querySelectorAll('.countdown');
        
        timers.forEach(timer => {
            const expireDate = new Date(timer.getAttribute('data-expire')).getTime();
            const now = new Date().getTime();
            const distance = expireDate - now;

            if (distance < 0) {
                timer.innerHTML = "EXPIRADO";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        });
    };

    setInterval(updateCountdowns, 1000);
    updateCountdowns();

    // --- 3. Efeito Simple Reveal ---
    cards.forEach((card, index) => {
        card.style.transition = `opacity 0.5s ease ${index * 0.2}s`;
        card.style.opacity = '1';
    });
});