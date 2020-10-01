function addBookFormAnimation(isShow, addBookForm){
    if(!isShow){
      addBookForm.animate([
        { transform: 'translateX(-105%)'},
        { transform: 'translateX(0)'}
      ], {
        duration: 800,
        fill: "forwards"
      })
    } else {
      addBookForm.animate([
        { transform: 'translateX(0)'},
        { transform: 'translateX(-105%)'}
      ], {
        duration: 800,
        fill: "forwards"
      })
    }
}

export default addBookFormAnimation;