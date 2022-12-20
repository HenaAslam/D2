function newLinkToNavBar(newlink){
let navbarNode=document.querySelector('.nav');
let newLink=document.createElement('span')
newLink.innerText=newlink
navbarNode.appendChild(newLink)
}


function titleColor(){
    let title=document.querySelector('.jumbotron h1')
    title.style.color='red'
}

function backgroundOfJumbotron(){
    let jumbotronNode=document.querySelector('.jumbotron')
    jumbotronNode.classList.add('greenbg')
}

function removeTwitter(){
    let twitterNode=document.querySelector('aside >.p-4:nth-of-type(3)>ol>li:nth-of-type(2)')
    twitterNode.hidden=true;
}

window.onload=removeTwitter


function remove50(){
    let firstparas=document.querySelectorAll('.blog-post>h2+p ')
    for(let i=0;i<firstparas.length;i++){
    let firstpara=firstparas[i];
    firstpara.innerText=firstpara.innerText.substring(50)
    }

}

function newBlogPost(){
    let mainDiv=document.querySelector('.blog-main');
    let blogDiv=document.createElement('div')
    blogDiv.classList.add('blog-post');
    let title=document.createElement('h2')
    title.classList.add('blog-post-title')
    title.innerText='My blog'
    let text=document.createElement('p')
    text.innerText='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    blogDiv.appendChild(title)
    blogDiv.appendChild(text)
    mainDiv.appendChild(blogDiv)
    //insert before- name,where
}


function removeLastBlogPost(){
    let lastblog=document.querySelector('.blog-post:last-of-type')
    lastblog.hidden=true
}







function alertAuthor(){
    let authorNodes=document.querySelectorAll('.blog-post>.blog-post-meta>a')
    
    for(let i=0;i<authorNodes.length;i++){
         let authorNode=authorNodes[i]
         authorNode.addEventListener("mouseover", function(){
            alert(authorNode.innerText)
         });
       
        }
    }
   

alertAuthor()