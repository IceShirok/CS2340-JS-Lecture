function randPhrase() {
    var randPhrases=["Testing out random phrases!",
                        "Join the club!",
                        "What's your favorite weapon?",
                        "Webmaster loves foil."];
    document.write(randPhrases[Math.floor((Math.random()*randPhrases.length))]);
};
randPhrase();