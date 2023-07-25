// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    var imgContainer = document.getElementById("img01-container");
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
    }
    var img = document.createElement('img');
    img.src = element.src;
    img.id = "img01";
    img.alt = element.alt;
    img.style.display = "block";
    img.style.margin = "auto";
    img.style.width = "74%";
    imgContainer.appendChild(img);
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Funzione per gestire l'evento di passaggio del mouse
function handleMouseOver(event, item) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = item.datum.tooltip;
    tooltip.style.top = event.clientY + 'px';
    tooltip.style.left = event.clientX + 'px';
    tooltip.style.display = 'block';
}

function handleMouseOut() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

// Ottenere i riferimenti ai pulsanti e al contenitore del grafico - sentiment
const graphicsContainerSentiment = document.getElementById('graphics-container-sentiment');
const graphics1BtnSentiment = document.getElementById('graphics1-btn-sentiment');
const graphics2BtnSentiment = document.getElementById('graphics2-btn-sentiment');
const graphics3BtnSentiment = document.getElementById('graphics3-btn-sentiment');

// chartSentimentING_reddit - default
const defaultSentiment = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "axis": {"grid": false},
    "legend": {"orient": "top"}
    },
        "data": {"name": "data-800eee6c893eaac0f5534d5c99f91252"},
        "mark": {"type": "line", "opacity": 0.1},
        "encoding": {
        "color": {
            "field": "sentiment_complete",
                "legend": {"orient": "right"},
            "scale": {
                "domain": ["Positivo", "Negativo", "Neutrale"],
                    "range": ["#ADFC92", "#F44E3F", "#788BFF"]
            },
            "title": "Sentimento registrato",
                "type": "nominal"
        },
        "opacity": {"value": 0.9},
        "x": {
            "axis": {"format": "%B %Y", "tickCount": 12, "title": "Periodo"},
            "field": "Comment date",
                "type": "temporal"
        },
        "y": {
            "axis": {"title": "Numero di commenti"},
            "field": "Value",
                "type": "quantitative"
        }
    },
        "height": 600,
        "title": {
        "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
            "subtitle": "Visualizzazione dei valori relativi al dataset di commenti"
    },
        "width": 800,
        "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
        "datasets": {
        "data-800eee6c893eaac0f5534d5c99f91252": [
            {
                "Comment date": "April 2023",
                "sentiment_complete": "Negativo",
                "Value": 4717
            },
            {
                "Comment date": "May 2023",
                "sentiment_complete": "Negativo",
                "Value": 9471
            },
            {
                "Comment date": "June 2023",
                "sentiment_complete": "Negativo",
                "Value": 2339
            },
            {
                "Comment date": "April 2023",
                "sentiment_complete": "Neutrale",
                "Value": 5138
            },
            {
                "Comment date": "May 2023",
                "sentiment_complete": "Neutrale",
                "Value": 10454
            },
            {
                "Comment date": "June 2023",
                "sentiment_complete": "Neutrale",
                "Value": 3002
            },
            {
                "Comment date": "April 2023",
                "sentiment_complete": "Positivo",
                "Value": 9626
            },
            {
                "Comment date": "May 2023",
                "sentiment_complete": "Positivo",
                "Value": 18334
            },
            {
                "Comment date": "June 2023",
                "sentiment_complete": "Positivo",
                "Value": 4897
            }
        ]
    }
};
const defaultEmbedOptionsSentiment = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#graphics-container-sentiment', defaultSentiment, defaultEmbedOptionsSentiment).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});

document.addEventListener('DOMContentLoaded', function() {
    // Funzioni di gestione degli eventi per i pulsanti
    graphics1BtnSentiment.addEventListener('click', function() {
        graphics2BtnSentiment.classList.remove('buttonActive');
        graphics1BtnSentiment.classList.add('buttonActive');
        graphics3BtnSentiment.classList.remove('buttonActive');
        // Crea il grafico Vega-Lite direttamente nel tuo script JavaScript
        // chartSentimentING_reddit
        const spec = {
            "config": {
                "view": {"continuousWidth": 300, "continuousHeight": 300},
                "axis": {"grid": false},
                "legend": {"orient": "top"}
            },
            "data": {"name": "data-800eee6c893eaac0f5534d5c99f91252"},
            "mark": {"type": "line", "opacity": 0.1},
            "encoding": {
                "color": {
                    "field": "sentiment_complete",
                    "legend": {"orient": "right"},
                    "scale": {
                        "domain": ["Positivo", "Negativo", "Neutrale"],
                        "range": ["#ADFC92", "#F44E3F", "#788BFF"]
                    },
                    "title": "Sentimento registrato",
                    "type": "nominal"
                },
                "opacity": {"value": 0.9},
                "x": {
                    "axis": {"format": "%B %Y", "tickCount": 12, "title": "Periodo"},
                    "field": "Comment date",
                    "type": "temporal"
                },
                "y": {
                    "axis": {"title": "Numero di commenti"},
                    "field": "Value",
                    "type": "quantitative"
                }
            },
            "height": 600,
            "title": {
                "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
                "subtitle": "Visualizzazione dei valori relativi al dataset di commenti"
            },
            "width": 800,
            "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
            "datasets": {
                "data-800eee6c893eaac0f5534d5c99f91252": [
                    {
                        "Comment date": "April 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 4717
                    },
                    {
                        "Comment date": "May 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 9471
                    },
                    {
                        "Comment date": "June 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 2339
                    },
                    {
                        "Comment date": "April 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 5138
                    },
                    {
                        "Comment date": "May 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 10454
                    },
                    {
                        "Comment date": "June 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 3002
                    },
                    {
                        "Comment date": "April 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 9626
                    },
                    {
                        "Comment date": "May 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 18334
                    },
                    {
                        "Comment date": "June 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 4897
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsSentiment = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-sentiment', spec, embedOptionsSentiment).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics2BtnSentiment.addEventListener('click', function() {
        graphics2BtnSentiment.classList.add('buttonActive');
        graphics1BtnSentiment.classList.remove('buttonActive');
        graphics3BtnSentiment.classList.remove('buttonActive');
        // chartITsentiment
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axis": {"grid": false},
            "legend": {"orient": "top"}
            },
                "data": {"name": "data-b2efc7f4f33c8856302f0d7c551f7508"},
                "mark": {"type": "line", "opacity": 0.1},
                "encoding": {
                "color": {
                    "field": "Sentimento",
                        "legend": {"orient": "right"},
                    "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.9},
                "x": {
                    "axis": {"format": "%B %Y", "tickCount": 12, "title": "Periodo"},
                    "field": "date",
                        "type": "temporal"
                },
                "y": {
                    "axis": {"title": "Numero di tweets"},
                    "field": "Value",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "title": {
                "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
                    "subtitle": "Visualizzazione dei valori relativi al dataset di tweets italiani"
            },
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-b2efc7f4f33c8856302f0d7c551f7508": [
                    {"date": "September 2022", "Sentimento": "Negativo", "Value": 2},
                    {"date": "October 2022", "Sentimento": "Negativo", "Value": 1},
                    {"date": "November 2022", "Sentimento": "Negativo", "Value": 6},
                    {"date": "December 2022", "Sentimento": "Negativo", "Value": 89},
                    {"date": "January 2023", "Sentimento": "Negativo", "Value": 311},
                    {"date": "February 2023", "Sentimento": "Negativo", "Value": 198},
                    {"date": "March 2023", "Sentimento": "Negativo", "Value": 475},
                    {"date": "April 2023", "Sentimento": "Negativo", "Value": 21},
                    {"date": "May 2023", "Sentimento": "Negativo", "Value": 32},
                    {"date": "June 2023", "Sentimento": "Negativo", "Value": 25},
                    {"date": "September 2022", "Sentimento": "Neutrale", "Value": 39},
                    {"date": "October 2022", "Sentimento": "Neutrale", "Value": 29},
                    {"date": "November 2022", "Sentimento": "Neutrale", "Value": 29},
                    {"date": "December 2022", "Sentimento": "Neutrale", "Value": 1049},
                    {"date": "January 2023", "Sentimento": "Neutrale", "Value": 5222},
                    {"date": "February 2023", "Sentimento": "Neutrale", "Value": 3050},
                    {"date": "March 2023", "Sentimento": "Neutrale", "Value": 6207},
                    {"date": "April 2023", "Sentimento": "Neutrale", "Value": 437},
                    {"date": "May 2023", "Sentimento": "Neutrale", "Value": 450},
                    {"date": "June 2023", "Sentimento": "Neutrale", "Value": 387},
                    {"date": "September 2022", "Sentimento": "Positivo", "Value": 9},
                    {"date": "October 2022", "Sentimento": "Positivo", "Value": 5},
                    {"date": "November 2022", "Sentimento": "Positivo", "Value": null},
                    {"date": "December 2022", "Sentimento": "Positivo", "Value": 215},
                    {"date": "January 2023", "Sentimento": "Positivo", "Value": 891},
                    {"date": "February 2023", "Sentimento": "Positivo", "Value": 537},
                    {"date": "March 2023", "Sentimento": "Positivo", "Value": 1118},
                    {"date": "April 2023", "Sentimento": "Positivo", "Value": 65},
                    {"date": "May 2023", "Sentimento": "Positivo", "Value": 75},
                    {"date": "June 2023", "Sentimento": "Positivo", "Value": 76}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsSentiment = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-sentiment', spec, embedOptionsSentiment).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics3BtnSentiment.addEventListener('click', function() {
        graphics2BtnSentiment.classList.remove('buttonActive');
        graphics1BtnSentiment.classList.remove('buttonActive');
        graphics3BtnSentiment.classList.add('buttonActive');
        // chartSentimentING
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axis": {"grid": false},
            "legend": {"orient": "top"}
            },
                "data": {"name": "data-33dcc734e7abe4bdd1108d6c5a0f6641"},
                "mark": {"type": "line", "opacity": 0.1},
                "encoding": {
                "color": {
                    "field": "Sentimento",
                        "legend": {"orient": "right"},
                    "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.9},
                "x": {
                    "axis": {"format": "%B %Y", "tickCount": 12, "title": "Periodo"},
                    "field": "date",
                        "type": "temporal"
                },
                "y": {
                    "axis": {"title": "Numero di tweets"},
                    "field": "Value",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "title": {
                "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
                    "subtitle": "Visualizzazione dei valori relativi al dataset di Tweets"
            },
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-33dcc734e7abe4bdd1108d6c5a0f6641": [
                    {"date": "September 2022", "Sentimento": "Negativo", "Value": 64},
                    {"date": "October 2022", "Sentimento": "Negativo", "Value": 103},
                    {"date": "December 2022", "Sentimento": "Negativo", "Value": 12890},
                    {"date": "January 2023", "Sentimento": "Negativo", "Value": 21900},
                    {"date": "February 2023", "Sentimento": "Negativo", "Value": 6205},
                    {"date": "March 2023", "Sentimento": "Negativo", "Value": 3109},
                    {"date": "April 2023", "Sentimento": "Negativo", "Value": 2138},
                    {"date": "May 2023", "Sentimento": "Negativo", "Value": 1901},
                    {"date": "June 2023", "Sentimento": "Negativo", "Value": 999},
                    {"date": "September 2022", "Sentimento": "Neutrale", "Value": 101},
                    {"date": "October 2022", "Sentimento": "Neutrale", "Value": 75},
                    {"date": "December 2022", "Sentimento": "Neutrale", "Value": 26609},
                    {"date": "January 2023", "Sentimento": "Neutrale", "Value": 44188},
                    {"date": "February 2023", "Sentimento": "Neutrale", "Value": 11888},
                    {"date": "March 2023", "Sentimento": "Neutrale", "Value": 4615},
                    {"date": "April 2023", "Sentimento": "Neutrale", "Value": 3418},
                    {"date": "May 2023", "Sentimento": "Neutrale", "Value": 3131},
                    {"date": "June 2023", "Sentimento": "Neutrale", "Value": 1545},
                    {"date": "September 2022", "Sentimento": "Positivo", "Value": 114},
                    {"date": "October 2022", "Sentimento": "Positivo", "Value": 104},
                    {"date": "December 2022", "Sentimento": "Positivo", "Value": 37278},
                    {"date": "January 2023", "Sentimento": "Positivo", "Value": 67973},
                    {"date": "February 2023", "Sentimento": "Positivo", "Value": 17068},
                    {"date": "March 2023", "Sentimento": "Positivo", "Value": 7458},
                    {"date": "April 2023", "Sentimento": "Positivo", "Value": 5070},
                    {"date": "May 2023", "Sentimento": "Positivo", "Value": 4859},
                    {"date": "June 2023", "Sentimento": "Positivo", "Value": 2506}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsSentiment = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-sentiment', spec, embedOptionsSentiment).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });
});

// Ottenere i riferimenti ai pulsanti e al contenitore del grafico - words
const graphicsContainerWords = document.getElementById('graphics-container-words');
const graphicsContainerWords2 = document.getElementById('graphics-container-words2');
const graphics1BtnWords = document.getElementById('graphics1-btn-words');
const graphics2BtnWords = document.getElementById('graphics2-btn-words');
const graphics3BtnWords = document.getElementById('graphics3-btn-words');

// wordsfreq_allmonths - default
const defaultWords = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "axisX": {"labelAngle": 45}
    },
        "data": {"name": "data-ac0eefac8118804c69dbd0dd5f2bf7a9"},
        "mark": {"type": "point", "filled": true},
        "encoding": {
        "color": {
            "field": "sentiment_complete",
                "scale": {
                "domain": ["Positivo", "Neutrale", "Negativo"],
                    "range": ["#ADFC92", "#788BFF", "#F44E3F"]
            },
            "title": "Sentimento registrato",
                "type": "nominal"
        },
        "opacity": {"value": 0.7},
        "size": {"field": "Frequenza", "type": "quantitative"},
        "tooltip": [
            {"field": "Parola", "type": "nominal"},
            {"field": "Frequenza", "type": "quantitative"},
            {"field": "Frequenza", "type": "quantitative"}
        ],
            "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
        "y": {
            "axis": {"labels": false},
            "field": "Frequenza",
                "title": "Frequenza",
                "type": "quantitative"
        }
    },
        "height": 600,
        "params": [
        {
            "name": "param_1",
            "select": {"type": "point", "fields": ["sentiment_complete"]},
            "bind": {
                "input": "radio",
                "options": ["Positivo", "Neutrale", "Negativo", null],
                "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                "name": "Selettore sentimento: "
            }
        },
        {
            "name": "param_1",
            "select": {"type": "point", "fields": ["sentiment_complete"]},
            "bind": {
                "input": "radio",
                "options": ["Positivo", "Neutrale", "Negativo", null],
                "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                "name": "Selettore sentimento: "
            }
        }
    ],
        "title": "Sentimento sulle 30 parole più frequenti nel periodo aprile-giugno 2023",
        "transform": [{"filter": {"param": "param_1"}}],
        "width": 800,
        "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
        "datasets": {
        "data-ac0eefac8118804c69dbd0dd5f2bf7a9": [
            {"sentiment_complete": "Negativo", "Parola": "bad", "Frequenza": 627},
            {"sentiment_complete": "Negativo", "Parola": "cant", "Frequenza": 1025},
            {"sentiment_complete": "Negativo", "Parola": "doesnt", "Frequenza": 1069},
            {"sentiment_complete": "Negativo", "Parola": "dont", "Frequenza": 2368},
            {"sentiment_complete": "Negativo", "Parola": "even", "Frequenza": 1549},
            {"sentiment_complete": "Negativo", "Parola": "fucking", "Frequenza": 261},
            {"sentiment_complete": "Negativo", "Parola": "get", "Frequenza": 1770},
            {"sentiment_complete": "Negativo", "Parola": "going", "Frequenza": 937},
            {"sentiment_complete": "Negativo", "Parola": "islam", "Frequenza": 102},
            {"sentiment_complete": "Negativo", "Parola": "know", "Frequenza": 1365},
            {"sentiment_complete": "Negativo", "Parola": "like", "Frequenza": 2228},
            {"sentiment_complete": "Negativo", "Parola": "make", "Frequenza": 1319},
            {"sentiment_complete": "Negativo", "Parola": "need", "Frequenza": 805},
            {"sentiment_complete": "Negativo", "Parola": "one", "Frequenza": 1574},
            {"sentiment_complete": "Negativo", "Parola": "people", "Frequenza": 2876},
            {"sentiment_complete": "Negativo", "Parola": "problem", "Frequenza": 290},
            {"sentiment_complete": "Negativo", "Parola": "really", "Frequenza": 1057},
            {"sentiment_complete": "Negativo", "Parola": "right", "Frequenza": 447},
            {"sentiment_complete": "Negativo", "Parola": "say", "Frequenza": 634},
            {"sentiment_complete": "Negativo", "Parola": "see", "Frequenza": 122},
            {"sentiment_complete": "Negativo", "Parola": "shit", "Frequenza": 1038},
            {
                "sentiment_complete": "Negativo",
                "Parola": "something",
                "Frequenza": 942
            },
            {"sentiment_complete": "Negativo", "Parola": "thats", "Frequenza": 1264},
            {"sentiment_complete": "Negativo", "Parola": "thing", "Frequenza": 366},
            {"sentiment_complete": "Negativo", "Parola": "think", "Frequenza": 1590},
            {"sentiment_complete": "Negativo", "Parola": "time", "Frequenza": 1382},
            {"sentiment_complete": "Negativo", "Parola": "use", "Frequenza": 1550},
            {"sentiment_complete": "Negativo", "Parola": "used", "Frequenza": 507},
            {"sentiment_complete": "Negativo", "Parola": "using", "Frequenza": 1156},
            {"sentiment_complete": "Negativo", "Parola": "want", "Frequenza": 641},
            {"sentiment_complete": "Negativo", "Parola": "way", "Frequenza": 1050},
            {"sentiment_complete": "Negativo", "Parola": "work", "Frequenza": 1204},
            {"sentiment_complete": "Negativo", "Parola": "world", "Frequenza": 105},
            {"sentiment_complete": "Negativo", "Parola": "would", "Frequenza": 1978},
            {"sentiment_complete": "Negativo", "Parola": "write", "Frequenza": 875},
            {"sentiment_complete": "Negativo", "Parola": "wrong", "Frequenza": 981},
            {"sentiment_complete": "Negativo", "Parola": "youre", "Frequenza": 1164},
            {"sentiment_complete": "Neutrale", "Parola": "already", "Frequenza": 74},
            {"sentiment_complete": "Neutrale", "Parola": "ask", "Frequenza": 379},
            {"sentiment_complete": "Neutrale", "Parola": "bot", "Frequenza": 79},
            {"sentiment_complete": "Neutrale", "Parola": "bro", "Frequenza": 72},
            {"sentiment_complete": "Neutrale", "Parola": "cant", "Frequenza": 317},
            {"sentiment_complete": "Neutrale", "Parola": "chat", "Frequenza": 381},
            {"sentiment_complete": "Neutrale", "Parola": "day", "Frequenza": 265},
            {"sentiment_complete": "Neutrale", "Parola": "deleted", "Frequenza": 947},
            {"sentiment_complete": "Neutrale", "Parola": "doesnt", "Frequenza": 180},
            {"sentiment_complete": "Neutrale", "Parola": "dont", "Frequenza": 607},
            {"sentiment_complete": "Neutrale", "Parola": "even", "Frequenza": 335},
            {"sentiment_complete": "Neutrale", "Parola": "get", "Frequenza": 530},
            {"sentiment_complete": "Neutrale", "Parola": "going", "Frequenza": 85},
            {"sentiment_complete": "Neutrale", "Parola": "got", "Frequenza": 364},
            {"sentiment_complete": "Neutrale", "Parola": "internet", "Frequenza": 96},
            {"sentiment_complete": "Neutrale", "Parola": "isnt", "Frequenza": 79},
            {"sentiment_complete": "Neutrale", "Parola": "know", "Frequenza": 487},
            {"sentiment_complete": "Neutrale", "Parola": "make", "Frequenza": 290},
            {"sentiment_complete": "Neutrale", "Parola": "need", "Frequenza": 322},
            {"sentiment_complete": "Neutrale", "Parola": "one", "Frequenza": 573},
            {"sentiment_complete": "Neutrale", "Parola": "people", "Frequenza": 423},
            {"sentiment_complete": "Neutrale", "Parola": "phone", "Frequenza": 37},
            {"sentiment_complete": "Neutrale", "Parola": "read", "Frequenza": 38},
            {
                "sentiment_complete": "Neutrale",
                "Parola": "remindme",
                "Frequenza": 231
            },
            {"sentiment_complete": "Neutrale", "Parola": "removed", "Frequenza": 45},
            {"sentiment_complete": "Neutrale", "Parola": "right", "Frequenza": 151},
            {"sentiment_complete": "Neutrale", "Parola": "say", "Frequenza": 336},
            {"sentiment_complete": "Neutrale", "Parola": "see", "Frequenza": 201},
            {
                "sentiment_complete": "Neutrale",
                "Parola": "something",
                "Frequenza": 42
            },
            {"sentiment_complete": "Neutrale", "Parola": "tell", "Frequenza": 174},
            {"sentiment_complete": "Neutrale", "Parola": "thats", "Frequenza": 479},
            {"sentiment_complete": "Neutrale", "Parola": "thing", "Frequenza": 87},
            {"sentiment_complete": "Neutrale", "Parola": "think", "Frequenza": 497},
            {"sentiment_complete": "Neutrale", "Parola": "time", "Frequenza": 401},
            {"sentiment_complete": "Neutrale", "Parola": "use", "Frequenza": 721},
            {"sentiment_complete": "Neutrale", "Parola": "used", "Frequenza": 195},
            {"sentiment_complete": "Neutrale", "Parola": "using", "Frequenza": 332},
            {"sentiment_complete": "Neutrale", "Parola": "way", "Frequenza": 239},
            {"sentiment_complete": "Neutrale", "Parola": "work", "Frequenza": 434},
            {"sentiment_complete": "Neutrale", "Parola": "would", "Frequenza": 549},
            {"sentiment_complete": "Neutrale", "Parola": "write", "Frequenza": 380},
            {"sentiment_complete": "Neutrale", "Parola": "wrote", "Frequenza": 43},
            {"sentiment_complete": "Neutrale", "Parola": "youre", "Frequenza": 202},
            {"sentiment_complete": "Positivo", "Parola": "better", "Frequenza": 2660},
            {"sentiment_complete": "Positivo", "Parola": "bot", "Frequenza": 709},
            {"sentiment_complete": "Positivo", "Parola": "dont", "Frequenza": 4635},
            {"sentiment_complete": "Positivo", "Parola": "even", "Frequenza": 3380},
            {"sentiment_complete": "Positivo", "Parola": "get", "Frequenza": 3572},
            {"sentiment_complete": "Positivo", "Parola": "going", "Frequenza": 1913},
            {"sentiment_complete": "Positivo", "Parola": "good", "Frequenza": 4156},
            {
                "sentiment_complete": "Positivo",
                "Parola": "internet",
                "Frequenza": 635
            },
            {"sentiment_complete": "Positivo", "Parola": "know", "Frequenza": 3048},
            {"sentiment_complete": "Positivo", "Parola": "like", "Frequenza": 9205},
            {"sentiment_complete": "Positivo", "Parola": "make", "Frequenza": 3132},
            {"sentiment_complete": "Positivo", "Parola": "much", "Frequenza": 2310},
            {"sentiment_complete": "Positivo", "Parola": "need", "Frequenza": 2226},
            {"sentiment_complete": "Positivo", "Parola": "one", "Frequenza": 3544},
            {"sentiment_complete": "Positivo", "Parola": "people", "Frequenza": 5405},
            {"sentiment_complete": "Positivo", "Parola": "really", "Frequenza": 2455},
            {"sentiment_complete": "Positivo", "Parola": "right", "Frequenza": 295},
            {"sentiment_complete": "Positivo", "Parola": "say", "Frequenza": 274},
            {"sentiment_complete": "Positivo", "Parola": "see", "Frequenza": 2244},
            {
                "sentiment_complete": "Positivo",
                "Parola": "something",
                "Frequenza": 2550
            },
            {"sentiment_complete": "Positivo", "Parola": "sure", "Frequenza": 269},
            {"sentiment_complete": "Positivo", "Parola": "thats", "Frequenza": 2893},
            {"sentiment_complete": "Positivo", "Parola": "things", "Frequenza": 2396},
            {"sentiment_complete": "Positivo", "Parola": "think", "Frequenza": 4064},
            {"sentiment_complete": "Positivo", "Parola": "time", "Frequenza": 3180},
            {"sentiment_complete": "Positivo", "Parola": "use", "Frequenza": 4411},
            {"sentiment_complete": "Positivo", "Parola": "used", "Frequenza": 1269},
            {"sentiment_complete": "Positivo", "Parola": "using", "Frequenza": 2590},
            {"sentiment_complete": "Positivo", "Parola": "want", "Frequenza": 1697},
            {"sentiment_complete": "Positivo", "Parola": "way", "Frequenza": 2841},
            {"sentiment_complete": "Positivo", "Parola": "well", "Frequenza": 2741},
            {"sentiment_complete": "Positivo", "Parola": "work", "Frequenza": 3201},
            {"sentiment_complete": "Positivo", "Parola": "would", "Frequenza": 5244},
            {"sentiment_complete": "Positivo", "Parola": "write", "Frequenza": 1696},
            {"sentiment_complete": "Positivo", "Parola": "writing", "Frequenza": 661},
            {"sentiment_complete": "Positivo", "Parola": "youre", "Frequenza": 2247}
        ]
    }
};

const defaultEmbedOptionsWords = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#graphics-container-words', defaultWords, defaultEmbedOptionsWords).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});

document.addEventListener('DOMContentLoaded', function() {
    graphics1BtnWords.addEventListener('click', function() {
        graphics2BtnWords.classList.remove('buttonActive');
        graphics1BtnWords.classList.add('buttonActive');
        graphics3BtnWords.classList.remove('buttonActive');
        // wordsfreq_allmonths
        const spec = {
            "config": {
                "view": {"continuousWidth": 300, "continuousHeight": 300},
                "axisX": {"labelAngle": 45}
            },
            "data": {"name": "data-ac0eefac8118804c69dbd0dd5f2bf7a9"},
            "mark": {"type": "point", "filled": true},
            "encoding": {
                "color": {
                    "field": "sentiment_complete",
                    "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                        "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                    "type": "nominal"
                },
                "opacity": {"value": 0.7},
                "size": {"field": "Frequenza", "type": "quantitative"},
                "tooltip": [
                    {"field": "Parola", "type": "nominal"},
                    {"field": "Frequenza", "type": "quantitative"},
                    {"field": "Frequenza", "type": "quantitative"}
                ],
                "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
                "y": {
                    "axis": {"labels": false},
                    "field": "Frequenza",
                    "title": "Frequenza",
                    "type": "quantitative"
                }
            },
            "height": 600,
            "params": [
                {
                    "name": "param_1",
                    "select": {"type": "point", "fields": ["sentiment_complete"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento: "
                    }
                },
                {
                    "name": "param_1",
                    "select": {"type": "point", "fields": ["sentiment_complete"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento: "
                    }
                }
            ],
            "title": "Sentimento sulle 30 parole più frequenti nel periodo aprile-giugno 2023",
            "transform": [{"filter": {"param": "param_1"}}],
            "width": 800,
            "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
            "datasets": {
                "data-ac0eefac8118804c69dbd0dd5f2bf7a9": [
                    {"sentiment_complete": "Negativo", "Parola": "bad", "Frequenza": 627},
                    {"sentiment_complete": "Negativo", "Parola": "cant", "Frequenza": 1025},
                    {"sentiment_complete": "Negativo", "Parola": "doesnt", "Frequenza": 1069},
                    {"sentiment_complete": "Negativo", "Parola": "dont", "Frequenza": 2368},
                    {"sentiment_complete": "Negativo", "Parola": "even", "Frequenza": 1549},
                    {"sentiment_complete": "Negativo", "Parola": "fucking", "Frequenza": 261},
                    {"sentiment_complete": "Negativo", "Parola": "get", "Frequenza": 1770},
                    {"sentiment_complete": "Negativo", "Parola": "going", "Frequenza": 937},
                    {"sentiment_complete": "Negativo", "Parola": "islam", "Frequenza": 102},
                    {"sentiment_complete": "Negativo", "Parola": "know", "Frequenza": 1365},
                    {"sentiment_complete": "Negativo", "Parola": "like", "Frequenza": 2228},
                    {"sentiment_complete": "Negativo", "Parola": "make", "Frequenza": 1319},
                    {"sentiment_complete": "Negativo", "Parola": "need", "Frequenza": 805},
                    {"sentiment_complete": "Negativo", "Parola": "one", "Frequenza": 1574},
                    {"sentiment_complete": "Negativo", "Parola": "people", "Frequenza": 2876},
                    {"sentiment_complete": "Negativo", "Parola": "problem", "Frequenza": 290},
                    {"sentiment_complete": "Negativo", "Parola": "really", "Frequenza": 1057},
                    {"sentiment_complete": "Negativo", "Parola": "right", "Frequenza": 447},
                    {"sentiment_complete": "Negativo", "Parola": "say", "Frequenza": 634},
                    {"sentiment_complete": "Negativo", "Parola": "see", "Frequenza": 122},
                    {"sentiment_complete": "Negativo", "Parola": "shit", "Frequenza": 1038},
                    {
                        "sentiment_complete": "Negativo",
                        "Parola": "something",
                        "Frequenza": 942
                    },
                    {"sentiment_complete": "Negativo", "Parola": "thats", "Frequenza": 1264},
                    {"sentiment_complete": "Negativo", "Parola": "thing", "Frequenza": 366},
                    {"sentiment_complete": "Negativo", "Parola": "think", "Frequenza": 1590},
                    {"sentiment_complete": "Negativo", "Parola": "time", "Frequenza": 1382},
                    {"sentiment_complete": "Negativo", "Parola": "use", "Frequenza": 1550},
                    {"sentiment_complete": "Negativo", "Parola": "used", "Frequenza": 507},
                    {"sentiment_complete": "Negativo", "Parola": "using", "Frequenza": 1156},
                    {"sentiment_complete": "Negativo", "Parola": "want", "Frequenza": 641},
                    {"sentiment_complete": "Negativo", "Parola": "way", "Frequenza": 1050},
                    {"sentiment_complete": "Negativo", "Parola": "work", "Frequenza": 1204},
                    {"sentiment_complete": "Negativo", "Parola": "world", "Frequenza": 105},
                    {"sentiment_complete": "Negativo", "Parola": "would", "Frequenza": 1978},
                    {"sentiment_complete": "Negativo", "Parola": "write", "Frequenza": 875},
                    {"sentiment_complete": "Negativo", "Parola": "wrong", "Frequenza": 981},
                    {"sentiment_complete": "Negativo", "Parola": "youre", "Frequenza": 1164},
                    {"sentiment_complete": "Neutrale", "Parola": "already", "Frequenza": 74},
                    {"sentiment_complete": "Neutrale", "Parola": "ask", "Frequenza": 379},
                    {"sentiment_complete": "Neutrale", "Parola": "bot", "Frequenza": 79},
                    {"sentiment_complete": "Neutrale", "Parola": "bro", "Frequenza": 72},
                    {"sentiment_complete": "Neutrale", "Parola": "cant", "Frequenza": 317},
                    {"sentiment_complete": "Neutrale", "Parola": "chat", "Frequenza": 381},
                    {"sentiment_complete": "Neutrale", "Parola": "day", "Frequenza": 265},
                    {"sentiment_complete": "Neutrale", "Parola": "deleted", "Frequenza": 947},
                    {"sentiment_complete": "Neutrale", "Parola": "doesnt", "Frequenza": 180},
                    {"sentiment_complete": "Neutrale", "Parola": "dont", "Frequenza": 607},
                    {"sentiment_complete": "Neutrale", "Parola": "even", "Frequenza": 335},
                    {"sentiment_complete": "Neutrale", "Parola": "get", "Frequenza": 530},
                    {"sentiment_complete": "Neutrale", "Parola": "going", "Frequenza": 85},
                    {"sentiment_complete": "Neutrale", "Parola": "got", "Frequenza": 364},
                    {"sentiment_complete": "Neutrale", "Parola": "internet", "Frequenza": 96},
                    {"sentiment_complete": "Neutrale", "Parola": "isnt", "Frequenza": 79},
                    {"sentiment_complete": "Neutrale", "Parola": "know", "Frequenza": 487},
                    {"sentiment_complete": "Neutrale", "Parola": "make", "Frequenza": 290},
                    {"sentiment_complete": "Neutrale", "Parola": "need", "Frequenza": 322},
                    {"sentiment_complete": "Neutrale", "Parola": "one", "Frequenza": 573},
                    {"sentiment_complete": "Neutrale", "Parola": "people", "Frequenza": 423},
                    {"sentiment_complete": "Neutrale", "Parola": "phone", "Frequenza": 37},
                    {"sentiment_complete": "Neutrale", "Parola": "read", "Frequenza": 38},
                    {
                        "sentiment_complete": "Neutrale",
                        "Parola": "remindme",
                        "Frequenza": 231
                    },
                    {"sentiment_complete": "Neutrale", "Parola": "removed", "Frequenza": 45},
                    {"sentiment_complete": "Neutrale", "Parola": "right", "Frequenza": 151},
                    {"sentiment_complete": "Neutrale", "Parola": "say", "Frequenza": 336},
                    {"sentiment_complete": "Neutrale", "Parola": "see", "Frequenza": 201},
                    {
                        "sentiment_complete": "Neutrale",
                        "Parola": "something",
                        "Frequenza": 42
                    },
                    {"sentiment_complete": "Neutrale", "Parola": "tell", "Frequenza": 174},
                    {"sentiment_complete": "Neutrale", "Parola": "thats", "Frequenza": 479},
                    {"sentiment_complete": "Neutrale", "Parola": "thing", "Frequenza": 87},
                    {"sentiment_complete": "Neutrale", "Parola": "think", "Frequenza": 497},
                    {"sentiment_complete": "Neutrale", "Parola": "time", "Frequenza": 401},
                    {"sentiment_complete": "Neutrale", "Parola": "use", "Frequenza": 721},
                    {"sentiment_complete": "Neutrale", "Parola": "used", "Frequenza": 195},
                    {"sentiment_complete": "Neutrale", "Parola": "using", "Frequenza": 332},
                    {"sentiment_complete": "Neutrale", "Parola": "way", "Frequenza": 239},
                    {"sentiment_complete": "Neutrale", "Parola": "work", "Frequenza": 434},
                    {"sentiment_complete": "Neutrale", "Parola": "would", "Frequenza": 549},
                    {"sentiment_complete": "Neutrale", "Parola": "write", "Frequenza": 380},
                    {"sentiment_complete": "Neutrale", "Parola": "wrote", "Frequenza": 43},
                    {"sentiment_complete": "Neutrale", "Parola": "youre", "Frequenza": 202},
                    {"sentiment_complete": "Positivo", "Parola": "better", "Frequenza": 2660},
                    {"sentiment_complete": "Positivo", "Parola": "bot", "Frequenza": 709},
                    {"sentiment_complete": "Positivo", "Parola": "dont", "Frequenza": 4635},
                    {"sentiment_complete": "Positivo", "Parola": "even", "Frequenza": 3380},
                    {"sentiment_complete": "Positivo", "Parola": "get", "Frequenza": 3572},
                    {"sentiment_complete": "Positivo", "Parola": "going", "Frequenza": 1913},
                    {"sentiment_complete": "Positivo", "Parola": "good", "Frequenza": 4156},
                    {
                        "sentiment_complete": "Positivo",
                        "Parola": "internet",
                        "Frequenza": 635
                    },
                    {"sentiment_complete": "Positivo", "Parola": "know", "Frequenza": 3048},
                    {"sentiment_complete": "Positivo", "Parola": "like", "Frequenza": 9205},
                    {"sentiment_complete": "Positivo", "Parola": "make", "Frequenza": 3132},
                    {"sentiment_complete": "Positivo", "Parola": "much", "Frequenza": 2310},
                    {"sentiment_complete": "Positivo", "Parola": "need", "Frequenza": 2226},
                    {"sentiment_complete": "Positivo", "Parola": "one", "Frequenza": 3544},
                    {"sentiment_complete": "Positivo", "Parola": "people", "Frequenza": 5405},
                    {"sentiment_complete": "Positivo", "Parola": "really", "Frequenza": 2455},
                    {"sentiment_complete": "Positivo", "Parola": "right", "Frequenza": 295},
                    {"sentiment_complete": "Positivo", "Parola": "say", "Frequenza": 274},
                    {"sentiment_complete": "Positivo", "Parola": "see", "Frequenza": 2244},
                    {
                        "sentiment_complete": "Positivo",
                        "Parola": "something",
                        "Frequenza": 2550
                    },
                    {"sentiment_complete": "Positivo", "Parola": "sure", "Frequenza": 269},
                    {"sentiment_complete": "Positivo", "Parola": "thats", "Frequenza": 2893},
                    {"sentiment_complete": "Positivo", "Parola": "things", "Frequenza": 2396},
                    {"sentiment_complete": "Positivo", "Parola": "think", "Frequenza": 4064},
                    {"sentiment_complete": "Positivo", "Parola": "time", "Frequenza": 3180},
                    {"sentiment_complete": "Positivo", "Parola": "use", "Frequenza": 4411},
                    {"sentiment_complete": "Positivo", "Parola": "used", "Frequenza": 1269},
                    {"sentiment_complete": "Positivo", "Parola": "using", "Frequenza": 2590},
                    {"sentiment_complete": "Positivo", "Parola": "want", "Frequenza": 1697},
                    {"sentiment_complete": "Positivo", "Parola": "way", "Frequenza": 2841},
                    {"sentiment_complete": "Positivo", "Parola": "well", "Frequenza": 2741},
                    {"sentiment_complete": "Positivo", "Parola": "work", "Frequenza": 3201},
                    {"sentiment_complete": "Positivo", "Parola": "would", "Frequenza": 5244},
                    {"sentiment_complete": "Positivo", "Parola": "write", "Frequenza": 1696},
                    {"sentiment_complete": "Positivo", "Parola": "writing", "Frequenza": 661},
                    {"sentiment_complete": "Positivo", "Parola": "youre", "Frequenza": 2247}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words', spec, embedOptionsWords).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });

        graphicsContainerWords2.style.display = 'none';
    });

    graphics2BtnWords.addEventListener('click', function() {
        graphics2BtnWords.classList.add('buttonActive');
        graphics1BtnWords.classList.remove('buttonActive');
        graphics3BtnWords.classList.remove('buttonActive');
        // chart-wordsfrequency-2022-ita
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAngle": 45}
            },
                "data": {"name": "data-3ddb57789240c7b601be85226fa48863"},
                "mark": {"type": "point", "filled": true},
                "encoding": {
                "color": {
                    "field": "Sentimento",
                        "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.7},
                "size": {"field": "Frequenza", "type": "quantitative"},
                "tooltip": [
                    {"field": "Parola", "type": "nominal"},
                    {"field": "Frequenza", "type": "quantitative"},
                    {"field": "Frequenza", "type": "quantitative"}
                ],
                    "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
                "y": {
                    "axis": {"labels": false},
                    "field": "Frequenza",
                        "title": "Frequenza",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_1",
                    "select": {"type": "point", "fields": ["Sentimento"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento: "
                    }
                }
            ],
                "title": "Sentimento sulle prime 30 parole di tweets italiani nel 2022",
                "transform": [{"filter": {"param": "param_1"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-3ddb57789240c7b601be85226fa48863": [
                    {"Sentimento": "Negativo", "Parola": "anni", "Frequenza": 8},
                    {"Sentimento": "Negativo", "Parola": "articolo", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "artificiale", "Frequenza": 13},
                    {"Sentimento": "Negativo", "Parola": "breve", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "chat", "Frequenza": 12},
                    {"Sentimento": "Negativo", "Parola": "chatbot", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "codex", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "cosa", "Frequenza": 23},
                    {"Sentimento": "Negativo", "Parola": "cose", "Frequenza": 13},
                    {"Sentimento": "Negativo", "Parola": "dire", "Frequenza": 24},
                    {"Sentimento": "Negativo", "Parola": "enormi", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "essere", "Frequenza": 5},
                    {"Sentimento": "Negativo", "Parola": "fare", "Frequenza": 20},
                    {"Sentimento": "Negativo", "Parola": "fatto", "Frequenza": 11},
                    {"Sentimento": "Negativo", "Parola": "gay", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "gioco", "Frequenza": 5},
                    {"Sentimento": "Negativo", "Parola": "gpt3", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "grande", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "intelligenza", "Frequenza": 8},
                    {"Sentimento": "Negativo", "Parola": "lintelligenza", "Frequenza": 5},
                    {"Sentimento": "Negativo", "Parola": "molto", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "newsletter", "Frequenza": 5},
                    {"Sentimento": "Negativo", "Parola": "nuovo", "Frequenza": 5},
                    {"Sentimento": "Negativo", "Parola": "oltre", "Frequenza": 5},
                    {"Sentimento": "Negativo", "Parola": "pensa", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "risposta", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "scemenze", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "scrivere", "Frequenza": 5},
                    {"Sentimento": "Negativo", "Parola": "straordinarie", "Frequenza": 6},
                    {"Sentimento": "Negativo", "Parola": "visto", "Frequenza": 6},
                    {"Sentimento": "Neutrale", "Parola": "artificiale", "Frequenza": 192},
                    {"Sentimento": "Neutrale", "Parola": "chat", "Frequenza": 77},
                    {"Sentimento": "Neutrale", "Parola": "chatbot", "Frequenza": 37},
                    {"Sentimento": "Neutrale", "Parola": "chiesto", "Frequenza": 50},
                    {"Sentimento": "Neutrale", "Parola": "codice", "Frequenza": 29},
                    {"Sentimento": "Neutrale", "Parola": "cos", "Frequenza": 48},
                    {"Sentimento": "Neutrale", "Parola": "cosa", "Frequenza": 88},
                    {"Sentimento": "Neutrale", "Parola": "creare", "Frequenza": 28},
                    {"Sentimento": "Neutrale", "Parola": "domande", "Frequenza": 54},
                    {"Sentimento": "Neutrale", "Parola": "ecco", "Frequenza": 40},
                    {"Sentimento": "Neutrale", "Parola": "fare", "Frequenza": 69},
                    {"Sentimento": "Neutrale", "Parola": "fatto", "Frequenza": 31},
                    {"Sentimento": "Neutrale", "Parola": "funziona", "Frequenza": 45},
                    {"Sentimento": "Neutrale", "Parola": "futuro", "Frequenza": 33},
                    {"Sentimento": "Neutrale", "Parola": "già", "Frequenza": 30},
                    {"Sentimento": "Neutrale", "Parola": "google", "Frequenza": 120},
                    {"Sentimento": "Neutrale", "Parola": "intelligenza", "Frequenza": 133},
                    {"Sentimento": "Neutrale", "Parola": "lai", "Frequenza": 29},
                    {"Sentimento": "Neutrale", "Parola": "lintelligenza", "Frequenza": 40},
                    {"Sentimento": "Neutrale", "Parola": "molto", "Frequenza": 48},
                    {"Sentimento": "Neutrale", "Parola": "nuovo", "Frequenza": 47},
                    {"Sentimento": "Neutrale", "Parola": "ora", "Frequenza": 40},
                    {"Sentimento": "Neutrale", "Parola": "provato", "Frequenza": 41},
                    {"Sentimento": "Neutrale", "Parola": "ricerca", "Frequenza": 50},
                    {"Sentimento": "Neutrale", "Parola": "risposte", "Frequenza": 44},
                    {"Sentimento": "Neutrale", "Parola": "sapere", "Frequenza": 29},
                    {"Sentimento": "Neutrale", "Parola": "solo", "Frequenza": 34},
                    {"Sentimento": "Neutrale", "Parola": "stato", "Frequenza": 29},
                    {"Sentimento": "Neutrale", "Parola": "usare", "Frequenza": 38},
                    {"Sentimento": "Neutrale", "Parola": "via", "Frequenza": 40},
                    {"Sentimento": "Positivo", "Parola": "antidiplomatico", "Frequenza": 16},
                    {"Sentimento": "Positivo", "Parola": "articolo", "Frequenza": 11},
                    {"Sentimento": "Positivo", "Parola": "artificiale", "Frequenza": 39},
                    {"Sentimento": "Positivo", "Parola": "chat", "Frequenza": 13},
                    {"Sentimento": "Positivo", "Parola": "chatbot", "Frequenza": 9},
                    {"Sentimento": "Positivo", "Parola": "chiesto", "Frequenza": 29},
                    {"Sentimento": "Positivo", "Parola": "cosa", "Frequenza": 15},
                    {"Sentimento": "Positivo", "Parola": "domanda", "Frequenza": 9},
                    {"Sentimento": "Positivo", "Parola": "essere", "Frequenza": 11},
                    {"Sentimento": "Positivo", "Parola": "fatto", "Frequenza": 17},
                    {"Sentimento": "Positivo", "Parola": "fine", "Frequenza": 40},
                    {"Sentimento": "Positivo", "Parola": "futuro", "Frequenza": 9},
                    {"Sentimento": "Positivo", "Parola": "già", "Frequenza": 10},
                    {"Sentimento": "Positivo", "Parola": "google", "Frequenza": 46},
                    {"Sentimento": "Positivo", "Parola": "gratis", "Frequenza": 10},
                    {"Sentimento": "Positivo", "Parola": "intelligenza", "Frequenza": 18},
                    {"Sentimento": "Positivo", "Parola": "linizio", "Frequenza": 20},
                    {"Sentimento": "Positivo", "Parola": "lintelligenza", "Frequenza": 18},
                    {"Sentimento": "Positivo", "Parola": "mette", "Frequenza": 10},
                    {"Sentimento": "Positivo", "Parola": "nuovo", "Frequenza": 11},
                    {"Sentimento": "Positivo", "Parola": "oggi", "Frequenza": 9},
                    {"Sentimento": "Positivo", "Parola": "parte", "Frequenza": 9},
                    {"Sentimento": "Positivo", "Parola": "prova", "Frequenza": 8},
                    {"Sentimento": "Positivo", "Parola": "provato", "Frequenza": 14},
                    {"Sentimento": "Positivo", "Parola": "ricerca", "Frequenza": 9},
                    {"Sentimento": "Positivo", "Parola": "risposta", "Frequenza": 9},
                    {"Sentimento": "Positivo", "Parola": "risposte", "Frequenza": 13},
                    {"Sentimento": "Positivo", "Parola": "scrivere", "Frequenza": 10},
                    {"Sentimento": "Positivo", "Parola": "super", "Frequenza": 8},
                    {"Sentimento": "Positivo", "Parola": "utenti", "Frequenza": 10}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words', spec, embedOptionsWords).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });

        // chart-wordsfrequency-2023-ita
        const spec2 = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAngle": 45}
            },
                "data": {"name": "data-8dc34e70ee76654bd9c9b56999dea0ba"},
                "mark": {"type": "point", "filled": true},
                "encoding": {
                "color": {
                    "field": "Sentimento",
                        "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.7},
                "size": {
                    "field": "Frequenza",
                        "title": "Frequenza",
                        "type": "quantitative"
                },
                "tooltip": [
                    {"field": "Parola", "title": "Parola", "type": "nominal"},
                    {"field": "Frequenza", "title": "Frequenza", "type": "quantitative"}
                ],
                    "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
                "y": {
                    "axis": {"labels": false},
                    "field": "Frequenza",
                        "title": "Frequenza",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_2",
                    "select": {"type": "point", "fields": ["Sentimento"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento 2023: "
                    }
                }
            ],
                "title": "Sentimento sulle prime 30 parole di tweets italiani nel 2023",
                "transform": [{"filter": {"param": "param_2"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-8dc34e70ee76654bd9c9b56999dea0ba": [
                    {"Sentimento": "Negativo", "Parola": "artificiale", "Frequenza": 111},
                    {"Sentimento": "Negativo", "Parola": "chat", "Frequenza": 113},
                    {"Sentimento": "Negativo", "Parola": "chiesto", "Frequenza": 46},
                    {"Sentimento": "Negativo", "Parola": "cosa", "Frequenza": 88},
                    {"Sentimento": "Negativo", "Parola": "cose", "Frequenza": 39},
                    {"Sentimento": "Negativo", "Parola": "dire", "Frequenza": 196},
                    {"Sentimento": "Negativo", "Parola": "domanda", "Frequenza": 44},
                    {"Sentimento": "Negativo", "Parola": "domande", "Frequenza": 31},
                    {"Sentimento": "Negativo", "Parola": "ecco", "Frequenza": 32},
                    {"Sentimento": "Negativo", "Parola": "essere", "Frequenza": 36},
                    {"Sentimento": "Negativo", "Parola": "fake", "Frequenza": 54},
                    {"Sentimento": "Negativo", "Parola": "fare", "Frequenza": 72},
                    {"Sentimento": "Negativo", "Parola": "fatto", "Frequenza": 57},
                    {"Sentimento": "Negativo", "Parola": "già", "Frequenza": 53},
                    {"Sentimento": "Negativo", "Parola": "intelligenza", "Frequenza": 67},
                    {"Sentimento": "Negativo", "Parola": "lavoro", "Frequenza": 59},
                    {"Sentimento": "Negativo", "Parola": "meglio", "Frequenza": 40},
                    {"Sentimento": "Negativo", "Parola": "molto", "Frequenza": 57},
                    {"Sentimento": "Negativo", "Parola": "musk", "Frequenza": 34},
                    {"Sentimento": "Negativo", "Parola": "news", "Frequenza": 37},
                    {"Sentimento": "Negativo", "Parola": "oggi", "Frequenza": 31},
                    {"Sentimento": "Negativo", "Parola": "ora", "Frequenza": 40},
                    {"Sentimento": "Negativo", "Parola": "prima", "Frequenza": 44},
                    {"Sentimento": "Negativo", "Parola": "quando", "Frequenza": 44},
                    {"Sentimento": "Negativo", "Parola": "risposta", "Frequenza": 46},
                    {"Sentimento": "Negativo", "Parola": "scrivere", "Frequenza": 39},
                    {"Sentimento": "Negativo", "Parola": "senza", "Frequenza": 44},
                    {"Sentimento": "Negativo", "Parola": "solo", "Frequenza": 47},
                    {"Sentimento": "Negativo", "Parola": "stop", "Frequenza": 36},
                    {"Sentimento": "Negativo", "Parola": "via", "Frequenza": 36},
                    {"Sentimento": "Neutrale", "Parola": "altri", "Frequenza": 328},
                    {"Sentimento": "Neutrale", "Parola": "artificiale", "Frequenza": 2054},
                    {"Sentimento": "Neutrale", "Parola": "bing", "Frequenza": 373},
                    {"Sentimento": "Neutrale", "Parola": "chat", "Frequenza": 1744},
                    {"Sentimento": "Neutrale", "Parola": "chatbot", "Frequenza": 381},
                    {"Sentimento": "Neutrale", "Parola": "chiesto", "Frequenza": 341},
                    {"Sentimento": "Neutrale", "Parola": "cosa", "Frequenza": 943},
                    {"Sentimento": "Neutrale", "Parola": "ecco", "Frequenza": 702},
                    {"Sentimento": "Neutrale", "Parola": "essere", "Frequenza": 540},
                    {"Sentimento": "Neutrale", "Parola": "fare", "Frequenza": 650},
                    {"Sentimento": "Neutrale", "Parola": "futuro", "Frequenza": 339},
                    {"Sentimento": "Neutrale", "Parola": "già", "Frequenza": 457},
                    {"Sentimento": "Neutrale", "Parola": "google", "Frequenza": 860},
                    {"Sentimento": "Neutrale", "Parola": "intelligenza", "Frequenza": 1333},
                    {"Sentimento": "Neutrale", "Parola": "lavoro", "Frequenza": 470},
                    {"Sentimento": "Neutrale", "Parola": "lintelligenza", "Frequenza": 460},
                    {"Sentimento": "Neutrale", "Parola": "microsoft", "Frequenza": 631},
                    {"Sentimento": "Neutrale", "Parola": "molto", "Frequenza": 445},
                    {"Sentimento": "Neutrale", "Parola": "mondo", "Frequenza": 436},
                    {"Sentimento": "Neutrale", "Parola": "nuova", "Frequenza": 342},
                    {"Sentimento": "Neutrale", "Parola": "nuovo", "Frequenza": 541},
                    {"Sentimento": "Neutrale", "Parola": "oggi", "Frequenza": 413},
                    {"Sentimento": "Neutrale", "Parola": "ora", "Frequenza": 447},
                    {"Sentimento": "Neutrale", "Parola": "quando", "Frequenza": 331},
                    {"Sentimento": "Neutrale", "Parola": "ricerca", "Frequenza": 459},
                    {"Sentimento": "Neutrale", "Parola": "risposta", "Frequenza": 367},
                    {"Sentimento": "Neutrale", "Parola": "risposte", "Frequenza": 353},
                    {"Sentimento": "Neutrale", "Parola": "scrivere", "Frequenza": 453},
                    {"Sentimento": "Neutrale", "Parola": "solo", "Frequenza": 626},
                    {"Sentimento": "Neutrale", "Parola": "via", "Frequenza": 574},
                    {"Sentimento": "Positivo", "Parola": "artificiale", "Frequenza": 357},
                    {"Sentimento": "Positivo", "Parola": "chat", "Frequenza": 350},
                    {"Sentimento": "Positivo", "Parola": "chatbot", "Frequenza": 132},
                    {"Sentimento": "Positivo", "Parola": "chiesto", "Frequenza": 230},
                    {"Sentimento": "Positivo", "Parola": "cosa", "Frequenza": 238},
                    {"Sentimento": "Positivo", "Parola": "detto", "Frequenza": 89},
                    {"Sentimento": "Positivo", "Parola": "ecco", "Frequenza": 135},
                    {"Sentimento": "Positivo", "Parola": "essere", "Frequenza": 117},
                    {"Sentimento": "Positivo", "Parola": "fare", "Frequenza": 126},
                    {"Sentimento": "Positivo", "Parola": "fatto", "Frequenza": 167},
                    {"Sentimento": "Positivo", "Parola": "fine", "Frequenza": 153},
                    {"Sentimento": "Positivo", "Parola": "già", "Frequenza": 128},
                    {"Sentimento": "Positivo", "Parola": "google", "Frequenza": 159},
                    {"Sentimento": "Positivo", "Parola": "intelligenza", "Frequenza": 228},
                    {"Sentimento": "Positivo", "Parola": "lavoro", "Frequenza": 104},
                    {"Sentimento": "Positivo", "Parola": "microsoft", "Frequenza": 147},
                    {"Sentimento": "Positivo", "Parola": "molto", "Frequenza": 111},
                    {"Sentimento": "Positivo", "Parola": "mondo", "Frequenza": 89},
                    {"Sentimento": "Positivo", "Parola": "ora", "Frequenza": 109},
                    {"Sentimento": "Positivo", "Parola": "provato", "Frequenza": 88},
                    {"Sentimento": "Positivo", "Parola": "quando", "Frequenza": 88},
                    {"Sentimento": "Positivo", "Parola": "ricerca", "Frequenza": 102},
                    {"Sentimento": "Positivo", "Parola": "risposto", "Frequenza": 131},
                    {"Sentimento": "Positivo", "Parola": "scritto", "Frequenza": 124},
                    {"Sentimento": "Positivo", "Parola": "scrivere", "Frequenza": 113},
                    {"Sentimento": "Positivo", "Parola": "solo", "Frequenza": 129},
                    {"Sentimento": "Positivo", "Parola": "stato", "Frequenza": 92},
                    {"Sentimento": "Positivo", "Parola": "testo", "Frequenza": 104},
                    {"Sentimento": "Positivo", "Parola": "utenti", "Frequenza": 123},
                    {"Sentimento": "Positivo", "Parola": "versione", "Frequenza": 90}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords2 = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words2', spec2, embedOptionsWords2).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });

        graphicsContainerWords2.style.display = 'inline-block';
    });

    graphics3BtnWords.addEventListener('click', function() {
        graphics2BtnWords.classList.remove('buttonActive');
        graphics1BtnWords.classList.remove('buttonActive');
        graphics3BtnWords.classList.add('buttonActive');
        // chart-wordsfrequency-2022
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAngle": 45}
            },
                "data": {"name": "data-63b5b9917904df14feae1859706c37f7"},
                "mark": {"type": "point", "filled": true},
                "encoding": {
                "color": {
                    "field": "Sentimento",
                        "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.7},
                "size": {"field": "Frequenza", "type": "quantitative"},
                "tooltip": [
                    {"field": "Parola", "type": "nominal"},
                    {"field": "Frequenza", "type": "quantitative"},
                    {"field": "Frequenza", "type": "quantitative"}
                ],
                    "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
                "y": {
                    "axis": {"labels": false},
                    "field": "Frequenza",
                        "title": "Frequenza",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_1",
                    "select": {"type": "point", "fields": ["Sentimento"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento: "
                    }
                }
            ],
                "title": "Sentimento sulle prime 30 parole di tweets inglesi nel 2022",
                "transform": [{"filter": {"param": "param_1"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-63b5b9917904df14feae1859706c37f7": [
                    {"Sentimento": "Negativo", "Parola": "answer", "Frequenza": 478},
                    {"Sentimento": "Negativo", "Parola": "answers", "Frequenza": 374},
                    {"Sentimento": "Negativo", "Parola": "ask", "Frequenza": 453},
                    {"Sentimento": "Negativo", "Parola": "asked", "Frequenza": 652},
                    {"Sentimento": "Negativo", "Parola": "bad", "Frequenza": 373},
                    {"Sentimento": "Negativo", "Parola": "chat", "Frequenza": 982},
                    {"Sentimento": "Negativo", "Parola": "code", "Frequenza": 590},
                    {"Sentimento": "Negativo", "Parola": "even", "Frequenza": 552},
                    {"Sentimento": "Negativo", "Parola": "get", "Frequenza": 645},
                    {"Sentimento": "Negativo", "Parola": "going", "Frequenza": 398},
                    {"Sentimento": "Negativo", "Parola": "google", "Frequenza": 1384},
                    {"Sentimento": "Negativo", "Parola": "know", "Frequenza": 519},
                    {"Sentimento": "Negativo", "Parola": "like", "Frequenza": 833},
                    {"Sentimento": "Negativo", "Parola": "make", "Frequenza": 547},
                    {"Sentimento": "Negativo", "Parola": "new", "Frequenza": 496},
                    {"Sentimento": "Negativo", "Parola": "one", "Frequenza": 642},
                    {"Sentimento": "Negativo", "Parola": "people", "Frequenza": 732},
                    {"Sentimento": "Negativo", "Parola": "problem", "Frequenza": 378},
                    {"Sentimento": "Negativo", "Parola": "really", "Frequenza": 378},
                    {"Sentimento": "Negativo", "Parola": "search", "Frequenza": 634},
                    {"Sentimento": "Negativo", "Parola": "see", "Frequenza": 432},
                    {"Sentimento": "Negativo", "Parola": "think", "Frequenza": 617},
                    {"Sentimento": "Negativo", "Parola": "time", "Frequenza": 619},
                    {"Sentimento": "Negativo", "Parola": "use", "Frequenza": 792},
                    {"Sentimento": "Negativo", "Parola": "using", "Frequenza": 700},
                    {"Sentimento": "Negativo", "Parola": "via", "Frequenza": 396},
                    {"Sentimento": "Negativo", "Parola": "way", "Frequenza": 361},
                    {"Sentimento": "Negativo", "Parola": "would", "Frequenza": 728},
                    {"Sentimento": "Negativo", "Parola": "write", "Frequenza": 736},
                    {"Sentimento": "Negativo", "Parola": "wrong", "Frequenza": 644},
                    {"Sentimento": "Neutrale", "Parola": "answer", "Frequenza": 401},
                    {"Sentimento": "Neutrale", "Parola": "ask", "Frequenza": 939},
                    {"Sentimento": "Neutrale", "Parola": "asked", "Frequenza": 884},
                    {"Sentimento": "Neutrale", "Parola": "chat", "Frequenza": 3485},
                    {"Sentimento": "Neutrale", "Parola": "chatbot", "Frequenza": 337},
                    {"Sentimento": "Neutrale", "Parola": "code", "Frequenza": 783},
                    {"Sentimento": "Neutrale", "Parola": "content", "Frequenza": 368},
                    {"Sentimento": "Neutrale", "Parola": "future", "Frequenza": 448},
                    {"Sentimento": "Neutrale", "Parola": "get", "Frequenza": 491},
                    {"Sentimento": "Neutrale", "Parola": "going", "Frequenza": 341},
                    {"Sentimento": "Neutrale", "Parola": "google", "Frequenza": 1441},
                    {"Sentimento": "Neutrale", "Parola": "know", "Frequenza": 632},
                    {"Sentimento": "Neutrale", "Parola": "make", "Frequenza": 585},
                    {"Sentimento": "Neutrale", "Parola": "need", "Frequenza": 518},
                    {"Sentimento": "Neutrale", "Parola": "new", "Frequenza": 822},
                    {"Sentimento": "Neutrale", "Parola": "one", "Frequenza": 463},
                    {"Sentimento": "Neutrale", "Parola": "red", "Frequenza": 353},
                    {"Sentimento": "Neutrale", "Parola": "replace", "Frequenza": 368},
                    {"Sentimento": "Neutrale", "Parola": "search", "Frequenza": 950},
                    {"Sentimento": "Neutrale", "Parola": "see", "Frequenza": 409},
                    {"Sentimento": "Neutrale", "Parola": "seo", "Frequenza": 385},
                    {"Sentimento": "Neutrale", "Parola": "think", "Frequenza": 579},
                    {"Sentimento": "Neutrale", "Parola": "time", "Frequenza": 381},
                    {"Sentimento": "Neutrale", "Parola": "twitter", "Frequenza": 335},
                    {"Sentimento": "Neutrale", "Parola": "use", "Frequenza": 1312},
                    {"Sentimento": "Neutrale", "Parola": "used", "Frequenza": 505},
                    {"Sentimento": "Neutrale", "Parola": "using", "Frequenza": 1259},
                    {"Sentimento": "Neutrale", "Parola": "via", "Frequenza": 1021},
                    {"Sentimento": "Neutrale", "Parola": "would", "Frequenza": 376},
                    {"Sentimento": "Neutrale", "Parola": "write", "Frequenza": 1138},
                    {"Sentimento": "Positivo", "Parola": "ask", "Frequenza": 1395},
                    {"Sentimento": "Positivo", "Parola": "asked", "Frequenza": 1966},
                    {"Sentimento": "Positivo", "Parola": "better", "Frequenza": 1903},
                    {"Sentimento": "Positivo", "Parola": "chat", "Frequenza": 3043},
                    {"Sentimento": "Positivo", "Parola": "code", "Frequenza": 1775},
                    {"Sentimento": "Positivo", "Parola": "content", "Frequenza": 1369},
                    {"Sentimento": "Positivo", "Parola": "create", "Frequenza": 1382},
                    {"Sentimento": "Positivo", "Parola": "even", "Frequenza": 1335},
                    {"Sentimento": "Positivo", "Parola": "get", "Frequenza": 1877},
                    {"Sentimento": "Positivo", "Parola": "good", "Frequenza": 2561},
                    {"Sentimento": "Positivo", "Parola": "google", "Frequenza": 2786},
                    {"Sentimento": "Positivo", "Parola": "great", "Frequenza": 1373},
                    {"Sentimento": "Positivo", "Parola": "help", "Frequenza": 1756},
                    {"Sentimento": "Positivo", "Parola": "know", "Frequenza": 1471},
                    {"Sentimento": "Positivo", "Parola": "like", "Frequenza": 5812},
                    {"Sentimento": "Positivo", "Parola": "make", "Frequenza": 1815},
                    {"Sentimento": "Positivo", "Parola": "new", "Frequenza": 2286},
                    {"Sentimento": "Positivo", "Parola": "one", "Frequenza": 1903},
                    {"Sentimento": "Positivo", "Parola": "people", "Frequenza": 1640},
                    {"Sentimento": "Positivo", "Parola": "search", "Frequenza": 1467},
                    {"Sentimento": "Positivo", "Parola": "see", "Frequenza": 1717},
                    {"Sentimento": "Positivo", "Parola": "think", "Frequenza": 1826},
                    {"Sentimento": "Positivo", "Parola": "time", "Frequenza": 1784},
                    {"Sentimento": "Positivo", "Parola": "use", "Frequenza": 3291},
                    {"Sentimento": "Positivo", "Parola": "used", "Frequenza": 1351},
                    {"Sentimento": "Positivo", "Parola": "using", "Frequenza": 2547},
                    {"Sentimento": "Positivo", "Parola": "way", "Frequenza": 1454},
                    {"Sentimento": "Positivo", "Parola": "would", "Frequenza": 2070},
                    {"Sentimento": "Positivo", "Parola": "write", "Frequenza": 2379},
                    {"Sentimento": "Positivo", "Parola": "writing", "Frequenza": 1231}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words', spec, embedOptionsWords).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });

        // chart-wordsfrequency-2023
        const spec2 = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAngle": 45}
            },
                "data": {"name": "data-2dc2ae9e118b7661c9eef13bf1daeaf3"},
                "mark": {"type": "point", "filled": true},
                "encoding": {
                "color": {
                    "field": "Sentimento",
                        "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.7},
                "size": {
                    "field": "Frequenza",
                        "title": "Frequenza",
                        "type": "quantitative"
                },
                "tooltip": [
                    {"field": "Parola", "title": "Parola", "type": "nominal"},
                    {"field": "Frequenza", "title": "Frequenza", "type": "quantitative"}
                ],
                    "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
                "y": {
                    "axis": {"labels": false},
                    "field": "Frequenza",
                        "title": "Frequenza",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_2",
                    "select": {"type": "point", "fields": ["Sentimento"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento 2023: "
                    }
                }
            ],
                "title": "Sentimento sulle prime 30 parole di tweets inglesi nel 2023",
                "transform": [{"filter": {"param": "param_2"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-2dc2ae9e118b7661c9eef13bf1daeaf3": [
                    {"Sentimento": "Negativo", "Parola": "answer", "Frequenza": 992},
                    {"Sentimento": "Negativo", "Parola": "asked", "Frequenza": 1537},
                    {"Sentimento": "Negativo", "Parola": "banned", "Frequenza": 1277},
                    {"Sentimento": "Negativo", "Parola": "chat", "Frequenza": 9226},
                    {"Sentimento": "Negativo", "Parola": "content", "Frequenza": 1006},
                    {"Sentimento": "Negativo", "Parola": "data", "Frequenza": 995},
                    {"Sentimento": "Negativo", "Parola": "even", "Frequenza": 1252},
                    {"Sentimento": "Negativo", "Parola": "get", "Frequenza": 1519},
                    {"Sentimento": "Negativo", "Parola": "going", "Frequenza": 1096},
                    {"Sentimento": "Negativo", "Parola": "google", "Frequenza": 1840},
                    {"Sentimento": "Negativo", "Parola": "human", "Frequenza": 988},
                    {"Sentimento": "Negativo", "Parola": "know", "Frequenza": 1430},
                    {"Sentimento": "Negativo", "Parola": "like", "Frequenza": 1887},
                    {"Sentimento": "Negativo", "Parola": "make", "Frequenza": 1353},
                    {"Sentimento": "Negativo", "Parola": "many", "Frequenza": 966},
                    {"Sentimento": "Negativo", "Parola": "need", "Frequenza": 986},
                    {"Sentimento": "Negativo", "Parola": "new", "Frequenza": 1608},
                    {"Sentimento": "Negativo", "Parola": "one", "Frequenza": 1485},
                    {"Sentimento": "Negativo", "Parola": "people", "Frequenza": 1841},
                    {"Sentimento": "Negativo", "Parola": "see", "Frequenza": 968},
                    {"Sentimento": "Negativo", "Parola": "think", "Frequenza": 1408},
                    {"Sentimento": "Negativo", "Parola": "time", "Frequenza": 1463},
                    {"Sentimento": "Negativo", "Parola": "use", "Frequenza": 2237},
                    {"Sentimento": "Negativo", "Parola": "used", "Frequenza": 981},
                    {"Sentimento": "Negativo", "Parola": "using", "Frequenza": 2026},
                    {"Sentimento": "Negativo", "Parola": "via", "Frequenza": 936},
                    {"Sentimento": "Negativo", "Parola": "work", "Frequenza": 946},
                    {"Sentimento": "Negativo", "Parola": "would", "Frequenza": 1423},
                    {"Sentimento": "Negativo", "Parola": "write", "Frequenza": 1721},
                    {"Sentimento": "Negativo", "Parola": "wrong", "Frequenza": 1195},
                    {"Sentimento": "Neutrale", "Parola": "ask", "Frequenza": 1778},
                    {"Sentimento": "Neutrale", "Parola": "asked", "Frequenza": 2225},
                    {"Sentimento": "Neutrale", "Parola": "chat", "Frequenza": 18918},
                    {"Sentimento": "Neutrale", "Parola": "check", "Frequenza": 1153},
                    {"Sentimento": "Neutrale", "Parola": "future", "Frequenza": 1572},
                    {"Sentimento": "Neutrale", "Parola": "get", "Frequenza": 1647},
                    {"Sentimento": "Neutrale", "Parola": "going", "Frequenza": 1121},
                    {"Sentimento": "Neutrale", "Parola": "google", "Frequenza": 2373},
                    {"Sentimento": "Neutrale", "Parola": "know", "Frequenza": 1869},
                    {"Sentimento": "Neutrale", "Parola": "make", "Frequenza": 1574},
                    {"Sentimento": "Neutrale", "Parola": "microsoft", "Frequenza": 1414},
                    {"Sentimento": "Neutrale", "Parola": "need", "Frequenza": 1141},
                    {"Sentimento": "Neutrale", "Parola": "new", "Frequenza": 2800},
                    {"Sentimento": "Neutrale", "Parola": "one", "Frequenza": 1402},
                    {"Sentimento": "Neutrale", "Parola": "read", "Frequenza": 1168},
                    {"Sentimento": "Neutrale", "Parola": "replace", "Frequenza": 1076},
                    {"Sentimento": "Neutrale", "Parola": "search", "Frequenza": 1237},
                    {"Sentimento": "Neutrale", "Parola": "take", "Frequenza": 1127},
                    {"Sentimento": "Neutrale", "Parola": "text", "Frequenza": 1161},
                    {"Sentimento": "Neutrale", "Parola": "think", "Frequenza": 1566},
                    {"Sentimento": "Neutrale", "Parola": "time", "Frequenza": 1294},
                    {"Sentimento": "Neutrale", "Parola": "tool", "Frequenza": 1089},
                    {"Sentimento": "Neutrale", "Parola": "use", "Frequenza": 3684},
                    {"Sentimento": "Neutrale", "Parola": "used", "Frequenza": 1452},
                    {"Sentimento": "Neutrale", "Parola": "using", "Frequenza": 2845},
                    {"Sentimento": "Neutrale", "Parola": "via", "Frequenza": 2549},
                    {"Sentimento": "Neutrale", "Parola": "work", "Frequenza": 1134},
                    {"Sentimento": "Neutrale", "Parola": "world", "Frequenza": 1208},
                    {"Sentimento": "Neutrale", "Parola": "would", "Frequenza": 1203},
                    {"Sentimento": "Neutrale", "Parola": "write", "Frequenza": 2286},
                    {"Sentimento": "Positivo", "Parola": "artificial", "Frequenza": 3580},
                    {"Sentimento": "Positivo", "Parola": "asked", "Frequenza": 4396},
                    {"Sentimento": "Positivo", "Parola": "best", "Frequenza": 3492},
                    {"Sentimento": "Positivo", "Parola": "better", "Frequenza": 4042},
                    {"Sentimento": "Positivo", "Parola": "chat", "Frequenza": 21685},
                    {"Sentimento": "Positivo", "Parola": "content", "Frequenza": 4482},
                    {"Sentimento": "Positivo", "Parola": "create", "Frequenza": 4248},
                    {"Sentimento": "Positivo", "Parola": "free", "Frequenza": 3529},
                    {"Sentimento": "Positivo", "Parola": "get", "Frequenza": 5379},
                    {"Sentimento": "Positivo", "Parola": "good", "Frequenza": 4886},
                    {"Sentimento": "Positivo", "Parola": "google", "Frequenza": 3791},
                    {"Sentimento": "Positivo", "Parola": "great", "Frequenza": 3736},
                    {"Sentimento": "Positivo", "Parola": "help", "Frequenza": 5553},
                    {"Sentimento": "Positivo", "Parola": "intelligence", "Frequenza": 4161},
                    {"Sentimento": "Positivo", "Parola": "know", "Frequenza": 3927},
                    {"Sentimento": "Positivo", "Parola": "language", "Frequenza": 3519},
                    {"Sentimento": "Positivo", "Parola": "like", "Frequenza": 13438},
                    {"Sentimento": "Positivo", "Parola": "make", "Frequenza": 4784},
                    {"Sentimento": "Positivo", "Parola": "new", "Frequenza": 6758},
                    {"Sentimento": "Positivo", "Parola": "one", "Frequenza": 4675},
                    {"Sentimento": "Positivo", "Parola": "people", "Frequenza": 4099},
                    {"Sentimento": "Positivo", "Parola": "see", "Frequenza": 4037},
                    {"Sentimento": "Positivo", "Parola": "think", "Frequenza": 3846},
                    {"Sentimento": "Positivo", "Parola": "time", "Frequenza": 4753},
                    {"Sentimento": "Positivo", "Parola": "tool", "Frequenza": 3793},
                    {"Sentimento": "Positivo", "Parola": "tools", "Frequenza": 3572},
                    {"Sentimento": "Positivo", "Parola": "use", "Frequenza": 9243},
                    {"Sentimento": "Positivo", "Parola": "using", "Frequenza": 6618},
                    {"Sentimento": "Positivo", "Parola": "would", "Frequenza": 4249},
                    {"Sentimento": "Positivo", "Parola": "write", "Frequenza": 5308}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords2 = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words2', spec2, embedOptionsWords2).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });

        graphicsContainerWords2.style.display = 'inline-block';
    });
});

// Ottenere i riferimenti ai pulsanti e al contenitore del grafico - trigrams
const graphicsContainerTrigrams = document.getElementById('graphics-container-trigrams');
const graphics1BtnTrigrams = document.getElementById('graphics1-btn-trigrams');
const graphics2BtnTrigrams = document.getElementById('graphics2-btn-trigrams');
const graphics3BtnTrigrams = document.getElementById('graphics3-btn-trigrams');

// trigrammimensilireddit - default
const defaultTrigrams = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
    "legend": {"orient": "top-right"}
    },
        "data": {"name": "data-4c4957fbea79566afd0e7e929d421aca"},
        "mark": {"type": "bar"},
        "encoding": {
        "color": {"field": "Sentimento", "type": "quantitative"},
        "opacity": {"condition": {"param": "param_3", "value": 1}, "value": 0.3},
        "tooltip": [
            {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
            {
                "field": "Frequency",
                "title": "Frequenza assoluta",
                "type": "quantitative"
            }
        ],
            "x": {
            "field": "Trigram",
                "sort": "-y",
                "title": "Trigramma",
                "type": "nominal"
        },
        "y": {
            "field": "Frequency",
                "title": "Frequenza registrata",
                "type": "quantitative"
        }
    },
        "height": 600,
        "params": [
        {
            "name": "param_2",
            "select": {"type": "point", "fields": ["MonthName"]},
            "bind": {
                "input": "select",
                "options": ["Aprile", "Maggio", "Giugno", null],
                "labels": ["Aprile ", "Maggio ", "Giugno ", "Tutto"],
                "name": "Selettore del periodo: "
            }
        },
        {
            "name": "param_3",
            "select": {"type": "point", "fields": ["Trigram", "Frequency"]}
        }
    ],
        "resolve": {"scale": {"y": "independent"}},
        "title": {
        "text": "Top Trigrammi sul periodo aprile-giugno 2023",
            "subtitle": "Dati relativi al dataset di Reddit"
    },
        "transform": [{"filter": {"param": "param_2"}}],
        "width": 800,
        "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
        "datasets": {
        "data-4c4957fbea79566afd0e7e929d421aca": [
            {
                "Month": 4,
                "Trigram": "smart robot response",
                "Frequency": 217,
                "Sentimento": 0.4019,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "automatic tldr shorter",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "robot summary automatic",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "smart robot summary",
                "Frequency": 43,
                "Sentimento": 0.4019,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "good sense humor",
                "Frequency": 47,
                "Sentimento": 0.6124,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "summary automatic tldr",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "think based comments",
                "Frequency": 107,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "heres think based",
                "Frequency": 110,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "robot response automatic",
                "Frequency": 217,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "based comments like",
                "Frequency": 60,
                "Sentimento": 0.3612,
                "MonthName": "Aprile"
            },
            {
                "Month": 6,
                "Trigram": "wrote explanation breakdown",
                "Frequency": 28,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "feel error message",
                "Frequency": 19,
                "Sentimento": -0.4019,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "disagree strongly disagree",
                "Frequency": 20,
                "Sentimento": -0.4767,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "black mirror episode",
                "Frequency": 23,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "error message moderators",
                "Frequency": 25,
                "Sentimento": -0.4019,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "action performed automatically",
                "Frequency": 26,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "bot action performed",
                "Frequency": 26,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "explanation breakdown list",
                "Frequency": 29,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "toolkit feel error",
                "Frequency": 17,
                "Sentimento": -0.4019,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "moderation toolkit feel",
                "Frequency": 17,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 5,
                "Trigram": "reminded reduce spam",
                "Frequency": 43,
                "Sentimento": -0.3612,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "link send reminded",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "utc remind link",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "mir spanisch vor",
                "Frequency": 57,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "das kommt mir",
                "Frequency": 62,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "verstehe nur bahnhof",
                "Frequency": 63,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "large language model",
                "Frequency": 69,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "ich verstehe nur",
                "Frequency": 74,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "send reminded reduce",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "kommt mir spanisch",
                "Frequency": 57,
                "Sentimento": 0,
                "MonthName": "Maggio"
            }
        ]
    }
};

const defaultEmbedOptionsTrigrams = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#graphics-container-trigrams', defaultTrigrams, defaultEmbedOptionsTrigrams).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});

document.addEventListener('DOMContentLoaded', function() {
    graphics1BtnTrigrams.addEventListener('click', function() {
        graphics1BtnTrigrams.classList.add('buttonActive');
        graphics2BtnTrigrams.classList.remove('buttonActive');
        graphics3BtnTrigrams.classList.remove('buttonActive');
        // trigrammimensilireddit
        const spec = {
            "config": {
                "view": {"continuousWidth": 300, "continuousHeight": 300},
                "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
                "legend": {"orient": "top-right"}
            },
            "data": {"name": "data-4c4957fbea79566afd0e7e929d421aca"},
            "mark": {"type": "bar"},
            "encoding": {
                "color": {"field": "Sentimento", "type": "quantitative"},
                "opacity": {"condition": {"param": "param_3", "value": 1}, "value": 0.3},
                "tooltip": [
                    {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
                    {
                        "field": "Frequency",
                        "title": "Frequenza assoluta",
                        "type": "quantitative"
                    }
                ],
                "x": {
                    "field": "Trigram",
                    "sort": "-y",
                    "title": "Trigramma",
                    "type": "nominal"
                },
                "y": {
                    "field": "Frequency",
                    "title": "Frequenza registrata",
                    "type": "quantitative"
                }
            },
            "height": 600,
            "params": [
                {
                    "name": "param_2",
                    "select": {"type": "point", "fields": ["MonthName"]},
                    "bind": {
                        "input": "select",
                        "options": ["Aprile", "Maggio", "Giugno", null],
                        "labels": ["Aprile ", "Maggio ", "Giugno ", "Tutto"],
                        "name": "Selettore del periodo: "
                    }
                },
                {
                    "name": "param_3",
                    "select": {"type": "point", "fields": ["Trigram", "Frequency"]}
                }
            ],
            "resolve": {"scale": {"y": "independent"}},
            "title": {
                "text": "Top Trigrammi sul periodo aprile-giugno 2023",
                "subtitle": "Dati relativi al dataset di Reddit"
            },
            "transform": [{"filter": {"param": "param_2"}}],
            "width": 800,
            "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
            "datasets": {
                "data-4c4957fbea79566afd0e7e929d421aca": [
                    {
                        "Month": 4,
                        "Trigram": "smart robot response",
                        "Frequency": 217,
                        "Sentimento": 0.4019,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "automatic tldr shorter",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "robot summary automatic",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "smart robot summary",
                        "Frequency": 43,
                        "Sentimento": 0.4019,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "good sense humor",
                        "Frequency": 47,
                        "Sentimento": 0.6124,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "summary automatic tldr",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "think based comments",
                        "Frequency": 107,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "heres think based",
                        "Frequency": 110,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "robot response automatic",
                        "Frequency": 217,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "based comments like",
                        "Frequency": 60,
                        "Sentimento": 0.3612,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 6,
                        "Trigram": "wrote explanation breakdown",
                        "Frequency": 28,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "feel error message",
                        "Frequency": 19,
                        "Sentimento": -0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "disagree strongly disagree",
                        "Frequency": 20,
                        "Sentimento": -0.4767,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "black mirror episode",
                        "Frequency": 23,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "error message moderators",
                        "Frequency": 25,
                        "Sentimento": -0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "action performed automatically",
                        "Frequency": 26,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "bot action performed",
                        "Frequency": 26,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "explanation breakdown list",
                        "Frequency": 29,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "toolkit feel error",
                        "Frequency": 17,
                        "Sentimento": -0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "moderation toolkit feel",
                        "Frequency": 17,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 5,
                        "Trigram": "reminded reduce spam",
                        "Frequency": 43,
                        "Sentimento": -0.3612,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "link send reminded",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "utc remind link",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "mir spanisch vor",
                        "Frequency": 57,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "das kommt mir",
                        "Frequency": 62,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "verstehe nur bahnhof",
                        "Frequency": 63,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "large language model",
                        "Frequency": 69,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "ich verstehe nur",
                        "Frequency": 74,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "send reminded reduce",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "kommt mir spanisch",
                        "Frequency": 57,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsTrigrams = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-trigrams', spec, embedOptionsTrigrams).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics2BtnTrigrams.addEventListener('click', function() {
        graphics1BtnTrigrams.classList.remove('buttonActive');
        graphics2BtnTrigrams.classList.add('buttonActive');
        graphics3BtnTrigrams.classList.remove('buttonActive');
        // trigrammimensilitwitterIT
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
            "legend": {"orient": "top-right"}
            },
                "data": {"name": "data-0e58b5d9c8f694fc3ee53efab992547b"},
                "mark": {"type": "bar"},
                "encoding": {
                "color": {"field": "Sentimento", "type": "quantitative"},
                "tooltip": [
                    {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
                    {"field": "Frequency", "title": "Frequenza", "type": "quantitative"}
                ],
                    "x": {
                    "field": "Trigram",
                        "sort": "-y",
                        "title": "Trigramma",
                        "type": "nominal"
                },
                "y": {
                    "field": "Frequency",
                        "title": "Frequenza registrata",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_3",
                    "select": {"type": "point", "fields": ["MonthName"]},
                    "bind": {
                        "input": "select",
                        "options": [
                            "Settembre",
                            "Ottobre",
                            "Dicembre",
                            "Gennaio",
                            "Febbraio",
                            "Marzo",
                            "Aprile",
                            "Maggio",
                            "Giugno",
                            null
                        ],
                        "labels": [
                            "Settembre ",
                            "Ottobre ",
                            "Dicembre ",
                            "Gennaio ",
                            "Febbraio ",
                            "Marzo ",
                            "Aprile ",
                            "Maggio ",
                            "Giugno ",
                            "Tutto"
                        ],
                        "name": "Selettore del periodo: "
                    }
                },
                {
                    "name": "param_4",
                    "select": {"type": "point", "fields": ["Trigram", "Frequency"]}
                }
            ],
                "resolve": {"scale": {"y": "independent"}},
                "title": {
                "text": "Top trigrammi sul periodo 2022/2023",
                    "subtitle": "Dati relativi ai tweets in lingua italiana"
            },
                "transform": [
                {"filter": {"param": "param_3"}},
                {
                    "window": [{"op": "rank", "field": "row_number", "as": "rank"}],
                    "sort": [{"field": "Frequency", "order": "descending"}]
                },
                {"filter": "(datum.rank <= 30)"}
            ],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-0e58b5d9c8f694fc3ee53efab992547b": [
                    {
                        "Month": 4,
                        "Trigram": "info qui tagga",
                        "Frequency": 14,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "tagga persona interessata",
                        "Frequency": 14,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "persona interessata opinione",
                        "Frequency": 12,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "interessata opinione commenti",
                        "Frequency": 12,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "scrivere prompt efficace",
                        "Frequency": 6,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "prompt efficace programmi",
                        "Frequency": 6,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "efficace programmi intelligenza",
                        "Frequency": 6,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "programmi intelligenza artificiale",
                        "Frequency": 6,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "intelligenza artificiale generativa",
                        "Frequency": 6,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "qui tagga persona",
                        "Frequency": 14,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 12,
                        "Trigram": "sicurezza hacker potrebbero",
                        "Frequency": 10,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "linizio fine google",
                        "Frequency": 20,
                        "Sentimento": 0.2023,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "intelligenza artificiale stupisce",
                        "Frequency": 10,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "google deve preoccuparsi",
                        "Frequency": 10,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "problema sicurezza hacker",
                        "Frequency": 10,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "ora intelligenza artificiale",
                        "Frequency": 11,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "sostituire google uomo",
                        "Frequency": 12,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "artificiale stupisce spaventa",
                        "Frequency": 14,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "grosso problema sicurezza",
                        "Frequency": 16,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "diventare grosso problema",
                        "Frequency": 16,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 2,
                        "Trigram": "info qui tagga",
                        "Frequency": 15,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "leggi larticolo link",
                        "Frequency": 12,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "italia comprendi tecnologia",
                        "Frequency": 13,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "comprendi tecnologia applicazioni",
                        "Frequency": 14,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "interessata opinione commenti",
                        "Frequency": 14,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "persona interessata opinione",
                        "Frequency": 14,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "tagga persona interessata",
                        "Frequency": 15,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "qui tagga persona",
                        "Frequency": 15,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "parlarne parlarne parlarne",
                        "Frequency": 20,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "ruba credenziali social",
                        "Frequency": 15,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "leggi larticolo link",
                        "Frequency": 36,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "comprendi tecnologia applicazioni",
                        "Frequency": 34,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "italia comprendi tecnologia",
                        "Frequency": 30,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "intelligenza artificiale generativa",
                        "Frequency": 25,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "minaccia monopolio motore",
                        "Frequency": 19,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "monopolio motore ricerca",
                        "Frequency": 19,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "info qui tagga",
                        "Frequency": 18,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "qui tagga persona",
                        "Frequency": 18,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "tagga persona interessata",
                        "Frequency": 18,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "persona interessata opinione",
                        "Frequency": 18,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 6,
                        "Trigram": "bard risposta google",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "scambiare idee conoscenze",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "idee conoscenze altri",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "conoscenze altri appassionati",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "ecco bard risposta",
                        "Frequency": 7,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "vuoi scambiare idee",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "appassionati esperti unisciti",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "esperti unisciti gruppo",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "unisciti gruppo facebook",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "altri appassionati esperti",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 5,
                        "Trigram": "già lavoro sicuro",
                        "Frequency": 5,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "appassionati esperti unisciti",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "unisciti gruppo facebook",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "esperti unisciti gruppo",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "altri appassionati esperti",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "conoscenze altri appassionati",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "idee conoscenze altri",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "scambiare idee conoscenze",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "vuoi scambiare idee",
                        "Frequency": 9,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "100 milioni utenti",
                        "Frequency": 6,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 3,
                        "Trigram": "nuova intelligenza artificiale",
                        "Frequency": 21,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "100 milioni utenti",
                        "Frequency": 21,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "unisciti gruppo facebook",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "esperti unisciti gruppo",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "appassionati esperti unisciti",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "altri appassionati esperti",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "conoscenze altri appassionati",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "idee conoscenze altri",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "scambiare idee conoscenze",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "vuoi scambiare idee",
                        "Frequency": 97,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 11,
                        "Trigram": "modello linguaggio grandi",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "facendogli domanda amiloidosi",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "testo simile umano",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "generazione testo simile",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "addestrato dallintelligenza artificiale",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "dimensioni addestrato dallintelligenza",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "grandi dimensioni addestrato",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "linguaggio grandi dimensioni",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "sviluppo sicuramente bene",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "sogno diventa reale",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "gira verso programmatori",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "scuote testa gira",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "artificiale scuote testa",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "immaginando intelligenza artificiale",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "lavorando farla scalare",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "sovraccarico lavorando farla",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "google hitech ansa",
                        "Frequency": 3,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "concorrenza google hitech",
                        "Frequency": 3,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "testa gira verso",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "intelligenza artificiale scuote",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "google risposte argomenti",
                        "Frequency": 3,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "qualche errore confonde",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "ancora qualche errore",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "vedi ancora qualche",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "gioco google anni",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "fuori gioco google",
                        "Frequency": 3,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "scopriamo cos funziona",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "oltre milione utenti",
                        "Frequency": 3,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "concorrenza google risposte",
                        "Frequency": 3,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "mette fuori gioco",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsTrigrams = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-trigrams', spec, embedOptionsTrigrams).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics3BtnTrigrams.addEventListener('click', function() {
        graphics1BtnTrigrams.classList.remove('buttonActive');
        graphics2BtnTrigrams.classList.remove('buttonActive');
        graphics3BtnTrigrams.classList.add('buttonActive');
        // trigrammimensilitwitter
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
            "legend": {"orient": "top-right"}
            },
                "data": {"name": "data-e4affbbf8048626926c898916b0e176e"},
                "mark": {"type": "bar"},
                "encoding": {
                "color": {"field": "Sentimento", "type": "quantitative"},
                "tooltip": [
                    {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
                    {"field": "Frequency", "title": "Frequenza", "type": "quantitative"}
                ],
                    "x": {
                    "field": "Trigram",
                        "sort": "-y",
                        "title": "Trigramma",
                        "type": "nominal"
                },
                "y": {
                    "field": "Frequency",
                        "title": "Frequenza registrata",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_3",
                    "select": {"type": "point", "fields": ["MonthName"]},
                    "bind": {
                        "input": "select",
                        "options": [
                            "Settembre",
                            "Ottobre",
                            "Dicembre",
                            "Gennaio",
                            "Febbraio",
                            "Marzo",
                            "Aprile",
                            "Maggio",
                            "Giugno",
                            null
                        ],
                        "labels": [
                            "Settembre ",
                            "Ottobre ",
                            "Dicembre ",
                            "Gennaio ",
                            "Febbraio ",
                            "Marzo ",
                            "Aprile ",
                            "Maggio ",
                            "Giugno ",
                            "Tutto"
                        ],
                        "name": "Selettore del periodo: "
                    }
                },
                {
                    "name": "param_4",
                    "select": {"type": "point", "fields": ["Trigram", "Frequency"]}
                }
            ],
                "resolve": {"scale": {"y": "independent"}},
                "title": {
                "text": "Top trigrammi sul periodo 2022/2023",
                    "subtitle": "Dati relativi ai tweets in lingua inglese"
            },
                "transform": [
                {"filter": {"param": "param_3"}},
                {
                    "window": [{"op": "rank", "field": "row_number", "as": "rank"}],
                    "sort": [{"field": "Frequency", "order": "descending"}]
                },
                {"filter": "(datum.rank <= 30)"}
            ],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-e4affbbf8048626926c898916b0e176e": [
                    {
                        "Month": 4,
                        "Trigram": "banned italy privacy",
                        "Frequency": 146,
                        "Sentimento": -0.4588,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "spot recommendation ticker",
                        "Frequency": 86,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "recommendation ticker time",
                        "Frequency": 86,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "ticker time interval",
                        "Frequency": 86,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "special edition guide",
                        "Frequency": 84,
                        "Sentimento": 0.4019,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "rsi recommendation ticker",
                        "Frequency": 78,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "time interval 5min",
                        "Frequency": 53,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "interval 5min price",
                        "Frequency": 53,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "predict stock moves",
                        "Frequency": 47,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "italy privacy concerns",
                        "Frequency": 142,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 12,
                        "Trigram": "pros need master",
                        "Frequency": 130,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "2022 review eeat",
                        "Frequency": 200,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "red google search",
                        "Frequency": 134,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "quora launches poe",
                        "Frequency": 145,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "code red amid",
                        "Frequency": 132,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "launches poe way",
                        "Frequency": 148,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "poe way talk",
                        "Frequency": 149,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "issued code red",
                        "Frequency": 196,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "code red google",
                        "Frequency": 197,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "seo 2022 review",
                        "Frequency": 197,
                        "Sentimento": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 2,
                        "Trigram": "monthly active users",
                        "Frequency": 97,
                        "Sentimento": 0.4019,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "access new features",
                        "Frequency": 80,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "faster response times",
                        "Frequency": 86,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "million monthly active",
                        "Frequency": 86,
                        "Sentimento": 0.4019,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "generated based instructions",
                        "Frequency": 87,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "humidity wind speed",
                        "Frequency": 87,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "current temp humidity",
                        "Frequency": 87,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "100 million monthly",
                        "Frequency": 93,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "100 million users",
                        "Frequency": 118,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "temp humidity wind",
                        "Frequency": 87,
                        "Sentimento": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "large language models",
                        "Frequency": 304,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "natural language processing",
                        "Frequency": 254,
                        "Sentimento": 0.3612,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "medical licensing exam",
                        "Frequency": 216,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "generated based instructions",
                        "Frequency": 195,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "current temp humidity",
                        "Frequency": 189,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "temp humidity wind",
                        "Frequency": 189,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "humidity wind speed",
                        "Frequency": 189,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "wharton mba exam",
                        "Frequency": 165,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "multibillion dollar investment",
                        "Frequency": 158,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "trending wikipedia pages",
                        "Frequency": 144,
                        "Sentimento": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 6,
                        "Trigram": "spread malicious code",
                        "Frequency": 34,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "experts fight attacks",
                        "Frequency": 55,
                        "Sentimento": -0.6705,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "fight attacks experts",
                        "Frequency": 54,
                        "Sentimento": -0.6705,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "church service generated",
                        "Frequency": 34,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "attend church service",
                        "Frequency": 34,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "experts exploring application",
                        "Frequency": 54,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "hundreds attend church",
                        "Frequency": 34,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "cybersecurity experts fight",
                        "Frequency": 55,
                        "Sentimento": -0.3818,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "attacks experts exploring",
                        "Frequency": 54,
                        "Sentimento": -0.4404,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "help cybersecurity experts",
                        "Frequency": 55,
                        "Sentimento": 0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 5,
                        "Trigram": "new york federal",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "cases new york",
                        "Frequency": 23,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "bogus cases new",
                        "Frequency": 23,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "federal court filing",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "cited bogus cases",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "shopping app temu",
                        "Frequency": 25,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "temu invitation code",
                        "Frequency": 30,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "large language models",
                        "Frequency": 39,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "cited fake cases",
                        "Frequency": 23,
                        "Sentimento": -0.4767,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "york federal court",
                        "Frequency": 24,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 3,
                        "Trigram": "artificial intelligence technology",
                        "Frequency": 34,
                        "Sentimento": 0.4767,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "large language models",
                        "Frequency": 41,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "100 million users",
                        "Frequency": 44,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "temporarily banned italy",
                        "Frequency": 46,
                        "Sentimento": -0.4588,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "italy privacy concerns",
                        "Frequency": 87,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "plugin accessing website",
                        "Frequency": 89,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "browser plugin accessing",
                        "Frequency": 89,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "web browser plugin",
                        "Frequency": 89,
                        "Sentimento": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "banned italy privacy",
                        "Frequency": 108,
                        "Sentimento": -0.4588,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "monthly active users",
                        "Frequency": 34,
                        "Sentimento": 0.4019,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 10,
                        "Trigram": "cares watches women",
                        "Frequency": 2,
                        "Sentimento": 0.4588,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "coti years ago",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "watches women soccer",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "looks like fun",
                        "Frequency": 2,
                        "Sentimento": 0.7003,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "close nuclear war",
                        "Frequency": 4,
                        "Sentimento": -0.5994,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "needs deescalate russia",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "great nft project",
                        "Frequency": 2,
                        "Sentimento": 0.6249,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "0xf23a8ca32aabc994d81dfdab0f369e0ca752a3ad testnet test",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "biden deescalate russia",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "tell cost website",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "lehman brothers 2022",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "billions trillions dollars",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "spend billions trillions",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "let spend billions",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "yayyyy let spend",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "100 3000 week",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "home owner charged",
                        "Frequency": 2,
                        "Sentimento": -0.2023,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "flying bussing illegals",
                        "Frequency": 2,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "trillions dollars members",
                        "Frequency": 1,
                        "Sentimento": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "stop paying congress",
                        "Frequency": 2,
                        "Sentimento": -0.296,
                        "MonthName": "Settembre"
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsTrigrams = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-trigrams', spec, embedOptionsTrigrams).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });
});

// comparativeAnalysis_twitter_reddit
const topic = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "facet": {"spacing": 10},
    "header": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 10},
    "legend": {"orient": "right"},
    "title": {"fontSize": 16, "fontWeight": "bold"}
    },
        "data": {"name": "data-f027e5ae39f403aacf2a97a88f2ec608"},
        "mark": {"type": "bar", "opacity": 0.7},
        "encoding": {
        "color": {
            "field": "social",
                "scale": {
                "domain": ["Twitter", "Reddit"],
                    "range": ["#1DA1F2", "#F44E3F"]
            },
            "title": "Social di riferimento",
                "type": "nominal"
        },
        "column": {
            "field": "Topic",
                "header": {"orient": "bottom"},
            "sort": {"field": "Topic", "order": "descending"},
            "title": "Argomento",
                "type": "ordinal"
        },
        "tooltip": [
            {"field": "Topic", "type": "nominal"},
            {"field": "Sentimento", "type": "quantitative"},
            {"field": "Source", "type": "nominal"}
        ],
            "x": {
            "axis": {"labels": false},
            "field": "social",
                "title": "",
                "type": "nominal"
        },
        "y": {"field": "Sentimento", "title": "Sentimento", "type": "quantitative"}
    },
        "params": [
        {
            "name": "param_5",
            "select": {"type": "point", "fields": ["Source"]},
            "bind": {
                "input": "radio",
                "options": ["Vader", "TextBlob"],
                "labels": ["Vader", "TextBlob"],
                "name": "Selettore libreria: "
            }
        }
    ],
        "title": "Analisi comparativa sui valori registrati nei dataset di Twitter e Reddit",
        "transform": [{"filter": {"param": "param_5"}}],
        "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
        "datasets": {
        "data-f027e5ae39f403aacf2a97a88f2ec608": [
            {
                "Topic": "browser",
                "Sentimento": 0.12513816964285715,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "browser",
                "Sentimento": 0.11306694293709998,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "google",
                "Sentimento": 0.15539044259140472,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "google",
                "Sentimento": 0.11700492095516343,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "church",
                "Sentimento": 0.1497836363636364,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "church",
                "Sentimento": 0.07403188627560638,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "microsoft",
                "Sentimento": 0.1817045393858478,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "microsoft",
                "Sentimento": 0.10643076350477886,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "learning",
                "Sentimento": 0.2918083408720825,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "learning",
                "Sentimento": 0.1548236830886573,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "school",
                "Sentimento": 0.1661807980049875,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "school",
                "Sentimento": 0.11240566313450323,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentimento": 0.07174561128526645,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentimento": 0.09055091361437247,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "ban",
                "Sentimento": -0.05126939411098528,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "ban",
                "Sentimento": 0.0967781465357166,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "italy ban",
                "Sentimento": -0.401575,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "italy ban",
                "Sentimento": 0.16375,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "privacy",
                "Sentimento": -0.10222243958573075,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "privacy",
                "Sentimento": 0.09206016730178328,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "browser",
                "Sentimento": 0.21027664670658683,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "browser",
                "Sentimento": 0.09446546841898104,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "google",
                "Sentimento": 0.24002482517482515,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "google",
                "Sentimento": 0.08747736593722892,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "church",
                "Sentimento": 0.14810882352941174,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "church",
                "Sentimento": 0.06989789738214161,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "microsoft",
                "Sentimento": 0.03791739130434783,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "microsoft",
                "Sentimento": 0.08387802850930105,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "learning",
                "Sentimento": 0.3745450372208437,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "learning",
                "Sentimento": 0.09229668671780765,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "school",
                "Sentimento": 0.15754870340356564,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "school",
                "Sentimento": 0.0692709223923041,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentimento": 0.6024499999999999,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentimento": 0.1721897546897547,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "ban",
                "Sentimento": 0.0648280701754386,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "ban",
                "Sentimento": 0.06086591154350151,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "italy ban",
                "Sentimento": null,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "italy ban",
                "Sentimento": null,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "privacy",
                "Sentimento": 0.3657619354838709,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "privacy",
                "Sentimento": 0.09730854053364278,
                "Source": "TextBlob",
                "social": "Reddit"
            }
        ]
    }
};

const defaultEmbedOptionsTopic = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#topic-container', topic, defaultEmbedOptionsTopic).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});
