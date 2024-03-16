function loginUser(request) {

    const expected = {
        email: null,
        password: null
    };

    const actual = JSON.parse(request.body);

    function isRequestPayloadValid(expected, actual) {
        const isLengthMatching = Object.keys(expected).length == Object.keys(actual).length;
        const hasEmailAndPassword =  actual.hasOwnProperty("email") && (actual.hasOwnProperty("password"));
        return isLengthMatching && hasEmailAndPassword;
    }

    function responseForInvalidPayload(payload) {
        let errorMessage = null;

        if (payload.hasOwnProperty("email") && !(payload.hasOwnProperty("password"))) {
            errorMessage = { "error": "Missing password" }
        } else if (payload.hasOwnProperty("password") && !(payload.hasOwnProperty("email"))) {
            errorMessage = { "error": "Missing email or username" }
        } else {
            errorMessage = { "error": "Missing email or username" }
        }

        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json"
            },
            body: errorMessage
        }
    }

    if (!isRequestPayloadValid(expected, actual)) {
        return responseForInvalidPayload(actual);
    }

    function randomAlphaNumeric(length) {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = length; i > 0; --i) {
            result = result + chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    };

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            token: randomAlphaNumeric(20)
        }
    }

}