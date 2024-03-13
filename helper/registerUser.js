function registerUser(request) {

    const expected = {
        email: null,
        password: null
    };

    const actual = JSON.parse(request.body);

    if (Object.keys(expected).length !== Object.keys(actual).length) {

        let errorMessage = null;

        if (actual.hasOwnProperty("email") && !(actual.hasOwnProperty("password"))) {
            errorMessage = { "error": "Missing password" }
        } else if (actual.hasOwnProperty("password") && !(actual.hasOwnProperty("email"))) {
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
            id: Math.floor(Math.random() * 20) + 1,
            token: randomAlphaNumeric(20)
        }
    }

}