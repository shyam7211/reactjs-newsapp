import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Cameron Temple",
            "title": "Eddie Hearn says crazy money on offer to Anthony Joshua from Saudi but Tyson Fury in no-man’s land...",
            "description": "Eddie Hearn believes if Tyson Fury vs Anthony Joshua were to ever happen, it could only be in Saudi Arabia. The Saudi’s have been making quite the splash in the sports world, especially with …",
            "url": "https://talksport.com/sport/boxing/1448027/tyson-fury-anthony-joshua-eddie-hearn-saudi-arabia-money/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/HB-TALKSPORT-FURY-JOSHUA-HEARN.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-06-07T10:06:17Z",
            "content": "Eddie Hearn believes if Tyson Fury vs Anthony Joshua were to ever happen, it could only be in Saudi Arabia.\r\nThe Saudi's have been making quite the splash in the sports world, especially with the rec… [+3525 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Philippe Escande",
            "title": "Transports : « Le choix du fer contre le bitume se comprend, mais cela n’empêche pas d’interroger le rapport coût-bénéfice »",
            "description": "Le volet mobilités du contrat Etat-région, qui fixe le soutien de l’Etat aux investissements des régions dans ce domaine sur la période 2023-2027 est dévoilé mercredi. Après des années d’efforts et des milliards investis, la part de marché du train ne progres…",
            "url": "https://www.lemonde.fr/economie/article/2023/06/07/transports-le-choix-du-fer-contre-le-bitume-se-comprend-mais-cela-n-empeche-pas-d-interroger-le-rapport-cout-benefice_6176557_3234.html",
            "urlToImage": "https://img.lemde.fr/2023/06/07/0/0/4320/2880/1440/960/60/0/d465f79_1686126510478-000-9wu3zk.jpg",
            "publishedAt": "2023-06-07T09:27:29Z",
            "content": "Un cheminot, à la gare de Villefranche-de-Conflent (Pyrénées-Orientales), le 21 janvier 2022. RAYMOND ROIG / AFP\r\nOn parle train, mercredi 7 juin, au conseil des ministres. Le plan davenir pour les t… [+2712 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Dylan Gwinn",
            "title": "'Money over Morals': PGA Tour Faces Intense Backlash Amid LIV Merger",
            "description": "The sports world received the shock of the year on Tuesday after it was announced that the PGA Tour, and LIV Golf would all merge.",
            "url": "http://www.breitbart.com/sports/2023/06/06/money-over-morals-pga-tour-faces-intense-backlash-amid-liv-merger/",
            "urlToImage": "https://media.breitbart.com/media/2023/06/Cliff-Hawkins_Getty-Images-2-640x335.jpg",
            "publishedAt": "2023-06-06T17:34:40Z",
            "content": "The sports world received the shock of the year on Tuesday after it was announced that the PGA Tour, LIV Golf, and the European PGA Tour would all merge into one giant for-profit golf league.\r\nPGA To… [+4937 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": null,
            "title": "☄️ Knicks Playoff Special ",
            "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
            "url": "https://bleacherreport.com/videos/431020-knicks-start-playoff-run--hero-ball",
            "urlToImage": null,
            "publishedAt": "2023-04-17T21:22:15.1716203Z",
            "content": "Knicks Start Playoff Run | Hero Ball"
        }
    ]
    constructor(){
        super();
        this.setState = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                <h2>Top Headlines of the day</h2>
                    <div className="row my-2">
                        <div className="col-md-4">
                            <NewsItem title="Title - 1" description="Description of the News" imageUrl="https://media.breitbart.com/media/2023/06/Cliff-Hawkins_Getty-Images-2-640x335.jpg" newsUrl="todo" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="Title - 2" description="Description of the News" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="Title - 3" description="Description of the News" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
