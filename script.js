document.addEventListener('DOMContentLoaded', () => {
    // Projetos dinâmicos
    const projetos = [
        { titulo: 'God of War Ragnarok', descricao: 'Esta é uma landing page responsiva e visualmente impressionante para o aclamado jogo God of War Ragnarök. Desenvolvida com HTML, CSS e JavaScript, a página apresenta as principais características do jogo, personagens e informações de lançamento de forma envolvente e interativa.', imagem: './assets/god-of-war.png', siteUrl: 'https://guilhermevieira1998.github.io/PROJETO-GOD-OF-WAR/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-GOD-OF-WAR'},
        { titulo: 'Refrigerante do Dev', descricao: 'Este projeto consiste em uma página web interativa e responsiva que apresenta diferentes sabores de refrigerantes, tudo feito com HTML, CSS, e JavaScript. Focando sempre na experiência do usuário, implementei animações suaves e uma interface que se adapta a qualquer dispositivo, seja desktop, tablet ou smartphone.', imagem: './assets/refrigerante-do-dev.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Refrigerante-do-Dev/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Refrigerante-do-Dev'},
        { titulo: 'Linktree', descricao: 'Decidi criar minha própria versão do Linktree para centralizar todos os meus links importantes em um só lugar. É simples, elegante e totalmente customizado para refletir minha identidade profissional.', imagem: './assets/linktree.png', siteUrl: 'https://guilhermevieira1998.github.io/Linktree-Guilherme/', repoUrl: 'https://github.com/guilhermevieira1998/Linktree-Guilherme'},
        { titulo: 'Tesla', descricao: 'Réplica visual da página inicial da Tesla, desenvolvida com HTML, CSS e JavaScript.', imagem: './assets/tesla-img.jpeg', siteUrl: 'https://guilhermevieira1998.github.io/PROJETO-TESLA/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-TESLA'},
        { titulo: 'Microsoft', descricao: 'Réplica do website da Microsoft, demonstrando habilidades em HTML, CSS e Bootstrap.', imagem: './assets/microsoft-img.jpeg', siteUrl: 'https://guilhermevieira1998.github.io/PROJETO-MICROSOFT/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-MICROSOFT' },
        { titulo: 'GTA V', descricao: 'Landing page para GTA V e GTA Online com design moderno e responsivo.', imagem: './assets/GTAV-img.jpeg', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-GTA-V/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-GTA-V' },
    ];

    const projetoContainer = document.getElementById('projeto-container');

    function createProjectCard(projeto) {
        const projetoCard = document.createElement('div');
        projetoCard.classList.add('projeto-card', 'fadeIn');

        projetoCard.innerHTML = `
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            <div class="projeto-info">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="projeto-links">
                    <a href="${projeto.siteUrl}" class="btn btn-site" target="_blank">Ver Site</a>
                    <a href="${projeto.repoUrl}" class="btn btn-repo" target="_blank">Ver Repositório</a>
                </div>
            </div>
        `;

        return projetoCard;
    }

    projetos.forEach(projeto => {
        const projetoCard = createProjectCard(projeto);
        projetoContainer.appendChild(projetoCard);
    });

    // Carrossel automático
    const carousel = document.querySelector('.carousel');
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    let index = 0;

    function updateCarousel() {
        const imageWidth = carousel.offsetWidth;
        carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    function autoCarousel() {
        setInterval(() => {
            index = (index + 1) % totalImages;
            updateCarousel();
        }, 5000); // Muda a cada 5 segundos
    }

    function resizeCarousel() {
        carouselImages.style.width = `${totalImages * 100}%`;
        document.querySelectorAll('.carousel-images img').forEach(img => {
            img.style.width = `${100 / totalImages}%`;
        });
        updateCarousel();
    }

    autoCarousel();
    window.addEventListener('resize', resizeCarousel);
    resizeCarousel(); // Inicializa o carrossel

    // Botão "Ver Mais Projetos"
    const verMaisBtn = document.getElementById('ver-mais-projetos');
    let showingAllProjects = false;

    verMaisBtn.addEventListener('click', () => {
        if (!showingAllProjects) {
            // Adicionar mais projetos aqui
            const moreProjects = [
                { titulo: 'Projeto King Burger', descricao: 'Descrição do projeto extra 1.', imagem: './assets/king-burger-img.jpeg', siteUrl: 'https://guilhermevieira1998.github.io/PROJETO-KING-BURGER/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-KING-BURGER' },
                { titulo: 'Projeto Gerenciador de Tarefas', descricao: 'Descrição do projeto extra 1.', imagem: './assets/projeto-gerenciador-de-tarefas.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Gerenciador-de-Tarefas/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Gerenciador-de-Tarefas' },
                { titulo: 'Projeto Sellection', descricao: 'Descrição do projeto extra 2.', imagem: './assets/sellection-img.jpeg', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Sellection/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Sellection' },
                { titulo: 'Projeto Gerador de QR Code', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-gerador.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Gerador-de-QR-Code/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Gerador-de-QR-Code' },
                { titulo: 'Projeto Mobile', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-mobile.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Mobile/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Mobile' },
                { titulo: 'Projeto Cidades', descricao: 'Descrição do projeto extra 2.', imagem: './assets/cidades-img.jpeg', siteUrl: 'https://guilhermevieira1998.github.io/PROJETO-CIDADES/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-CIDADES' },
                { titulo: 'Projeto Netflix', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-netflix.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Netflix/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Netflix' },
                { titulo: 'Projeto Super Mario', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-mario.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Mario/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Mario' },
                { titulo: 'Projeto Starbucks', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-starbucks.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-StarBucks/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-StarBucks' },
                { titulo: 'Projeto X-men 97', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-xmen97.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Xmen-97/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Xmen-97' },
                { titulo: 'Projeto Apple', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-apple.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Apple/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Apple' },
                { titulo: 'Projeto Confeitaria', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-confeitaria.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Confeitaria/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Confeitaria' },
                { titulo: 'Projeto Livraria', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-livraria.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Livraria/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Livraria' },
                { titulo: 'Projeto Previsão do Tempo', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-previsao-do-tempo.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Previs-o-do-Tempo/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Previs-o-do-Tempo' },
                { titulo: 'Projeto Instagram', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-instagram.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Instagram/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Instagram' },
                { titulo: 'Projeto Formulário', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-formulario.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Formulario/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Formulario' },
                { titulo: 'Projeto Blog', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-blog.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Blog/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Blog' },
                { titulo: 'Projeto Cafeteria', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-cafeteria.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-Cafeteria/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Cafeteria' },
                { titulo: 'Projeto One Piece', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-one-piece.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-One-Piece/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-One-Piece' },
                { titulo: 'Projeto Login', descricao: 'Descrição do projeto extra 2.', imagem: './assets/projeto-login.png', siteUrl: 'https://guilhermevieira1998.github.io/Projeto-login/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-login' },
            ];

            moreProjects.forEach(projeto => {
                const projetoCard = createProjectCard(projeto);
                projetoContainer.appendChild(projetoCard);
            });

            verMaisBtn.textContent = 'Ver Menos';
            showingAllProjects = true;
        } else {
            // Remover os projetos adicionais
            const allProjects = projetoContainer.querySelectorAll('.projeto-card');
            for (let i = 6; i < allProjects.length; i++) {
                allProjects[i].remove();
            }

            verMaisBtn.textContent = 'Ver Mais Projetos';
            showingAllProjects = false;
        }
    });

    // Animação de entrada para elementos
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-card, .projeto-card');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if (rect.top <= viewHeight * 0.75 && rect.bottom >= 0) {
                el.classList.add('fadeIn');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez no carregamento da página

    // Menu hamburguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});