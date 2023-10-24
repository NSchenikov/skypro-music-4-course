const getLikesIndxes = () => {
  for (let myTrack of myTracks) {
    setLikesIndexes((likesIndexes) => [...likesIndexes, myTrack.id])
  }
  let outputArray = []
  let count = 0
  let start = false
  for (let j = 0; j < likesIndexes.length; j++) {
    for (let k = 0; k < outputArray.length; k++) {
      if (likesIndexes[j] == outputArray[k]) {
        start = true
      }
    }
    count++
    if (count == 1 && start == false) {
      outputArray.push(likesIndexes[j])
    }
    start = false
    count = 0
    setLikesIndexes(outputArray)
  }
}
