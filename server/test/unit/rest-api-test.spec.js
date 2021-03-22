/*As a rule of thumb, it is better to reserve "context" to define scenarios, "describe" to
define features and actions, and "it" for assertions or tests. Page 58 BDD Manual*/

const mongoose = require('mongoose'),
      MongoMemoryServer = require('mongodb-memory-server').default,
      request = require('supertest'),
      expect = require('chai').expect,
      app = require('../../app')

describe('rest api test', () => {

    let mongoServer
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    context('routes user test', () => {

        before(async () => {
            mongoServer = new MongoMemoryServer()
            const mongoUri = await mongoServer.getUri()
            await mongoose.connect(mongoUri, opts)
        })

        after(async () => {
            await mongoose.disconnect()
            await mongoServer.stop()
        })


        it('POST /users', (done) => {
            request(app).post('/api/users')
                .send({
                    user: {
                        username: 'Joey Tempest',
                        email: 'tempeste@gmail.com'
                    }
                })
                .then((res) => {
                    const body = res.body
                    const userCreate = body.user
                    expect(userCreate).to.contain.property('_id')
                    expect(userCreate).to.contain.property('username')
                    expect(userCreate).to.contain.property('email')
                    done();
                })
                .catch((err) => done(err))
        })

        it("PUT /user", function (done) {
            request(app).get('/api/user')
                .then((res) => {
                    const body = res.body
                    const userUpdate = body.user[0]._id
                    //console.log(body.user[0].username)
                    request(app).put('/api/user/' + userUpdate)
                        .send({
                            user: {
                                username: 'Napoleon Hill'
                            }
                        })
                        .then((res) => {
                            expect(200)
                            done()
                        })
                })
                .catch((err) => done(err))
        })

        //async then
        it('GET /user', (done) => {
            request(app).get('/api/user')
                .then((res) => {
                    const body = res.body
                    //console.log(body.user[0].username)
                    expect(body).to.be.an('object')
                    done()
                })
                .catch((err) => done(err))
        })

        it('DELETE /user', (done) => {
            request(app).get('/api/user')
                .then((res) => {
                    const body = res.body
                    const userDelete = body.user[0]._id
                    request(app).delete('/api/user/' + userDelete)
                        .then((res) => {
                            expect(200)
                            done()
                        })
                })
                .catch((err) => done(err))
        })

        //async await
        it('GET /user async', async () => {
            let body = await request(app).get('/api/user')

            //console.log(JSON.parse(body.text))

            const countUser = await User.countDocuments()
            expect(countUser).to.deep.equal(0)

        })
    })
})