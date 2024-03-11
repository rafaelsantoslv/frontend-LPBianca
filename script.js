document.addEventListener('DOMContentLoaded', function () {
    const declarationsContainer = document.getElementById('declarations-container');
    const playButton = document.getElementById('play-button');
    const backgroundMusic = document.getElementById('background-music');
    const verHistoriaButton = document.getElementById('ver-historia');
    const coverHeart = document.getElementById('cover-heart'); // Renomeado para cover-heart
    const heart = document.getElementById('heart'); // Renomeado para heart
    const photos = document.getElementById('photos');

    // Adicione suas próprias mensagens, textos e URLs de imagem aqui
    const declarations = [
        { title: "Declaração de Amor", message: "Você é a razão do meu sorriso. Minha vida é mais feliz com você ao meu lado.", image: "./public/FOTO1.jpeg" },

        { title: "Momentos Especiais", message: "Cada momento contigo é especial. Juntos, construímos memórias que guardarei para sempre.", image: "./public/FOTO2.jpeg" },

        { title: "Amor Crescente", message: "Te amo mais a cada dia que passa. Nosso amor é como uma chama que nunca se apaga.", image: "./public/FOTO3.jpeg" },

        { title: "Cumplicidade Única", message: "A cumplicidade entre nós é como um segredo precioso. Nos entendemos com um olhar, e cada sorriso compartilhado é uma conexão profunda.", image: "./public/FOTO4.jpeg" },

        { title: "Aventuras a Dois", message: "Cada aventura ao seu lado é uma jornada inesquecível. O mundo é mais vibrante e cheio de possibilidades quando estamos juntos.", image: "./public/FOTO5.jpeg" },

        { title: "Risos Infinitos", message: "Seus risos são a trilha sonora da minha felicidade. Que possamos continuar rindo juntos e enfrentando qualquer desafio que a vida nos apresente.", image: "./public/FOTO7.jpeg" },

        { title: "Promessa de Amor Eterno", message: "Prometo estar ao seu lado em todos os altos e baixos, celebrando as alegrias e enfrentando as tristezas. Nosso amor é eterno.", image: "./public/FOTO6.jpeg" },

        { title: "Sonhos Compartilhados", message: "Cada sonho que compartilhamos se torna mais real. Juntos, somos capazes de alcançar as estrelas e construir um futuro brilhante.", image: "./public/FOTO8.jpeg" },

        { title: "Abraços que Curam", message: "Seus abraços têm o poder de curar qualquer ferida. O calor do seu abraço é meu refúgio e minha fonte de conforto.", image: "./public/FOTO9.jpeg" },


    ];

    // Itera sobre as declarações e as exibe na página
    declarations.forEach(declaration => {
        const declarationElement = document.createElement('div');
        declarationElement.classList.add('declaration');

        const titleElement = document.createElement('h2');
        titleElement.textContent = declaration.title;

        const messageElement = document.createElement('p');
        messageElement.textContent = declaration.message;

        const imageElement = document.createElement('img');
        imageElement.src = declaration.image;
        imageElement.alt = 'Imagem do casal';

        declarationElement.appendChild(titleElement);
        declarationElement.appendChild(messageElement);
        declarationElement.appendChild(imageElement);

        declarationsContainer.appendChild(declarationElement);
    });

    // playButton.addEventListener('click', function () {
    //     backgroundMusic.play();
    //     // Oculta o botão após a reprodução para evitar iniciar a música várias vezes
    //     playButton.style.display = 'none';
    // });

    verHistoriaButton.addEventListener('click', function () {
        coverHeart.style.display = 'none'; // Esconde a cobertura
        heart.style.opacity = '1'; // Torna o coração visível
        backgroundMusic.play();
        // playButton.style.display = 'none';
    });
});
