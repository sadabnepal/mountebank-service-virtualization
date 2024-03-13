function updateUser(request) {

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": { ...JSON.parse(request.body), ...{ updatedAt: new Date() } }
    };

}