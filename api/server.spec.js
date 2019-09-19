const server = require('./server')
const request = require('supertest')

describe('get / ', () => {
    it('has process.env.db. as testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    it('returns a 200 code', () => {
        return request(server).get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('Content-Length', '12')
            .then(res => {
                expect(res.body.api).toBe('up')
            })
    })
})