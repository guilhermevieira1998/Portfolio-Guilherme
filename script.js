document.addEventListener('DOMContentLoaded', () => {
    
    const projetos = [
        { titulo: 'God of War Ragnarok', descricao: 'Esta é uma landing page responsiva e visualmente impressionante para o aclamado jogo God of War Ragnarök. Desenvolvida com HTML, CSS e JavaScript, a página apresenta as principais características do jogo, personagens e informações de lançamento de forma envolvente e interativa.', imagem: './assets/god-of-war.png', siteUrl: 'https://projeto-god-of-war-tan.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-GOD-OF-WAR'},
        { titulo: 'Refrigerante do Dev', descricao: 'Este projeto consiste em uma página web interativa e responsiva que apresenta diferentes sabores de refrigerantes, tudo feito com HTML, CSS, e JavaScript. Focando sempre na experiência do usuário, implementei animações suaves e uma interface que se adapta a qualquer dispositivo, seja desktop, tablet ou smartphone.', imagem: './assets/refrigerante-do-dev.png', siteUrl: 'https://projeto-refrigerante-do-dev.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Refrigerante-do-Dev'},
        { titulo: 'Tesla', descricao: 'Réplica visual da página inicial da Tesla, desenvolvida com HTML, CSS e JavaScript.', imagem: './assets/tesla-img.jpeg', siteUrl: 'https://projeto-tesla-mu.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-TESLA'},
        { titulo: 'Microsoft', descricao: 'Réplica do website da Microsoft, demonstrando habilidades em HTML, CSS e Bootstrap.', imagem: './assets/microsoft-img.jpeg', siteUrl: 'https://projeto-microsoft-seven.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-MICROSOFT' },
        { titulo: 'GTA V', descricao: 'Landing page para GTA V e GTA Online com design moderno e responsivo.', imagem: './assets/GTAV-img.jpeg', siteUrl: 'https://projeto-gta-v-phi.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-GTA-V' },
        { titulo: 'Projeto King Burger', descricao: 'Este projeto me permitiu aprofundar meus conhecimentos em JavaScript moderno, manipulação do DOM e criação de interfaces responsivas. Além disso, pude praticar a integração com APIs externas (WhatsApp) e o uso de localStorage para melhorar a experiência do usuário.', imagem: './assets/king-burger-img.jpeg', siteUrl: 'https://projeto-king-burger-apfq.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-KING-BURGER' },
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
        }, 5000); 
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
    resizeCarousel(); 

    
    const verMaisBtn = document.getElementById('ver-mais-projetos');
    let showingAllProjects = false;

    verMaisBtn.addEventListener('click', () => {
        if (!showingAllProjects) {
            
            const moreProjects = [
                { titulo: 'Projeto Gerenciador de Tarefas', descricao: 'Estou entusiasmado em compartilhar um projeto recente que concluí: um Gerenciador de Tarefas desenvolvido com HTML, CSS e JavaScript. Este projeto foi desenhado com foco na usabilidade e na acessibilidade, garantindo uma experiência de usuário fluida e eficiente em qualquer dispositivo, seja ele um desktop, tablet ou smartphone.', imagem: './assets/projeto-gerenciador-de-tarefas.png', siteUrl: 'https://projeto-gerenciador-de-tarefas.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Gerenciador-de-Tarefas' },
                { titulo: 'Projeto Sellection', descricao: 'Desenvolvido como uma landing page de uma concessionária de automóveis de carros de luxo, aonde o usuário pode pesquisar informações do veículo, contato da empresa e consultar outros carros que estão a disposição.', imagem: './assets/sellection-img.jpeg', siteUrl: 'https://projeto-sellection.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Sellection' },
                { titulo: 'Projeto Gerador de QR Code', descricao: 'Desenvolvido como um gerador de QR Code no qual o usuário pode utilizar um texto ou URL para criar o seu próprio código e enviar para outra pessoa, para ela ter todo o acesso e a experiência no conteúdo disponibilizado.', imagem: './assets/projeto-gerador.png', siteUrl: 'https://projeto-gerador-de-qr-code-two.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Gerador-de-QR-Code' },
                { titulo: 'Projeto Mobile', descricao: 'Projeto desenvolvido como uma landing page na qual o usuário pode utilizar em modelo desktop e mobile.', imagem: './assets/projeto-mobile.png', siteUrl: 'https://projeto-mobile-omega.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Mobile' },
                { titulo: 'Projeto Cidades', descricao: 'Projeto desenvolvido com uma apresentação e um breve texto sobre algumas cidades, na qual o usuário poderá acessar para buscar pontos turísticos, restaurantes, pontos históricos e etc.', imagem: './assets/cidades-img.jpeg', siteUrl: 'https://projeto-cidades-eta.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/PROJETO-CIDADES' },
                { titulo: 'Projeto Netflix', descricao: 'Desenvolvido como uma réplica de uma das maiores empresas de streaming do mundo.', imagem: './assets/projeto-netflix.png', siteUrl: 'https://projeto-netflix-kohl.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Netflix' },
                { titulo: 'Projeto Super Mario', descricao: 'Projeto desenvolvido como uma página de serviços de encanadores na qual o o cliente informa seus dados e informa qual o serviço que deseja.', imagem: './assets/projeto-mario.png', siteUrl: 'https://projeto-mario-peach.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Mario' },
                { titulo: 'Projeto Starbucks', descricao: 'Projeto desenvolvido como uma demonstração dos modelos de produtos da marca Starbucks.', imagem: './assets/projeto-starbucks.png', siteUrl: 'https://projeto-star-bucks-lemon.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-StarBucks' },
                { titulo: 'Projeto X-men 97', descricao: 'Projeto desenvolvido como uma seleção de personagens descrevendo uma característica de cada um deles.', imagem: './assets/projeto-xmen97.png', siteUrl: 'https://projeto-xmen-97.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Xmen-97' },
                { titulo: 'Projeto Apple', descricao: 'Um projeto no qual o usuário poderá visualizar as cores disponíveis do incrível Iphone 14. ', imagem: './assets/projeto-apple.png', siteUrl: 'https://projeto-apple-alpha.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Apple' },
                { titulo: 'Projeto Confeitaria', descricao: 'Projeto desenvolvido como uma landing page de uma confeitaria fictícia (Spazio Vieira) na qual o cliente pode efetuar seu pedido, conhecer a empresa e seus serviços.', imagem: './assets/projeto-confeitaria.png', siteUrl: 'https://projeto-confeitaria-blue.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Confeitaria' },
                { titulo: 'Projeto Livraria', descricao: 'Uma landing page de uma livraria desenvolvida com HTML e CSS.', imagem: './assets/projeto-livraria.png', siteUrl: 'https://projeto-livraria-gamma.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Livraria' },
                { titulo: 'Projeto Previsão do Tempo', descricao: 'Projeto desenvolvido como um aplicativo de previsão do tempo.', imagem: './assets/projeto-previsao-do-tempo.png', siteUrl: 'https://projeto-previs-o-do-tempo.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Previs-o-do-Tempo' },
                { titulo: 'Projeto Instagram', descricao: 'Projeto desenvolvido como um clone da página de login do Instagram, uma das redes sociais mais utilizadas no mundo de propriedade da Meta Platforms.', imagem: './assets/projeto-instagram.png', siteUrl: 'https://projeto-instagram-dun.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Instagram' },
                { titulo: 'Projeto Formulário', descricao: 'Projeto desenvolvido como um formulário para vendas de veículos', imagem: './assets/projeto-formulario.png', siteUrl: 'https://projeto-formulario-alpha.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Formulario' },
                { titulo: 'Projeto Blog', descricao: 'Projeto desenvolvido como um blog no qual o usuário pode compartilhar suas experiências e fotos.', imagem: './assets/projeto-blog.png', siteUrl: 'https://projeto-blog-gamma.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Blog' },
                { titulo: 'Projeto Cafeteria', descricao: 'Projeto desenvolvido como uma empresa de vendas de café expresso', imagem: './assets/projeto-cafeteria.png', siteUrl: 'https://projeto-cafeteria-two.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-Cafeteria' },
                { titulo: 'Projeto One Piece', descricao: 'Projeto desenvolvido como uma página de seleção de personagens, cada um contando uma breve história de cada personagem. ', imagem: './assets/projeto-one-piece.png', siteUrl: 'https://projeto-one-piece-fawn.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-One-Piece' },
                { titulo: 'Projeto Login', descricao: 'Projeto desenvolvido como uma página de login interativa.', imagem: './assets/projeto-login.png', siteUrl: 'https://projeto-login-kappa-two.vercel.app/', repoUrl: 'https://github.com/guilhermevieira1998/Projeto-login' },
            ];

            moreProjects.forEach(projeto => {
                const projetoCard = createProjectCard(projeto);
                projetoContainer.appendChild(projetoCard);
            });

            verMaisBtn.textContent = 'Ver Menos';
            showingAllProjects = true;
        } else {
            
            const allProjects = projetoContainer.querySelectorAll('.projeto-card');
            for (let i = 6; i < allProjects.length; i++) {
                allProjects[i].remove();
            }

            verMaisBtn.textContent = 'Ver Mais Projetos';
            showingAllProjects = false;
        }
    });

    
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
    animateOnScroll(); 

    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});