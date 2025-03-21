input.onButtonPressed(Button.A, function () {
    basic.showString("Who waits for the shadow")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Adjectives[randint(0, 5)]))
    basic.showString("" + (Nouns[randint(0, 5)]))
    basic.showString("" + (Verbs[randint(0, 5)]))
    basic.showString("" + (Adjectives[randint(0, 5)]))
    basic.showString("" + (Nouns[randint(0, 5)]))
    basic.showString("" + (Adverbs[randint(0, 5)]))
})
let Adverbs: string[] = []
let Verbs: string[] = []
let Nouns: string[] = []
let Adjectives: string[] = []
Adjectives = [
"Tasty",
"Wild",
"Savory",
"Bland",
"Calm",
"Sweet"
]
Nouns = [
"Cat",
"Hat",
"NASA",
"Dog",
"Shoe",
"Planet"
]
Verbs = [
"Dances",
"Throws",
"Eats",
"Sits",
"Catches",
"Drinks"
]
Adverbs = [
"Quickly",
"Wildly",
"Ironically",
"Slowly",
"Calmly",
"Logically"
]
