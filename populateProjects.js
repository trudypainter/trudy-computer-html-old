var projects = {
    "items": [
        {
            "title": "REAL TALK RADIO",
            "location": "Poetic Justice Group - MIT Media Lab",
            "year": "2020",
            "description": "Continuous audio stream of intros, outros, skits, and interludes in Black music.",
            "thumbnail-src": "rtr",
            "href-link": "work/rtr.html",
            "tags": [
                "Fullstack",
                "Archive",
                "Research"
            ],
        },

        {
        "title": "SPOTIFY MONSTER",
        "location": "6.08 Embedded Systems Class Final Project",
        "year": "2021",
        "description": "Social network of Spotify Tamagotchi Monsters on Arduino.",
        "thumbnail-src": "spotify",
        "href-link": "work/spotifymonster.html",
        "tags": [
            "School",
            "Arduino",
            "Fullstack"
        ],
        },

        {
            "title": "BREADCRUMB",
            "location": "WebLab",
            "year": "2021",
            "description": "Final project for web design class using React, Node, Express, and MongoDB.",
            "thumbnail-src": "breadcrumb",
            "href-link": "work/breadcrumb.html",
            "tags": [
                "School",
                "React",
                "Fullstack"
            ],
        },

        

        {
            "title": "PERSONAL NARRATIVE PREDICTOR",
            "location": "Laboratory for Social Machines - MIT Media Lab",
            "year": "2020",
            "description": "Designing machine learning models for personal narratives.",
            "thumbnail-src": "mre",
            "href-link": "work/personalnarrative.html",
            "tags": [
                "Machine Learning",
                "Research",
            ],
        },

        {
            "title": "VOLAR",
            "location": "MIT Sloan Startup",
            "year": "2020",
            "description": "Web design and project management lead for creator economy platform.",
            "thumbnail-src": "volar",
            "href-link": "work/volar.html",
            "tags": [
                "Startup",
                "Fullstack"
            ],
        },

        {
            "title": "SPOTIFY MOOD TRACKER",
            "location": "Personal Project",
            "year": "2020",
            "description": "Every single song I've listened to, plotted by mood.",
            "thumbnail-src": "spotifymood",
            "href-link": "work/spotifymood.html",
            "tags": [
                "Personal",
                "Archive",
                "Fullstack"
            ],
        },

        {
            "title": "VSCO ZINE GENERATOR",
            "location": "Personal Project",
            "year": "2020",
            "description": "Generate a printable zine from a VSCO profile.",
            "thumbnail-src": "vsco",
            "href-link": "work/vscozine.html",
            "tags": [
                "Personal",
                "Fullstack"
            ],
        },

        {
            "title": "PARIS FASHION WEEK SS21",
            "location": "Martine Rose",
            "year": "2021",
            "description": "Modelled in virtual show for U.K. menswear brand.",
            "thumbnail-src": "mrss21",
            "href-link": "work/mrss21.html",
            "tags": [
                "Misc"
            ],
        },

        {
            "title": "MEMOIR TITLE TWITTER BOT",
            "location": "Personal Project",
            "year": "2020",
            "description": "Randomly generated memoir titles.",
            "thumbnail-src": "memoirbot",
            "href-link": "https://twitter.com/memoirmaker",
            "tags": [
                "Personal",
                "Fullstack"
            ],
        },

        {
            "title": "POKEMON ARCHIVE",
            "location": "Personal Project",
            "year": "2020",
            "description": "Every single Pokemon card, uploaded to an Are.na channel.",
            "thumbnail-src": "pokemon",
            "href-link": "https://www.are.na/trudy-painter/every-pokemon-card-uz5ifttjceo",
            "tags": [
                "Personal",
                "Archive"
            ],
        },
]};

window.onload = function(){

    var workContainer = document.getElementById("work");
    console.log(workContainer);
    var items = projects.items;
    for(var i = 0; i < items.length; i++) {

        // create work elem container
        var workElem = document.createElement("a");
        workElem.setAttribute("class", "work-container");
        workElem.setAttribute("href", items[i]['href-link']);

        // create thumbnail
        var thumbnail = document.createElement("div");
        thumbnail.setAttribute("class", "work-thumbnail");
        var thumbImg = document.createElement("img");
        thumbImg.setAttribute("class", "work-img")
        thumbImg.setAttribute("src",  "images/thumbnails/" + items[i]["thumbnail-src"] + ".png");
        thumbnail.appendChild(thumbImg);

        // create title
        var title = document.createElement("div");
        title.setAttribute("class", "work-title");
        title.innerHTML = items[i]['title'];
        console.log(title);

        // create subtitle
        var subtitle = document.createElement("div");
        subtitle.setAttribute('class', 'work-location');
        subtitle.innerHTML = items[i]['year'] + ", " + items[i]['location'];

        // create description
        var description = document.createElement("div");
        description.setAttribute("class", "work-description");
        description.innerHTML = items[i]['description'];

        // create tags
        var tagContainer = document.createElement("div");
        tagContainer.setAttribute("class", "work-tags");
        var tagList = items[i]['tags'];
        for (var j = 0; j < tagList.length; j ++) {
            var tagBadge = document.createElement("div");
            tagBadge.setAttribute("class", "tag-badge");
            tagBadge.setAttribute("id", tagList[j].replace(" ", "-"));
            tagBadge.innerHTML = tagList[j];
            tagContainer.appendChild(tagBadge)
        }
        
        // add all elements of the card
        workElem.appendChild(title);
        workElem.appendChild(subtitle);
        workElem.appendChild(description);
        workElem.appendChild(thumbnail);
        workElem.appendChild(tagContainer);

        // add card to container
        workContainer.appendChild(workElem);
        
    }
};