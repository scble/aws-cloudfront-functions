function handler(event) {
    var request = event.request;
    var hostname = request.headers.host.value;
    var uri = request.uri;
    var newurl = '';

    if (hostname.includes('www')) {
        return request;
    }
    else {
        newurl = `https://www.${hostname}${uri}`;
        var response = {
            statusCode: 302,
            statusDescription: 'Found',
            headers: {
                "location": { "value": newurl }
            }
        }
        return response;
    }
}
