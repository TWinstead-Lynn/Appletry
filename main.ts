input.onButtonPressed(Button.A, function () {
    basic.showString("Who waits for the shadow")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Adjectives[randint(0, 2)]))
    basic.showString("" + (Nouns[randint(0, 2)]))
    basic.showString("" + (Verbs[randint(0, 2)]))
    basic.showString("" + (Adverbs[randint(0, 2)]))
})
let Adverbs: string[] = []
let Verbs: string[] = []
let Nouns: string[] = []
let Adjectives: string[] = []
Adjectives = ["Tasty", "Wild", "Savory"]
Nouns = ["Cat", "Hat", "NASA"]
Verbs = ["Dances", "Throws", "Eats"]
Adverbs = ["Quickly", "Wildly", "Ironically"]
