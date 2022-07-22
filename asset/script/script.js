const collection = [
    {
        name: "Good Company",
        releaseDate: "21 juin 2022",
        director: "Chasing Carrots",
        editor: "The Irregular Corporation",
        picture: "asset/image/good-company-cover.jpg",
        genre: ["Multijoueur", "Gestion", "Automatisation", "Simulation"],
        description: ["Good Company est un jeu de simulation de gestion approfondi dans lequel vous bâtissez une entreprise technologique innovante. Assemblez des lignes de production complexes, gérez la logistique des effectifs et mettez des produits de qualité sur le marché pour devenir la meilleure entreprise du pays !"],
        trailer: "https://www.youtube.com/watch?v=kuBzQyyZsqM"
    },
    {
        name: "Anno 1800",
        releaseDate: "16 avril 2019",
        director: "Ubisoft Blue Byte",
        editor: "Ubisoft",
        picture: "asset/image/anno-1800-cover.jpg",
        genre: ["City-builder", "Gestion", "Jeu de stratégie en temps réel"],
        description: ["Bienvenue au 19e siècle. Un siècle d'industrialisation, de démêlés diplomatiques et de découvertes. Riche d'innovations technologiques, de conspirations secrètes et d'allégeances volatiles."],
        trailer: "https://www.youtube.com/watch?v=gMsFL7W-IGA"
    },
    {
        name: "Dark Souls : REMASTERED",
        releaseDate: "24 mai 2018",
        director: "QLOC",
        editor: "FromSoftware",
        picture: "asset/image/dark-souls-remastered-cover.jpg",
        genre: ["Dark Fantasy", "Action et RPG", "Difficile", "Sombre"],
        description: ["Au commencement, il y avait l'Âge des Anciens, où les dragons ancestraux régnaient sans conteste dans un monde noyé sous un épais brouillard. Puis vint le Feu, amenant la Disparité. Certains êtres, cachés dans les Ténèbres, y découvrirent un nouveau pouvoir et s’élevèrent contre les dragons."],
        trailer: "https://www.youtube.com/watch?v=qRhb9UduYmw"
    },
    {
        name: "Game Dev Tycoon",
        releaseDate: "29 aout 2013",
        director: "GreenHeart Games",
        editor: "GreenHeart Games",
        picture: "asset/image/game-dev-tycoon-cover.jpg",
        genre: ["Indépendant", "Gestion", "Jeu solo", "Simulation", "Bac a sable"],
        description: ["Dans ce jeu de simulation de gestion, vous aller lancer votre propre entreprise de jeux vidéo dans les années 80. Créez des jeux nº 1 des ventes, explorez de nouvelles technologies pour dynamiser votre entreprise et inventez de nouveaux types de jeu. Devenez le numéro 1 du marché et faites-vous des fans sur toute la planète."],
        trailer: "https://www.youtube.com/watch?v=mpGO0uKas64"
    },
    {
        name: "Absolver",
        releaseDate: "29 aout 2017",
        director: "Sloclap",
        editor: "Devolver Digital",
        picture: "asset/image/absolver-cover.jpg",
        genre: ["Combat", "Arts martiaux", "JcJ", "JcE", "Monde ouvert", "Indépendant", "RPG", "Difficile"],
        description: ["Dans Absolver, un jeu de combat multijoueur en ligne, les Guides confient à chaque joueur un masque d'Aspirant et déterminent s'il est digne de rejoindre leur unité de combattants d'élite vouée à maintenir la stabilité du monde."],
        trailer: "https://www.youtube.com/watch?v=w0eypGqZtEQ"
    },
    {
        name: "ECHO",
        releaseDate: "19 sept. 2017",
        director: "ULTRA ULTRA",
        editor: "ULTRA ULTRA",
        picture: "asset/image/echo-cover.jpg",
        genre: ["Infiltration", "SF", "Aventure", "Action", "Indépendant", "Atmosphère"],
        description: ["Après avoir passé un siècle en stase, En rejoint sa destination : un palais de légende. S'appuyant sur des technologies oubliées, En a pour espoir de faire revenir quelqu'un à la vie. Mais rien ne l'avait préparée à ce qu'elle va affronter dans les sombres couloirs dissimulés sous la surface."],
        trailer: "https://www.youtube.com/watch?v=zG5Lh7Uu-EA"
    },
    {
        name: "Civilization VI",
        releaseDate: "21 oct. 2016",
        director: "Firaxis Games",
        editor: "2K",
        picture: "asset/image/civilizationvi-cover.jpg",
        genre: ["Starégie au tour par tour", "Multijoueur", "Jeu solo", "Historique", "4X"],
        description: ["Civilization VI est le dernier épisode de la franchise éponyme, récompensée de nombreuses fois. Repoussez les frontières de votre empire, développez votre patrimoine culturel et affrontez les plus grands seigneurs de l'histoire. Votre civilisation tiendra-t-elle face aux ravages du temps ?"],
        trailer: "https://www.youtube.com/watch?v=5KdE0p2joJw"
    },
    {
        name: "Dishonored",
        releaseDate: "12 oct. 2012",
        director: "Arkane Studios",
        editor: "Bethesda Softworks",
        picture: "asset/image/dishonored-cover.jpg",
        genre: ["Infiltration", "Action", "Assasinat", "Steampunk", "Jeu solo", "Atmosphère"],
        description: ["Dishonored est un jeu d'action / infiltration immersif, dans lequel vous incarnez un assassin aux pouvoirs surnaturels poussé par un désir de vengeance. Éliminez vos cibles grâce à un système de combat dynamique permettant de combiner les innombrables pouvoirs surnaturels, armes et gadgets à votre disposition."],
        trailer: "https://www.youtube.com/watch?v=XMCzCvR-O8M"
    },
];

function addItemCollection() {
    var section = document.createElement("main");
    document.querySelector("body").appendChild(section);

    for (let i = 0; i < collection.length; i++) {
        /**Create section */
        var section = document.createElement("section");
        document.querySelector("main").appendChild(section);

        /**Create div image */
        var divImg = document.createElement("div");
        var image = document.createElement("img");
        image.src = collection.map(e => `${e.picture}`)[i];
        section.appendChild(divImg);
        divImg.appendChild(image);
        divImg.classList.add('div__image');
        image.classList.add('image');

        /**Create article */
        var article = document.createElement("article");
        section.appendChild(article);

        /**Create p genre */
        var paragraphe = document.createElement("p");
        var paragrapheGenre = document.createTextNode(collection.map(e => `${e.genre}`)[i]);
        article.appendChild(paragraphe);
        paragraphe.appendChild(paragrapheGenre);
        paragraphe.classList.add('genre');

        /**Create h2 name */
        var h2 = document.createElement("h2");
        var h2Name = document.createTextNode(collection.map(e => `${e.name}`)[i]);
        article.appendChild(h2);
        h2.appendChild(h2Name);

        /**Create p Director */
        var blockquote = document.createElement("p");
        var blockquoteDirector = document.createTextNode(collection.map(e => `${e.director}`)[i]);
        article.appendChild(blockquote);
        blockquote.appendChild(blockquoteDirector);
        blockquote.classList.add('directorEditor');
        
        /**Create p Editor */
        var blockquote2 = document.createElement("p");
        var blockquoteEditor = document.createTextNode(collection.map(e => `${e.editor}`)[i]);
        article.appendChild(blockquote2);
        blockquote2.appendChild(blockquoteEditor);
        blockquote2.classList.add('directorEditor');

        /**Create p description */
        var text = document.createElement("p");
        var textDescription = document.createTextNode(collection.map(e => `${e.description}`)[i]);
        article.appendChild(text);
        text.appendChild(textDescription);
        text.classList.add('description');

        /**Create button */
        var link = document.createElement("a");
        var linkImg = document.createElement("img");
        article.appendChild(link);
        link.appendChild(linkImg);
        link.href  = collection.map(e => `${e.trailer}`)[i];
        linkImg.src = "asset/image/youtube.png";
        linkImg.classList.add('link_youtube');
        link.classList.add('link');

    }

} addItemCollection()
    //console.log(collection.map(e => `${e.name}`).join('\n'));
    //collection.map(e => `${e.name} ${e.releaseDate} ${e.director} ${e.editor} ${e.picture} ${e.genre} ${e.description} ${e.trailer}`)

