//increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comments
export function addComment(postId, author, comment) {
  console.log("Dispatching add come");
  return{

    type:'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
//remove comment what post should we remove the comment from and what number
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
