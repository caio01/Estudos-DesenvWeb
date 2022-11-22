import collections from './data/collections.json' assert {type:'json'}
import playlists from './data/playlists.json' assert {type:'json'}

for(var i = 0; i < collections.length; i++) { 
    var body = `<div class="collection-title">
                    <h3>${collections[i].name}</h3>
                    <h5>VER TUDO</h5>
                </div>
                <div class="collection-cards">`

    for(var j = 0; j < collections[i].playlists.length; j++) {
        var x = collections[i].playlists[j] - 1

        body += `<div class="card">
                    <img class="card-img-top" src=${playlists[x].cover} alt="image-card"/>
                    <div class="card-body">
                        <h5>${playlists[x].name}</h5>
                        <p>${playlists[x].desc}</p>
                    </div>
                </div>`
    }

    body += `</div>`
    document.body.innerHTML += body
}