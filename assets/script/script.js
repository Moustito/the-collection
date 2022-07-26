const collection = [
    {
        name: "Good Company",
        releaseDate: "21 juin 2022",
        director: "Chasing Carrots",
        editor: "The Irregular Corporation",
        picture: "assets/image/good-company-cover.jpg",
        genre: ["Multijoueur", "Gestion", "Automatisation", "Simulation"],
        description: "Good Company est un jeu de simulation de gestion approfondi dans lequel vous bâtissez une entreprise technologique innovante. Assemblez des lignes de production complexes, gérez la logistique des effectifs et mettez des produits de qualité sur le marché pour devenir la meilleure entreprise du pays !",
        trailer: "https://www.youtube.com/watch?v=kuBzQyyZsqM"
    },
    {
        name: "Anno 1800",
        releaseDate: "16 avril 2019",
        director: "Ubisoft Blue Byte",
        editor: "Ubisoft",
        picture: "assets/image/anno-1800-cover.jpg",
        genre: ["City-builder", "Stratégie en temps réel", "Gestion"],
        description: ["Bienvenue au 19e siècle. Un siècle d'industrialisation, de démêlés diplomatiques et de découvertes. Riche d'innovations technologiques, de conspirations secrètes et d'allégeances volatiles."],
        trailer: "https://www.youtube.com/watch?v=gMsFL7W-IGA"
    },
    {
        name: "Dark Souls : REMASTERED",
        releaseDate: "24 mai 2018",
        director: "QLOC",
        editor: "FromSoftware",
        picture: "assets/image/dark-souls-remastered-cover.jpg",
        genre: ["Dark Fantasy", "Action RPG", "Difficile", "Sombre"],
        description: ["Au commencement, il y avait l'Âge des Anciens, où les dragons ancestraux régnaient sans conteste dans un monde noyé sous un épais brouillard. Puis vint le Feu, amenant la Disparité. Certains êtres, cachés dans les Ténèbres, y découvrirent un nouveau pouvoir et s’élevèrent contre les dragons."],
        trailer: "https://www.youtube.com/watch?v=qRhb9UduYmw"
    },
    {
        name: "Game Dev Tycoon",
        releaseDate: "29 aout 2013",
        director: "GreenHeart Games",
        editor: "GreenHeart Games",
        picture: "assets/image/game-dev-tycoon-cover.jpg",
        genre: ["Indépendant", "Gestion", "Simulation", "Bac a sable"],
        description: ["Dans ce jeu de simulation de gestion, vous aller lancer votre propre entreprise de jeux vidéo dans les années 80. Créez des jeux nº 1 des ventes, explorez de nouvelles technologies pour dynamiser votre entreprise et inventez de nouveaux types de jeu. Devenez le numéro 1 du marché et faites-vous des fans sur toute la planète."],
        trailer: "https://www.youtube.com/watch?v=mpGO0uKas64"
    },
    {
        name: "Absolver",
        releaseDate: "29 aout 2017",
        director: "Sloclap",
        editor: "Devolver Digital",
        picture: "assets/image/absolver-cover.jpg",
        genre: ["Arts martiaux", "RPG", "Monde ouvert", "Indépendant"],
        description: ["Dans Absolver, un jeu de combat multijoueur en ligne, les Guides confient à chaque joueur un masque d'Aspirant et déterminent s'il est digne de rejoindre leur unité de combattants d'élite vouée à maintenir la stabilité du monde."],
        trailer: "https://www.youtube.com/watch?v=w0eypGqZtEQ"
    },
    {
        name: "ECHO",
        releaseDate: "19 sept. 2017",
        director: "ULTRA ULTRA",
        editor: "ULTRA ULTRA",
        picture: "assets/image/echo-cover.jpeg",
        genre: ["Infiltration", "SF", "Aventure", "Action", "Indépendant"],
        description: ["Après avoir passé un siècle en stase, En rejoint sa destination : un palais de légende. S'appuyant sur des technologies oubliées, En a pour espoir de faire revenir quelqu'un à la vie. Mais rien ne l'avait préparée à ce qu'elle va affronter dans les sombres couloirs dissimulés sous la surface."],
        trailer: "https://www.youtube.com/watch?v=zG5Lh7Uu-EA"
    },
    {
        name: "Civilization VI",
        releaseDate: "21 oct. 2016",
        director: "Firaxis Games",
        editor: "2K",
        picture: "assets/image/civilizationvi-cover.jpg",
        genre: ["4X", "Starégie tour par tour", "Multijoueur", "Historique"],
        description: ["Civilization VI est le dernier épisode de la franchise éponyme, récompensée de nombreuses fois. Repoussez les frontières de votre empire, développez votre patrimoine culturel et affrontez les plus grands seigneurs de l'histoire. Votre civilisation tiendra-t-elle face aux ravages du temps ?"],
        trailer: "https://www.youtube.com/watch?v=5KdE0p2joJw"
    },
    {
        name: "Dishonored",
        releaseDate: "12 oct. 2012",
        director: "Arkane Studios",
        editor: "Bethesda Softworks",
        picture: "assets/image/dishonored-cover.jpg",
        genre: ["Infiltration", "Action", "Assasinat", "Steampunk"],
        description: ["Dishonored est un jeu d'action / infiltration immersif, dans lequel vous incarnez un assassin aux pouvoirs surnaturels poussé par un désir de vengeance. Éliminez vos cibles grâce à un système de combat dynamique permettant de combiner les innombrables pouvoirs surnaturels, armes et gadgets à votre disposition."],
        trailer: "https://www.youtube.com/watch?v=XMCzCvR-O8M"
    },
];

function addItemCollection() {
    let main = document.createElement("main");
    document.querySelector("body").appendChild(main);

    for (let i = 0; i < collection.length; i++) {
        /**Create section */
        let section = document.createElement("section");
        main.appendChild(section);

        /**Create div image */
        let divImg = document.createElement("div");
        let image = document.createElement("img");
        image.src = collection[i].picture;
        section.appendChild(divImg);
        divImg.appendChild(image);
        divImg.classList.add('divImg');
        image.classList.add('divImg__image');

        /**Create article */
        let article = document.createElement("article");
        section.appendChild(article);

        /**Create p genre */
        let divGenre = document.createElement("div");
        article.appendChild(divGenre);
        divGenre.classList.add('genre');

        for (let element of collection[i].genre) {
            let paragraphe = document.createElement("p");
            let paragrapheGenre = document.createTextNode(element);
            divGenre.appendChild(paragraphe);
            paragraphe.appendChild(paragrapheGenre);
        }

        /**Create h2 name */
        var h2 = document.createElement("h2");
        var h2Name = document.createTextNode(collection[i].name);
        article.appendChild(h2);
        h2.appendChild(h2Name);

        /**Create p Director */
        var blockquote = document.createElement("p");
        var blockquoteDirector = document.createTextNode(collection[i].director);
        article.appendChild(blockquote);
        blockquote.appendChild(blockquoteDirector);
        blockquote.classList.add('directorEditor');

        /**Create p Editor */
        var blockquote2 = document.createElement("p");
        var blockquoteEditor = document.createTextNode(collection[i].editor);
        article.appendChild(blockquote2);
        blockquote2.appendChild(blockquoteEditor);
        blockquote2.classList.add('directorEditor');

        /**Create p description */
        var text = document.createElement("p");
        var textDescription = document.createTextNode(collection[i].description);
        article.appendChild(text);
        text.appendChild(textDescription);
        text.classList.add('description');

        /**Create button */
        var footer = document.createElement("footer");
        var link = document.createElement("a");
        var linkImg = document.createElement("img");
        section.appendChild(footer);
        footer.appendChild(link);
        link.appendChild(linkImg);
        link.href = collection[i].trailer;
        linkImg.src = "assets/image/youtube.png";
        link.classList.add('link');
        linkImg.classList.add('link__youtube');
    }

} addItemCollection()
