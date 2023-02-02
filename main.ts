let water = 0
basic.forever(function () {
    water = input.rotation(Rotation.Pitch)
    if (water > 90) {
    	
    } else if (water < 90) {
    	
    }
})
basic.forever(function () {
    basic.showNumber(water)
})
