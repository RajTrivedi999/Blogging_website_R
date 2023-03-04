let mainContainer=document.querySelector('.mainContainer')
let create=document.querySelector('button')
let disable=document.querySelector('.disable')
let blogs=document.querySelector('.blogs')

function createBlog(){

    mainContainer.classList.add('main')

    let newPost=document.createElement('form')
    newPost.classList.add('popup')
    
    let head=document.createElement('h2')
    head.classList.add('heading')
    head.textContent="Create A Post"

    let blogheading=document.createElement('input')
    blogheading.placeholder="Enter Your heading...."
    blogheading.classList.add('createheading')

    let blogpera=document.createElement('textarea')
    blogpera.placeholder="Enter Your Blog Post...."
    blogpera.classList.add('createpera')

    let publish=document.createElement('button')
    publish.textContent="Publish Post"
    publish.classList.add('createbutton')
    publish.type='button'

    let cancel=document.createElement('button')
    cancel.textContent="Cancel Post"
    cancel.classList.add('createbutton')
    cancel.type='button'

    let buttons=document.createElement('div')
    buttons.style.background='white'

    let close=document.createElement('button')
    close.classList.add('material-symbols-outlined')
    close.textContent="Close"
    close.type='button'

    buttons.appendChild(publish)
    buttons.appendChild(cancel)
    newPost.appendChild(head)
    newPost.appendChild(blogheading)
    newPost.appendChild(blogpera)
    newPost.appendChild(buttons)
    newPost.appendChild(close)
    disable.appendChild(newPost)

    function closepopup(){
        newPost.classList.add('hidePopup')
        mainContainer.classList.remove('main')
    }

    function publishPost(){
        if(blogheading.value!="" && blogpera.value!=""){

            let publishblock=document.createElement('div')
            publishblock.classList.add('pblock')
            
            let publishheading=document.createElement('h2')
            publishheading.classList.add('pheading')
            publishheading.textContent=blogheading.value

            let publishpera=document.createElement('p')
            publishpera.classList.add('ppera')
            publishpera.textContent=blogpera.value

            let edit=document.createElement('button')
            edit.textContent="Edit Post"
            edit.classList.add('pbutton')

            let deletes=document.createElement('button')
            deletes.textContent="Delete Post"
            deletes.classList.add('pbutton')

            //let today=new Date().getTime

            publishblock.appendChild(publishheading)
            publishblock.appendChild(publishpera)
            publishblock.appendChild(edit)
            publishblock.appendChild(deletes)
            //publishblock.appendChild(today)
            blogs.appendChild(publishblock)
            newPost.classList.add('hidePopup')
            mainContainer.classList.remove('main')
            
            function deleteblog(){
                publishblock.remove()
            }

            function editblog(){
                mainContainer.classList.add('main')

                let newPost_e=document.createElement('form')
                newPost_e.classList.add('popup')
                
                let head_e=document.createElement('h2')
                head_e.classList.add('heading')
                head_e.textContent="Edit A Post"

                let blogheading_e=document.createElement('input')
                blogheading_e.textContent=publishheading.innerText
                blogheading_e.classList.add('createheading')

                let blogpera_e=document.createElement('textarea')
                blogpera_e.textContent=blogpera.value
                blogpera_e.classList.add('createpera')

                let save=document.createElement('button')
                save.textContent="Save Post"
                save.classList.add('createbutton')
                save.type='button'

                let delete2=document.createElement('button')
                delete2.textContent="Delete Post"
                delete2.classList.add('createbutton')
                delete2.type='button'

                let buttons=document.createElement('div')
                buttons.style.background='white'

                let close=document.createElement('button')
                close.classList.add('material-symbols-outlined')
                close.textContent="Close"
                close.type='button'

                buttons.appendChild(save)
                buttons.appendChild(delete2)
                newPost_e.appendChild(head_e)
                newPost_e.appendChild(blogheading_e)
                newPost_e.appendChild(blogpera_e)
                newPost_e.appendChild(buttons)
                newPost_e.appendChild(close)
                disable.appendChild(newPost_e)

                function closepopup2(){
                    newPost_e.classList.add('hidePopup')
                    mainContainer.classList.remove('main')
                }

                function deleteblog2(){
                    newPost_e.classList.add('hidePopup')
                    mainContainer.classList.remove('main')
                    publishblock.remove()
                }
                delete2.addEventListener('click',deleteblog2)
                close.addEventListener('click',closepopup2)
            }

            edit.addEventListener('click',editblog)
            deletes.addEventListener('click',deleteblog)
        }else{
            alert("Fill all fields properly")
        }
    }

    publish.addEventListener('click',publishPost)
    close.addEventListener('click',closepopup)
    cancel.addEventListener('click',closepopup)
}

create.addEventListener('click',createBlog)