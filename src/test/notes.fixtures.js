const faker = require('faker')
function makeNotesArray() {
    return [
        {
            id: 1,
            name: "Dogs",
            date_created: "2019-01-03T00:00:00.000Z",
            folder: 1,
            content: faker.lorem.paragraphs()
        },
        {
            id: 2,
            name: "Cats",
            date_created: "2018-08-15T23:00:00.000Z",
            folder: 2,
            content: faker.lorem.paragraphs()
        },
        {
            id: 3,
            name: "Pigs",
            date_created: "2018-03-01T00:00:00.000Z",
            folder: 2,
            content: faker.lorem.paragraphs()
        },
        {
            id: 4,
            name: "Birds",
            date_created: "2019-01-04T00:00:00.000Z",
            folder: 1,
            content: faker.lorem.paragraphs()
        },
        {
            id: 5,
            name: "Bears",
            date_created: "2018-07-12T23:00:00.000Z",
            folder: 1,
            content: faker.lorem.paragraphs()
        },
        {
            id: 6,
            name: "Horses",
            date_created: "2018-08-20T23:00:00.000Z",
            folder: 2,
            content: faker.lorem.paragraphs()
        },
        {
            id: 7,
            name: "Tigers",
            date_created: "2018-03-03T00:00:00.000Z",
            folder: 3,
            content: faker.lorem.paragraphs()
        },
        {
            id: 8,
            name: "Wolves",
            date_created: "2018-05-16T23:00:00.000Z",
            folder: 3,
            content: faker.lorem.paragraphs()
        },
        {
            id: 9,
            name: "Elephants",
            date_created: "2018-04-11T23:00:00.000Z",
            folder: 2,
            content: faker.lorem.paragraphs()
        },
        {
            id: 10,
            name: "Lions",
            date_created: "2018-04-26T23:00:00.000Z",
            folder: 1,
            content: faker.lorem.paragraphs()
        },
        {
            id: 11,
            name: "Monkeys",
            date_created: "2018-02-05T00:00:00.000Z",
            folder: 3,
            content: faker.lorem.paragraphs()
        },
        {
            id: 12,
            name: "Bats",
            date_created: "2018-12-01T00:00:00.000Z",
            folder: 1,
            content: faker.lorem.paragraphs()
        },
        {
            id: 13,
            name: "Turtles",
            date_created: "2018-09-11T23:00:00.000Z",
            folder: 2,
            content: faker.lorem.paragraphs()
        },
        {
            id: 14,
            name: "Zebras",
            date_created: "2018-08-13T23:00:00.000Z",
            folder: 2,
            content: faker.lorem.paragraphs()
        }
    ]
}

module.exports = {
    makeNotesArray,
}