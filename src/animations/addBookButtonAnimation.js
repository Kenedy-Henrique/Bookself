function bookButtonAnimation(isShow, animationLine){
    if(!isShow){
        animationLine.animate([
        { transform: 'rotate(0)'},
        { transform: 'rotate(-90deg)'}
      ], {
        duration: 800,
        fill: "forwards"
      })
    } else {
        animationLine.animate([
        { transform: 'rotate(-90deg)'},
        { transform: 'rotate(0)'}
      ], {
        duration: 800,
        fill: "forwards"
      })
    }
}

export default bookButtonAnimation;