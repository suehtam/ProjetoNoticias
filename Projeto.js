// Definindo um array com as notícias
var noticias = [
    {
        categoria: "Esportes",
        titulo: "Brasil vence a Argentina na final da Copa América",
        texto: "Em uma partida emocionante, a seleção brasileira de futebol conquistou o título da Copa América ao derrotar a Argentina por 2 a 1 no Maracanã. Os gols foram marcados por Neymar e Gabriel Jesus, enquanto Messi descontou para os argentinos.",
        imagem: "https://1.bp.blogspot.com/_C7KRTGyXPEs/TJwQfkzA5LI/AAAAAAAAAwY/4zF3yvYstxs/s1600/Bola+na+rede.jpeg"
    },
    {
        categoria: "Política",
        titulo: "Presidente anuncia novo pacote de medidas econômicas",
        texto: "O presidente da República anunciou hoje um novo pacote de medidas econômicas para enfrentar a crise causada pela pandemia de Covid-19. Entre as medidas estão a prorrogação do auxílio emergencial, a redução de impostos e o aumento do investimento público.",
        imagem: "https://th.bing.com/th/id/R.4f3483102a2d73574595642e72093375?rik=MGIYBFMF0n1I6w&riu=http%3a%2f%2fwww.stw.tur.br%2fturismo%2fimagens%2fbrasilia03.jpg&ehk=S%2bfYmnvwkbhQtRt4mwz8uzUeCzViJHpNfLVcrPXoxQM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        categoria: "Saúde",
        titulo: "Vacinação contra Covid-19 avança no país",
        texto: "A vacinação contra Covid-19 avança no país, com mais de 100 milhões de doses aplicadas até o momento. Segundo o Ministério da Saúde, cerca de 30% da população já recebeu pelo menos uma dose da vacina, e 15% já está totalmente imunizada.",
        imagem: "https://www.abcdaenfermagem.com.br/wp-content/uploads/2021/08/cruz-vermelha-na-enfermagem-150x150.jpeg"
    },
    {
        categoria: "Educação",
        titulo: "Enem 2023 tem data definida",
        texto: "O Ministério da Educação divulgou hoje a data do Exame Nacional do Ensino Médio (Enem) de 2023. As provas serão realizadas nos dias 5 e 12 de novembro, em todo o território nacional. As inscrições estarão abertas entre 1º e 31 de agosto.",
        imagem: "https://th.bing.com/th/id/OIP.18GUfPdQgvVp9g5XV6zw6wAAAA?pid=ImgDet&rs=1"
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

    // Criando o elemento div que vai conter os comentários da notícia
    var divComentarios = document.createElement("div");
    divComentarios.classList.add("comentarios-noticia");
    divComentarios.classList = noticia.comentario;

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

// Anexando o elemento h4 ao elemento div dos comentários
divComentarios.appendChild(h4Comentarios);

// Percorrendo o array de comentários da notícia e criando os elementos p para cada comentário
for (var i = 0; i < noticia.comentarios.length; i++) {
    var comentario = noticia.comentarios[i];
    var pComentario = document.createElement("p");
    pComentario.textContent = comentario;
    // Anexando o elemento p ao elemento div dos comentários
    divComentarios.appendChild(pComentario);
}

// Anexando o elemento div dos comentários ao elemento div da notícia
divNoticia.appendChild(divComentarios);

// Definindo uma função para buscar uma notícia por palavra-chave
function buscarNoticia() {
    // Selecionando o elemento input que contém a palavra-chave digitada pelo usuário
    var inputBusca = document.querySelector(".input-busca");

    // Obtendo o valor da palavra-chave
    var palavra = inputBusca.value.toLowerCase();

    // Verificando se a palavra-chave é válida
    if (palavra) {
        // Se for válida, chama a função de filtrar as notícias por palavra-chave
        var noticiasFiltradas = filtrarNoticias(palavra);
        // Chama a função de exibir as notícias filtradas na página
        exibirNoticias(noticiasFiltradas);
    } else {
        // Se não for válida, mostra um alerta ao usuário
        alert("Digite uma palavra-chave válida.");
    }
}

// Chamando a função de exibir as notícias na página ao carregar o documento
document.addEventListener("DOMContentLoaded", function () {
    exibirNoticias(noticias);
});