import collections from './data/collections.json' assert {type:'json'}
import playlists from './data/playlists.json' assert {type:'json'}

for(var i = 0; i < collections.length; i++) {
    var divTitle = document.createElement('div')
    divTitle.className = 'collection-title'

        var h3 = document.createElement('h3')
        h3.innerHTML = collections[i].name
        divTitle.appendChild(h3)

        var h5 = document.createElement('h5')
        h5.innerHTML = 'VER TUDO'
        divTitle.appendChild(h5)

    document.body.appendChild(divTitle)

    var divCollectionCards = document.createElement('div')
    divCollectionCards.className = 'collection-cards'


    for(var j = 0; j < collections[i].playlists.length; j++) {
        var x = collections[i].playlists[j] - 1
        var divCard = document.createElement('div')
            divCard.className = 'card'

                var img = document.createElement('img')
                img.className = 'card-img-top'
                img.src = playlists[x].cover
                img.alt = 'image-card'
                divCard.appendChild(img)

                var divCardBody = document.createElement('div')
                divCardBody.className = 'card-body'

                    var h5play = document.createElement('h5')
                    h5play.innerHTML = playlists[x].name
                    divCardBody.appendChild(h5play)

                    var p = document.createElement('p')
                    p.innerHTML = playlists[x].desc
                    divCardBody.appendChild(p)

                divCard.appendChild(divCardBody)
            divCollectionCards.appendChild(divCard)
        
    }

    document.body.appendChild(divCollectionCards)

}