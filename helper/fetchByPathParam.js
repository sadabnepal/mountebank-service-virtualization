function fetchUser(request) {
    const { join } = require('path');
    const fs = require('fs');

    const userId = request.path.split('/').pop();
    const filePath = join(process.cwd(), 'response', 'users', `${userId}.json`);

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });

        const response = {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": data
        };
        return response;
    }
    return null;
}