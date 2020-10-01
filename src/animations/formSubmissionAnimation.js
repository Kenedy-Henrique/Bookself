function formSubmissionAnimation(addBookForm, animationLine){
    addBookForm.animate([
        { transform: 'translateX(-105%)'},
        { transform: 'translateX(0)'}
    ], {
        duration: 800,
        fill: "forwards"
    })
    animationLine.animate([
        { transform: 'rotate(-90deg)'},
        { transform: 'rotate(0)'}
    ], {
        duration: 800,
        fill: "forwards"
    })
}

export default formSubmissionAnimation;