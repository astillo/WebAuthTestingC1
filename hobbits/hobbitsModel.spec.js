const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel')

describe('hobbit model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate()
    })

    describe('insert function', () => {
        it('should be able to insert', () => {
            const hobbitsNumber = await db('hobbits')
            expect(hobbitsNumber).toHaveLength(0)
        })

    })
})