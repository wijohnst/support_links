console.log('Welcome to Candid Support Links')

let linksListNode = document.getElementById('links-list');

$.getJSON("./links_data.json", (linksData) => {
    document.getElementById('links-list')
    
    
    linksData.links.map((link,index) =>{
        console.log('Rendering links...')
        let supportLink = document.createElement('li')
        let anchor = document.createElement('a')
        anchor.href= link.url
        anchor.innerText = link.text
        supportLink.appendChild(anchor)
        linksListNode.appendChild(supportLink)

    })
})


