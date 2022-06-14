const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const beatlesAlbums = {
    'please please me':{
        'title': 'Please Please Me',
        'releaseDate': '22 March 1963',
        'trackList': ['I Saw Her Standing There', 'Misery', 'Anna (Go to Him)', 'Chains', 'Boys', 'Ask Me Why', 'Please Please Me', 'Love Me Do', 'P.S. I Love You', "Baby It's You", 'Do You Want to Know a Secret', 'A Taste of Honey', "There's a Place", 'Twist and Shout'],
        'weeksAtNumberOne': 30, 
        'weeksOnChart': 70

    },

    'with the beatles':{
        'title': 'With The Beatles',
        'releaseDate': '22 November 1963',
        'trackList': ["It Won't Be Long", "All I've Got to Do", 'All My Loving', "Don't Bother Me", 'Little Child', 'Till There Was You', 'Please Mr. Postman', 'Roll Over Beethoven', 'Hold Me Tight', "You Really Got a Hold on Me", 'I Wanna Be Your Man', 'Devil in Her Heart', "Not a Second Time", "Money (That's What I Want)"],
        'weeksAtNumberOne': 21,
        'weeksOnChart': 50

    },

    "a hard day's night":{
        'title': "A Hard Day's Night",
        'releaseDate': '10 July 1964',
        'trackList': ["A Hard Day's Night", 'I Should Have Known Better', 'If I Fell', "I'm Happy Just To Dance With You", 'And I Love Her', 'Tell Me Why', "Can't Buy Me Love", 'Any Time at All', "I'll Cry Instead", 'Things We Said Today', 'When I Get Home', "You Can't Do That", "I'll Be Back"],
        'weeksAtNumberOne': 21,
        'weeksOnChart': 39
    },

    'beatles for sale':{
        'title': 'Beatles For Sale',
        'releaseDate': '4 December 1964',
        'trackList': ['No Reply', "I'm a Loser", "Baby's in Black", 'Rock and Roll Music', "I'll Follow the Sun", 'Mr. Moonlight', 'Kansas City / Hey-Hey-Hey-Hey!', 'Eight Days a Week', 'Words of Love', "Honey Don't", 'Every Little Thing', "I Don't Want to Spoil the Party", "What Your're Doing", "Everybody's Trying to Be My Baby"],
        'weeksAtNumberOne': 11,
        'weeksOnChart': 46
    },

    'help!':{
        'title': 'Help!',
        'releaseDate': '6 August 1965',
        'trackList': ['Help!', 'The Night Before', "You've Got to Hide Your Love Away", 'I Need You', 'Another Girl', "You're Going to Lose That Girl", 'TIcket to Ride', 'Act Naturally', "It's Only Love", 'You Like Me Too Much', 'Tell Me What You See', "I've Just Seen a Face", 'Yesterday', 'Dizzy Miss Lizzy'],
        'weeksAtNumberOne': 9,
        'weeksOnChart': 39
    },

    'rubber soul':{
        'title': 'Rubber Soul',
        'releaseDate': '3 December 1965',
        'trackList': ['Drive My Car', 'Norwegian Wood (This Bird Has Flown)', "You Won't See Me", 'Nowhere Man', 'Think for Yourself', 'The Word', 'Michelle', 'What Goes On', 'Girl', "I'm Looking Through You", 'In My Life', 'Wait', 'If I Needed Someone', 'Run for Your Life'],
        'weeksAtNumberOne': 8,
        'weeksOnChart': 42
    },

    'revolver':{
        'title': 'Revolver',
        'releaseDate': '5 August 1966',
        'trackList': ['Taxman', 'Eleanor Rigby', "I'm Only Sleeping", 'Love You To', 'Here, There and Everywhere', 'Yellow Submarine', 'She Said She Said', 'Good Day Sunshine', 'And Your Bird Can Sing', 'For No One', 'Doctor Robert', 'I Want to Tell You', 'Got to Get You into My Life', 'Tomorrow Never Knows'],
        'weeksAtNumberOne': 7,
        'weeksOnChart': 34
    },

    "sgt. pepper's lonely hearts club band":{
        'title': "Sgt. Pepper's Lonely Hearts Club Band",
        'releaseDate': '26 May 1967',
        'trackList': ["Sgt. Pepper's Lonele Hearts Club Band", 'With a Little Help from My Friends', 'Lucy in the Sky with Diamonds', 'Getting Better', 'Fixing a Hole', "She's Leaving Home", 'Being for the Benefit of Mr. Kite!', 'Within You Without You', "When I'm Sixty-Four", 'Lovely Rita', 'Good Morning Good Morning', "Sgt. Pepper's Lonely Hearts Club Band (Reprise)", 'A Day in the Life'],
        'weeksAtNumberOne': 28,
        'weeksOnChart': 277
    },

    'magical mystery tour':{
        'title': 'Magical Mystery Tour',
        'releaseDate': '27 November 1967',
        'trackList': ['Magical Mystery Tour', 'The Fool on the Hill', 'Flying', 'Blue Jay Way', 'Your Mother Should Know', 'I Am the Walrus', 'Hello, Goodbye', 'Strawberry Fields Forever', 'Penny Lane', "Baby, You're a Rich Man", 'All You Need Is Love'],
        'weeksAtNumberOne': 0,
        'peakChartPos': 31,
        'weeksOnChart': 10
    },

    'the beatles':{
        'title': 'The Beatles',
        'releaseDate': '22 November 1968',
        'trackList': ['Back in the U.S.S.R.', 'Dear Prudence', 'Glass Onion', 'Ob-La-Di, Ob-La-Da', 'Wild Honey Pie', 'The Continuing Story of Bungalow Bill', 'While My Guitar Gently Weeps', 'Happiness Is a Warm Gun', 'Martha My Dear', "I'm So Tired", 'Blackbird', 'Piggies', 'Rocky Raccoon', "Don't Pass Me By", "Why Don't We Do It in the Road", 'I Will', 'Julia', 'Birthday', 'Yer Blues', "Mother Nature's Son", "Everybody's Got Something to Hide Except Me and My Monkey", 'Sexie Sadie', 'Helter Skelter', 'Long, Long, Long', 'Revolution 1', 'Honey Pie', 'Savoy Truffle', 'Cry Baby Cry', 'Revolution 9', 'Good Night'],
        'weeksAtNumberOne': 8,
        'weeksOnChart': 37
    },

    'yellow submarine':{
        'title': 'Yellow Submarine',
        'releaseDate': '13 January 1969',
        'trackList': ['Yellow Submarine', 'Only a Northern Song', 'All Together Now', 'Hey Bulldog', "It's All Too Much", 'All You Need Is Love', 'Pepperland', 'Sea of Time', 'Sea of Holes', 'Sea of Monsters', 'March of the Meanies', 'Pepperland Laid Waste', 'Yellow Submarine in Pepperland'],
        'weeksAtNumberOne': 0,
        'peakChartPos': 03,
        'weeksOnChart': 10
    },

    'abbey road':{
        'title': 'Abbey Road',
        'releaseDate': '26 September 1969',
        'trackList': ['Come Together', 'Something', "Maxwell's Silver Hammer", 'Oh! Darling', "Octopus's Garden", "I Want You (She's So Heavy)", 'Here Comes the Sun', 'Because', 'You Never Give Me Your Money', 'Sun King', 'Mean Mr. Mustard', 'Polythene Pam', 'She Came In Through the Bathroom Window', 'Golden SLumbers', 'Carry That Weight', 'The End', 'Her Majesty'],
        'weeksAtNumberOne': 17,
        'weeksOnChart': 97,
    },

    'let it be':{
        'title': 'Let It Be',
        'releaseDate': '8 May 1970',
        'trackList': ['Two of Us', 'Dig a Pony', 'Across the Universe', 'I Me Mine', 'Dig It', 'Let It Be', 'Maggie Mae', "I've Got a Feeling", 'One After 909', 'The Long and Winding Road', 'For You Blue', 'Get Back'],
        'weeksAtNumberOne': 03,
        'weeksOnChart': 53
    },

    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'caffine': 'unknown',
        'steepTime': 'unknown',
        'flavor': 'unknown'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const albumName = req.params.name.toLowerCase()
    if(beatlesAlbums[albumName]){
        res.json(beatlesAlbums[albumName])
    }else{
        res.json(beatlesAlbums['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})