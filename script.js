console.log('Welcome to Candid Support Links')

let linksListNode = document.getElementById('links-list');
let sortSelectNode = document.getElementById('sort-select')
let allTags = [];

$.getJSON("./links_data.json", async (linksData) => {
    document.getElementById('links-list')
    
    
    linksData.links.map((link,index) =>{
        console.log('Rendering links...')
        

        let supportLink = document.createElement('li')
        let anchor = document.createElement('a')
        anchor.href= link.url
        anchor.innerText = link.text
        supportLink.appendChild(anchor)
        linksListNode.appendChild(supportLink)

        allTags.push(link.tags);
    })
}).then( () => {
    let uniqueTags = [...new Set(allTags.flat())] 
    
    uniqueTags.map((tag, index) =>{
        console.log(tag)
        let linkOption = document.createElement('option')
        linkOption.value = tag 
        linkOption.innerText = tag
        sortSelectNode.appendChild(linkOption)
    })
    
})






