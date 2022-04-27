function writeCards(names, event) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards 
}

function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i)
        i--
    }
}