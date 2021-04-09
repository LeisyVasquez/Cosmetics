const request = require('supertest');
const app = require('../index');


describe("Test API Cosmetics", () => {
    it('Truncate product table, read JSON and send it to frontend', async () => {
        const res = await request(app)
            .get('/api/getJSON')
        expect(res.statusCode).toEqual(201)
    })
    it('Get the data from the purchase table', async () => {
        const res = await request(app)
            .get('/api/getOrder')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    })
    it('Get the data from the purchase table', async () => {
        const res = await request(app)
            .get('/api/getOrder')
        expect(res.statusCode).toEqual(200)
    })
    it('Insert the JSON data to the database', async () => {
        const res = await request(app)
            .post('/api/saveProducts')
        expect(res.statusCode).toEqual(201)
    })
    it('Insert a purchase', async () => {
        const res = await request(app)
            .post('/api/insertOrder')
            .send({
                numeroOrden: Math.floor(Math.random() * 99999) + 1,
                subtotal: 50000,
                totalIva: 9500,
                totalCompra: 59500
            })
        expect(res.statusCode).toEqual(201)
    })
})