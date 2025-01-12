function isValidUrl(urlToTest) {
    try {
        new URL(urlToTest);
        return true;
    } catch (error) {
        return false;
    }
}

export { isValidUrl };