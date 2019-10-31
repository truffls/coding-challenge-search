import uuid from 'uuid';

function createSearchItem(text) {
    return {
        id: uuid(),
        text
    };
}

const searchableItems = [
    createSearchItem('apple'),
    createSearchItem('pear'),
    createSearchItem('orange'),
    createSearchItem('grape'),
    createSearchItem('banana')
];

export function getSearchResults(query) {
    const lowerCaseQuery = query.toLowerCase();

    const results = searchableItems.filter(({ text }) => {
        return text.indexOf(lowerCaseQuery) !== -1;
    });

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                createResponse(200, {
                    count: results.length,
                    results
                })
            );
        }, 2000);
    });
}

function createResponse(statusCode, data = null) {
    return {
        statusCode,
        data
    };
}