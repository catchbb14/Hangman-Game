$(document).ready(function() {

    var words = 
    ['beachball', 'bikini', 'bike', 'boat', 'clam', 'conch', 'cooler', 'coral', 'crab', 'dune', 'family',
     'fish', 'frisbee', 'hat', 'island', 'kayak', 'lifegaurd', 'ocean', 'pelican', 'pier', 'popsicle', 'reef', 'relax',
     'sailboat', 'sand', 'sandals', 'sandbar', 'sandcastle', 'scuba', 'sea', 'seashell', 'seagull', 'shark', 'snorkle',
     'sunbathe', 'sunburn', 'sunglasses', 'sunscreen', 'surf', 'tide', 'towel', 'trunks', 'umbrella', 'vacation', 'waves'];
     var wordsUsed = [];

    var wins = 0;
    var losses = 0;

    // var currentWord;
    // var lettersCorrect;
    // var lettersIncorrect;
    // var guessesLeft;

    var currentGame = {
        currentWord: chooseWord(),
        lettersCorrect: [],
        lettersIncorrect: [],
        guessesLeft: 6,

        chooseWord: function() {
            words = shuffle(words);
            var randWord = words.pop();
            wordsUsed.push(randWord);
            return randWord;
        },

    };

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

});