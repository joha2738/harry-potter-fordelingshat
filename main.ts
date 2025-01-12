input.onGesture(Gesture.Shake, function () {
    hus = randint(0, 3)
    if (hus == 0) {
        basic.showString("Gryffindor")
    } else if (hus == 1) {
        basic.showString("Slytherin")
    } else if (hus == 2) {
        basic.showString("Hufflepuff")
    } else {
        basic.showString("Ravenclaw")
    }
})
let hus = 0
basic.showString("Ryst mig")
