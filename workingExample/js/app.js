"use strict";
const matches = [
    {
        sport: 'soccer',
        participant1: 'Chelsea',
        participant2: 'Arsenal',
        score: '2:1',
    },
    {
        sport: 'volleyball',
        participant1: 'Germany',
        participant2: 'France',
        score: '3:0,25:23,25:19,25:21',
    },
    {
        sport: 'handball',
        participant1: 'Pogoń Szczeciń',
        participant2: 'Azoty Puławy',
        score: '34:26',
    },
    {
        sport: 'basketball',
        participant1: 'GKS Tychy',
        participant2: 'GKS Katowice',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
    },
    {
        sport: 'tennis',
        participant1: 'Maria Sharapova',
        participant2: 'Serena Williams',
        score: '2:1,7:6,6:3,6:7',
    },
    {
        sport: 'ski jumping',
    }
];
class EventParser {
    makeEventName(match) {
        const versusDelimiter = match.sport === 'tennis' || match.sport === 'handball' ? ' vs ' : ' - ';
        return (match.participant1 && match.participant2 ?
            `${match.participant1}${versusDelimiter}${match.participant2}` : 'Exception: invalid sport');
    }
    formatScore(match) {
        switch (match.sport) {
            case 'soccer':
            case 'handball':
                return match.score;
            case 'volleyball':
            case 'tennis':
                if (typeof match.score === 'string') {
                    const scoresSplited = match.score.split(',');
                    return (`Main score:  ${scoresSplited[0]} (set1  ${scoresSplited[1]}, set2  ${scoresSplited[2]}, set3  ${scoresSplited[3]})`);
                }
                break;
            case 'basketball':
                if (Array.isArray(match.score)) {
                    return match.score.flat().join(',');
                }
                break;
            default:
                return 'Exception: invalid sport';
        }
        return 'Exception: invalid sport';
    }
}
let matchesParsed = matches.map((match) => {
    const parser = new EventParser();
    return {
        name: parser.makeEventName(match),
        score: parser.formatScore(match)
    };
}).filter(matchParsed => matchParsed.name !== 'Exception: invalid sport' && matchParsed.score !== 'Exception: invalid sport');
console.log(matchesParsed);
//# sourceMappingURL=app.js.map