// Definindo um array com as notícias
var noticias = [
    {
        categoria: "Esportes",
        titulo: "Brasil vence a Argentina na final da Copa América",
        texto: "Em uma partida emocionante, a seleção brasileira de futebol conquistou o título da Copa América ao derrotar a Argentina por 2 a 1 no Maracanã. Os gols foram marcados por Neymar e Gabriel Jesus, enquanto Messi descontou para os argentinos.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Neymar_2018.jpg/800px-Neymar_2018.jpg"
    },
    {
        categoria: "Política",
        titulo: "Presidente anuncia novo pacote de medidas econômicas",
        texto: "O presidente da República anunciou hoje um novo pacote de medidas econômicas para enfrentar a crise causada pela pandemia de Covid-19. Entre as medidas estão a prorrogação do auxílio emergencial, a redução de impostos e o aumento do investimento público.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jair_Bolsonaro_em_12_de_novembro_de_2019_%28cropped%29.jpg/800px-Jair_Bolsonaro_em_12_de_novembro_de_2019_%28cropped%29.jpg"
    },
    {
        categoria: "Saúde",
        titulo: "Vacinação contra Covid-19 avança no país",
        texto: "A vacinação contra Covid-19 avança no país, com mais de 100 milhões de doses aplicadas até o momento. Segundo o Ministério da Saúde, cerca de 30% da população já recebeu pelo menos uma dose da vacina, e 15% já está totalmente imunizada.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vacina%C3%A7%C3%A3o_contra_a_Covid-19_no_Brasil_%281%29.jpg/800px-Vacina%C3%A7%C3%A3o_contra_a_Covid-19_no_Brasil_%281%29.jpg"
    },
    {
        categoria: "Educação",
        titulo: "Enem 2023 tem data definida",
        texto: "O Ministério da Educação divulgou hoje a data do Exame Nacional do Ensino Médio (Enem) de 2023. As provas serão realizadas nos dias 5 e 12 de novembro, em todo o território nacional. As inscrições estarão abertas entre 1º e 31 de agosto.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Enem_2019_-_Exame_Nacional_do_Ensino_M%C3%A9dio_%2848948663682%29.jpg/800px-Enem_2019_-_Exame_Nacional_do_Ensino_M%C3%A9dio_%2848948663682%29.jpg"
    }
];

// Definindo uma função para criar os elementos HTML das notícias
function criarNoticia(noticia) {
    // Criando o elemento div que vai conter a notícia
    var divNoticia = document.createElement("div");
    divNoticia.classList.add("noticia");

    // Criando o elemento img que vai conter a imagem da notícia
    var imgNoticia = document.createElement("img");
    imgNoticia.classList.add("imagem-noticia");
    imgNoticia.src = noticia.imagem;

    // Criando o elemento h3 que vai conter o título da notícia
    var h3Noticia = document.createElement("h3");
    h3Noticia.classList.add("titulo-noticia");
    h3Noticia.textContent = noticia.titulo;

    // Criando o elemento p que vai conter o texto da notícia
    var pNoticia = document.createElement("p");
    pNoticia.classList.add("texto-noticia");
    pNoticia.textContent = noticia.texto;

    // Criando o elemento div que vai conter a categoria e o botão de compartilhar da notícia
    var divCategoria = document.createElement("div");
    divCategoria.classList.add("categoria-noticia");
    divCategoria.classList.add(noticia.categoria.toLowerCase());

    // Criando o elemento span que vai conter o nome da categoria da notícia
    var spanCategoria = document.createElement("span");
    spanCategoria.textContent = noticia.categoria;

    // Criando o elemento button que vai conter o botão de compartilhar da notícia
    var buttonCompartilhar = document.createElement("button");
    buttonCompartilhar.classList.add("compartilhar-noticia");

    // Criando o elemento img que vai conter o ícone de compartilhar
    var imgCompartilhar = document.createElement("img");
    imgCompartilhar.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Share_icon.svg/1200px-Share_icon.svg.png";

    // Criando o elemento span que vai conter o texto de compartilhar
    var spanCompartilhar = document.createElement("span");
    spanCompartilhar.textContent = "Compartilhar";

    // Anexando os elementos filhos aos elementos pais
    buttonCompartilhar.appendChild(imgCompartilhar);
    buttonCompartilhar.appendChild(spanCompartilhar);
    divCategoria.appendChild(spanCategoria);
    divCategoria.appendChild(buttonCompartilhar);
    divNoticia.appendChild(imgNoticia);
    divNoticia.appendChild(h3Noticia);
    divNoticia.appendChild(pNoticia);
    divNoticia.appendChild(divCategoria);

    // Retornando o elemento div que contém a notícia
    return divNoticia;
}

// Definindo uma função para exibir as notícias na página
function exibirNoticias(noticias) {
    // Selecionando o elemento div que vai conter as notícias
    var divConteudo = document.querySelector(".conteudo");

    // Removendo os elementos filhos anteriores
    while (divConteudo.firstChild) {
        divConteudo.removeChild(divConteudo.firstChild);
    }

    // Criando e anexando os elementos das notícias
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        var elementoNoticia = criarNoticia(noticia);
        divConteudo.appendChild(elementoNoticia);
    }
}

// Definindo uma função para filtrar as notícias por palavra-chave
function filtrarNoticias(palavra) {
    // Criando um array vazio para armazenar as notícias filtradas
    var noticiasFiltradas = [];

    // Percorrendo o array de notícias e verificando se a palavra-chave está presente no título ou no texto da notícia
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        var titulo = noticia.titulo.toLowerCase();
        var texto = noticia.texto.toLowerCase();
        if (titulo.includes(palavra) || texto.includes(palavra)) {
            // Se a palavra-chave estiver presente, adiciona a notícia ao array de notícias filtradas
            noticiasFiltradas.push(noticia);
        }
    }

    // Retornando o array de notícias filtradas
    return noticiasFiltradas;
}

// Definindo uma função para compartilhar uma notícia em uma rede social
function compartilharNoticia(noticia, rede) {
    // Definindo a URL da rede social de acordo com o parâmetro recebido
    var urlRede;
    switch (rede) {
        case "facebook":
            urlRede = "https://www.facebook.com/sharer/sharer.php?u=";
            break;
        case "twitter":
            urlRede = "https://twitter.com/intent/tweet?text=";
            break;
        case "whatsapp":
            urlRede = "https://api.whatsapp.com/send?text=";
            break;
        default:
            urlRede = "";
            break;
    }

    // Definindo a mensagem que vai ser compartilhada, contendo o título e o texto da notícia
    var mensagem = noticia.titulo + "\n" + noticia.texto;

    // Abrindo uma nova janela com a URL da rede social e a mensagem
    window.open(urlRede + mensagem, "_blank");
}

// Definindo uma função para comentar em uma notícia
function comentarNoticia(noticia, comentario) {
    // Verificando se a notícia tem um array de comentários
    if (!noticia.comentarios) {
        // Se não tiver, cria um array vazio
        noticia.comentarios = [];
    }

    // Adicionando o comentário ao array de comentários da notícia
    noticia.comentarios.push(comentario);

    // Selecionando o elemento div que contém a notícia
    var divNoticia = document.querySelector(".noticia");

    // Criando o elemento div que vai conter os comentários da notícia
    var divComentarios = document.createElement("div");
    divComentarios.classList.add("comentarios-noticia");

    // Criando o elemento h4 que vai conter o título dos comentários
    var h4Comentarios = document.createElement("h4");
    h4Comentarios.textContent = "Comentários";
    }

    // Anexando o elemento