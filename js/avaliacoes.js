    const searchInput = document.getElementById('searchInput');
    const games = document.querySelectorAll('.rt-container');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        games.forEach(game => {
        const name = game.getAttribute('data-name').toLowerCase();
        game.style.display = name.includes(term) ? 'flex' : 'none';
        });
    });

    // 2. Função de Ordenação
    const sortSelect = document.getElementById('sortSelect');
    const grid = document.getElementById('gamesGrid');

    sortSelect.addEventListener('change', (e) => {
        const criteria = e.target.value;
        const gamesArray = Array.from(games);

        if (criteria === 'default') return;

        gamesArray.sort((a, b) => {
        return b.getAttribute(`data-${criteria}`) - a.getAttribute(`data-${criteria}`);
        });

        gamesArray.forEach(game => grid.appendChild(game));
    });

    // 3. Função de Alternar Abas (Consenso vs Reviews)
    function switchTab(btn, type) {
        const container = btn.closest('.rt-info');
        
        // Reset botões
        container.querySelectorAll('.tab-btn').forEach(b => {
        b.style.color = '#b3b3b3';
        b.style.borderBottom = 'none';
        });
        
        // Ativa botão clicado
        btn.style.color = '#6200ea';
        btn.style.borderBottom = '2px solid #6200ea';

        // Alterna Conteúdo
        const consensus = container.querySelector('.consensus-content');
        const reviews = container.querySelector('.reviews-content');

        if (type === 'reviews') {
        consensus.style.display = 'none';
        reviews.style.display = 'block';
        } else {
        consensus.style.display = 'block';
        reviews.style.display = 'none';
        }
    }