function fetchPage(request) {
    const { join } = require('path');
    const fs = require('fs');

    const pageNumber = request.query.page;
    const filePath = join(process.cwd(), 'response', 'pages', `${pageNumber}.json`);

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