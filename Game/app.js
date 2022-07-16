document.addEventListener('DOMContentLoaded', () => {
    //card options 
    const cardArray = [
        {
            name: 'bucs',
            img: 'images/bucs.png'
        },
        {
            name: 'bucs',
            img: 'images/bucs.png'
        },
        {
            name: 'cowboys',
            img: 'images/cowboys.png'
        },
        {
            name: 'cowboys',
            img: 'images/cowboys.png'
        },
        {
            name: 'falcons',
            img: 'images/falcons.png'
        },
        {
            name: 'falcons',
            img: 'images/falcons.png'
        },
        {
            name: 'giants',
            img: 'images/giants.png'
        },
        {
            name: 'giants',
            img: 'images/giants.png'
        },
        {
            name: 'jets',
            img: 'images/jets.png'
        },
        {
            name: 'jets',
            img: 'images/jets.png'
        },
        {
            name: 'packers',
            img: 'images/packers.png'
        },
        {
            name: 'packers',
            img: 'images/packers.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/football.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src' , 'images/white.png')
            cards[optionTwoId].setAttribute('src' , 'images/white.png')
            cardsWon.push(cardsChosen)
        }   else {
            cards[optionOneId].setAttribute('src', 'images/football.png')
            cards[optionTwoId].setAttribute('src', 'images/football.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }   

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})