function updateUser(request) {

    const userData = {
        id: String(Math.floor(Math.random() * 1000)),
        updatedAt: new Date()
    }
       
    const responseBody = {...JSON.parse(request.body), ...userData };

    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": responseBody
    };
    return response;

}