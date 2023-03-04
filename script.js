let mainContainer=document.querySelector('.mainContainer')
let create=document.querySelector('button')
let disable=document.querySelector('.disable')
let blogs=document.querySelector('.blogs')

function createBlog(){
    let modal=document.createElement('div')
    modal.classList.add('modal')
    document.body.appendChild(modal)

    mainContainer.classList.add('main')

    let newPost=document.createElement('form')
    newPost.classList.add('popup')
    
    let head=document.createElement('h2')
    head.classList.add('heading')
    head.textContent="Create A Post"

    let blogheading=document.createElement('textarea')
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
        modal.classList.remove('modal')
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

            let today=new Date().toLocaleString()
            let details=document.createElement('p')
            details.classList.add('myTime')
            details.innerText="Created At : " + today.substring(0,8) + " at" + today.substring(9,20)

            publishblock.appendChild(publishheading)
            publishblock.appendChild(publishpera)
            publishblock.appendChild(edit)
            publishblock.appendChild(deletes)
            publishblock.appendChild(details)
            blogs.appendChild(publishblock)
            newPost.classList.add('hidePopup')
            mainContainer.classList.remove('main')
            
            function deleteblog(){
                publishblock.remove()
                modal.classList.remove('modal')
            }

            function editblog(){
                modal.classList.add('modal')
                mainContainer.classList.add('main')

                let newPost_e=document.createElement('form')
                newPost_e.classList.add('popup')
                
                let head_e=document.createElement('h2')
                head_e.classList.add('heading')
                head_e.textContent="Edit A Post"

                let blogheading_e=document.createElement('textarea')
                blogheading_e.textContent=publishheading.innerText
                blogheading_e.classList.add('createheading')

                let blogpera_e=document.createElement('textarea')
                blogpera_e.textContent=publishpera.innerText
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

                let today_e=new Date().toLocaleString()
                details.innerText="Last Updated At : " + today_e.substring(0,8) + " at" + today_e.substring(9,20)

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
                    modal.classList.remove('modal')
                }

                function deleteblog2(){
                    newPost_e.classList.add('hidePopup')
                    mainContainer.classList.remove('main')
                    publishblock.remove()
                    modal.classList.remove('modal')
                }

                function saveblog(){

                    if(blogheading_e.value!="" && blogpera_e.value!=""){
                        publishheading.textContent=blogheading_e.value
                        publishpera.textContent=blogpera_e.value
                        
                        newPost_e.classList.add('hidePopup')
                        mainContainer.classList.remove('main')
                        modal.classList.remove('modal')
                    }else{
                        alert("Fill all fields properly")
                    }
                }

                close.addEventListener('click',closepopup2)
                delete2.addEventListener('click',deleteblog2)
                save.addEventListener('click',saveblog)
            }

            edit.addEventListener('click',editblog)
            deletes.addEventListener('click',deleteblog)
            modal.classList.remove('modal')
        }else{
            alert("Fill all fields properly")
        }
    }

    publish.addEventListener('click',publishPost)
    close.addEventListener('click',closepopup)
    cancel.addEventListener('click',closepopup)
}

create.addEventListener('click',createBlog)