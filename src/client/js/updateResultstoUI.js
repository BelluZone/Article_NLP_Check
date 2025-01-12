function updateUI(sentiments) {
    const resultsForm = document.getElementById('results');
    const resultsString = createStringForDom(sentiments);

    resultsForm.innerHTML = resultsString;
    return resultsString;
}

function createStringForDom(sentiments) {
    const dataToShow = {
        Agreement: sentiments.agreement,
        Confidence: sentiments.confidence,
        Irony: sentiments.irony,
        Polarity: sentiments.score_tag,
        Subjectivity: sentiments.subjectivity
    }

    switch (sentiments.score_tag) {
        case 'P+':
            dataToShow.Polarity = 'STRONG POSITIVE'
            break;
        case 'P':
            dataToShow.Polarity = 'POSITIVE'
            break;
        case 'NEU':
            dataToShow.Polarity = 'NEUTRAL'
            break;
        case 'N':
            dataToShow.Polarity = 'NEGATIVE'
            break;
        case 'N-':
            dataToShow.Polarity = 'STRONG NEGATIVE'
            break;
        case 'NONE':
            dataToShow.Polarity = 'NONE'
            break;
        default:
            'Not Available'
            break;
    }

    let stringToAppend = '';

    for (const key in dataToShow) {
        if (Object.prototype.hasOwnProperty.call(dataToShow, key)) {
            stringToAppend += `<p>${key}: ${dataToShow[key]}</p>`;
        }
    }
    return stringToAppend;
}

export { updateUI, createStringForDom };