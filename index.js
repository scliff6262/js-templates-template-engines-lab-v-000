function createPost(){
  const author = document.getElementById("postAuthor").value
  const title = document.getElementById("postTitle").value
  const body = document.getElementById("postBody").value

  let postTemplate = document.getElementById("post-template").innerHTML
  const postTemplateFn = _.template(postTemplate)

  let pageTemplate = document.getElementById("page-template").innerHTML
  const pageTemplateFn = _.template(pageTemplate)

  const postTemplateHTML = postTemplateFn({'author': author, 'title': title, 'body': body})
  const pageTemplateHTML = pageTemplateFn({'post': postTemplateHTML})

  const mainHTML = document.getElementsByTagName('main')[0]
  mainHTML.innerHTML += pageTemplateHTML
}

function postComment(){
  const commenter = document.getElementById("commenter").value
  const commentBody = document.getElementById("commentBody").value
}
