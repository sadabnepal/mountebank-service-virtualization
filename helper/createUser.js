function createUser(request) {

    const userData = {
        id: String(Math.floor(Math.random() * 1000)),
        createdAt: new Date()
    }
       
    const responseBody = {...JSON.parse(request.body), ...userData };

    const response = {
        "statusCode": 201,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": responseBody
    };
    return response;

}