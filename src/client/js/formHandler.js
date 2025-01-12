// Import URL checker function
import { updateUI } from './updateResultstoUI';
import { isValidUrl } from './urlChecker';

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'http://localhost:8001/api'

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleSubmit);
})

async function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Check if the URL is valid
    const isValid = isValidUrl(formText);

    // If the URL is valid, send it to the server using the serverURL constant above
    if (isValid) {
        try {
            const sentiments = await sendUrlToServer(formText);
            updateUI(sentiments);
        } catch (error) {
            throw new Error("could not fetch data from API");
        }
    } else {
        alert('Not a valid URL, please check and resubmit!');
    }
}

// Function to send data to the server
async function sendUrlToServer(url) {
    try {
        const response = await fetch(serverURL + '/getSentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }), // Send the URL to the server
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        throw error;
    }
}

// Export the handleSubmit function
export { handleSubmit };
export { sendUrlToServer };