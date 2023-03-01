const url = 'https://webhook.site/634017c8-6716-4996-aff3-461e1fb12e64';

async function post(values) {
    return await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(values)
    });
}

export default { post };