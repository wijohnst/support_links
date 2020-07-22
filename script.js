console.log('Welcome to Candid Support Links')



let linksListNode = document.getElementById('links-list');
let sortSelectNode = document.getElementById('sort-select')

let allTags = [];

// let linksData;

$.getJSON("./links_data.json",  function() {
    
})
.done( function(json){
   render_links(json)
   render_tags(json)
})


function render_links(linksObj){
   let {links} = linksObj;

      links.map(async (link,index) =>{
         document.getElementById('links-list')  
         let supportLink = document.createElement('li')
         let anchor = document.createElement('a')
         anchor.href= link.url
         anchor.innerText = link.text
         supportLink.appendChild(anchor)
         linksListNode.appendChild(supportLink)

         allTags.push(link.tags)
   })
}

function render_tags(linksObj){
   let { links } = linksObj;
   console.log(`Rendering ${linksObj.links}`)
   let uniqueTags = [...new Set(allTags.flat())] 

   uniqueTags.map((tag, index) =>{
      let linkOption = document.createElement('option')
      linkOption.value = tag 
      linkOption.innerText = tag
      sortSelectNode.appendChild(linkOption)
   })

}


function sortTags(){
    console.log(sortSelectNode.value)

   $.getJSON("./links_data.json", function (){

   })
   .done( function(json){
      
      let {links} = json;

      let filteredLinks = links.filter(link =>{

         let {tags} = link

         if(tags.includes(sortSelectNode.value) === true){
            return link;
         }
      })
      console.log({links:filteredLinks})
      clearList({links: filteredLinks}).then( (linksObj) => {
         render_links(linksObj)
      })
   })
}

async function clearList(linksObj){

   linksListNode.innerHTML = '';
   return linksObj
}

function resetSort(){

   $.getJSON('./links_data.json', function(){

   })
   .done( function(json){
      render_links(json);
   })
}


