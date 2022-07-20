const collection = [
    {
        name: "Good Company",
        releaseDate: "21 juin 2022",
        director: "Chasing Carrots",
        editor: "The Irregular Corporation",
        picture: "link/to/a/picture",
        genre: ["Multijoueur", "Gestion", "Automatisation", "Simulation"],
        description: ["Good Company est un jeu de simulation de gestion approfondi dans lequel vous bâtissez une entreprise technologique innovante. Assemblez des lignes de production complexes, gérez la logistique des effectifs et mettez des produits de qualité sur le marché pour devenir la meilleure entreprise du pays !"],
        trailer: "link/to/a/trailer",
    },
    {
        name: "Anno 1800",
        releaseDate: "16 avril 2019",
        director: "Ubisoft Blue Byte",
        editor: "Ubisoft",
        picture: "link/to/a/picture",
        genre: ["City-builder", "Gestion", "Jeu de stratégie en temps réel"],
        description: ["Bienvenue au 19e siècle. Un siècle d'industrialisation, de démêlés diplomatiques et de découvertes. Riche d'innovations technologiques, de conspirations secrètes et d'allégeances volatiles."],
        trailer: "link/to/a/trailer",
    },
    {
        name: "Dark Souls : REMASTERED",
        releaseDate: "24 mai 2018",
        director: "QLOC",
        editor: "FromSoftware",
        picture: "link/to/a/picture",
        genre: ["Dark Fantasy", "Action et RPG", "Difficile", "Sombre"],
        cast: ["Au commencement, il y avait l'Âge des Anciens, où les dragons ancestraux régnaient sans conteste dans un monde noyé sous un épais brouillard. Puis vint le Feu, amenant la Disparité. Certains êtres, cachés dans les Ténèbres, y découvrirent un nouveau pouvoir et s’élevèrent contre les dragons."],
        trailer: "link/to/a/trailer",
    },
    {
        name: "Game Dev Tycoon",
        releaseDate: "29 aout 2013",
        director: "GreenHeart Games",
        editor: "GreenHeart Games",
        picture: "link/to/a/picture",
        genre: ["Indépendant", "Gestion", "Jeu solo", "Simulation", "Bac a sable"],
        cast: ["Dans ce jeu de simulation de gestion, vous aller lancer votre propre entreprise de jeux vidéo dans les années 80. Créez des jeux nº 1 des ventes, explorez de nouvelles technologies pour dynamiser votre entreprise et inventez de nouveaux types de jeu. Devenez le numéro 1 du marché et faites-vous des fans sur toute la planète."],
        trailer: "link/to/a/trailer",
    },
    {
        name: "Absolver",
        releaseDate: "29 aout 2017",
        director: "Sloclap",
        editor: "Devolver Digital",
        picture: "link/to/a/picture",
        genre: ["Combat", "Arts martiaux", "JcJ", "JcE", "Monde ouvert", "Indépendant", "RPG", "Difficile"],
        cast: ["Dans Absolver, un jeu de combat multijoueur en ligne, les Guides confient à chaque joueur un masque d'Aspirant et déterminent s'il est digne de rejoindre leur unité de combattants d'élite vouée à maintenir la stabilité du monde."],
        trailer: "link/to/a/trailer",
    },
    {
        name: "ECHO",
        releaseDate: "19 sept. 2017",
        director: "ULTRA ULTRA",
        editor: "ULTRA ULTRA",
        picture: "link/to/a/picture",
        genre: ["Infiltration", "SF", "Aventure", "Action", "Indépendant", "Atmosphère"],
        cast: ["Après avoir passé un siècle en stase, En rejoint sa destination : un palais de légende. S'appuyant sur des technologies oubliées, En a pour espoir de faire revenir quelqu'un à la vie. Mais rien ne l'avait préparée à ce qu'elle va affronter dans les sombres couloirs dissimulés sous la surface."],
        trailer: "link/to/a/trailer",
    },
    {
        name: "Civilization VI",
        releaseDate: "21 oct. 2016",
        director: "Firaxis Games",
        editor: "2K",
        picture: "link/to/a/picture",
        genre: ["Starégie au tour par tour", "Multijoueur", "Jeu solo", "Historique", "4X"],
        cast: ["Civilization VI est le dernier épisode de la franchise éponyme, récompensée de nombreuses fois. Repoussez les frontières de votre empire, développez votre patrimoine culturel et affrontez les plus grands seigneurs de l'histoire. Votre civilisation tiendra-t-elle face aux ravages du temps ?"],
        trailer: "link/to/a/trailer",
    },
    {
        name: "Dishonored",
        releaseDate: "12 oct. 2012",
        director: "Arkane Studios",
        editor: "Bethesda Softworks",
        picture: "link/to/a/picture",
        genre: ["Infiltration", "Action", "Assasinat", "Steampunk", "Jeu solo,", "Atmosphère"],
        cast: ["Dishonored est un jeu d'action / infiltration immersif, dans lequel vous incarnez un assassin aux pouvoirs surnaturels poussé par un désir de vengeance. Éliminez vos cibles grâce à un système de combat dynamique permettant de combiner les innombrables pouvoirs surnaturels, armes et gadgets à votre disposition."],
        trailer: "link/to/a/trailer",
    },
];


    document.write("<header>");
    document.write("<div class='header__box'>");
    document.write("<div>");
    document.write("<img src='asset/image/me.jpeg' />");
    document.write("</div>");
    document.write("<article class='header__text'>");
    document.write("<h1> Titouan Moussiaux</h1>")
    document.write("<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo nisl ac pretium molestie. Suspendisse in magna quis est mattis molestie. Ut luctus sed leo vel pulvinar. Fusce pulvinar ipsum vitae dictum aliquam. Nulla facilisi. Nam a augue nec magna tristique cursus. Integer id commodo risus, lobortis rutrum lectus. Maecenas accumsan pretium dui, nec rutrum diam dapibus vel.</p>");
    document.write("</article>");
    document.write("</div");
    document.write("</header>");

    function addItemCollection() {
        for (let i = 0; i < collection.length; i++) {
            var newSection = document.createElement("section");
            var newContent = document.createTextNode(collection[i]);
            newSection.appendChild(newContent);
            document.querySelector("body").appendChild(newSection);

        }
    
    }addItemCollection()
   
