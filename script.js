const figure = ['Nicolo Machiavelli', 'Miyamoto Musashi', 'Robert Greene', 'Sun Tzu', 'Laozi', 'Rumi', 'Jordan B. Peterson']
const theme = ['Power', 'Politics', 'Psychology', 'Strategy', 'Life Skills', 'Wisdom', 'Love']
const advice = {
    power: ['Before all else, be armed.', 'Power cannot accrue to those who squander their treasure of words.'],
    wisdom: ['The wise man does at once what the fool does finally.', 'A man cannot understand the art he is studying if he only looks for the end result without taking the time to delve deeply into the reasoning of the study.', 'There is nothing outside yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outsdie of yourself.'],
    strategy: ['Men should be treated generously or destroyed, because they take revenge for slight injuries - for heavy ones they cannot.', 'So, in war, the way is to avoid what is strong and strike at what is weak.' ],
    love: ['Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built aginst it.'],
    politics: ['Politics have no relation to morals', 'It is better to be feared than loved, if you cannot be both.', 'A prince must not have any other object nor any other thought... but war, its institutions, and its discipline, because that is the only art befitting one who commands.'],
    lifeSkills: ['Pursue what is meaningful, not what is expedient.', 'Treat yourself like someone you are responsible for helping.', 'Do not waste time idling or thinking after you have set your goals.' ],
    psychology : ['If you aren\'t moving forward in your life there is some idea, mode of action or habit you\'re so in love with you won\'t let go of it.', 'The vulgar crowd is always taken in by appearences, and the world consists cheifly of the vulgar.']
}

const newAdvice = advice.power.concat(advice.wisdom, advice.strategy, advice.love, advice.politics, advice.lifeSkills, advice.psychology);

const randomOut = (arr) => {
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

const messageGenOne = (figure, theme, newAdvice) => {
    randomOut(figure);
    randomOut(theme);
    randomOut(newAdvice);
}





console.log(randomOut(newAdvice));
//console.log(randomOut(advice.));
console.log(randomOut(theme));

console.log(figure[0] + ` on ` + theme[6] + `. ` + advice.power[0]);


