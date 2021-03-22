/*As a rule of thumb, it is better to reserve "context" to define scenarios, "describe" to
define features and actions, and "it" for assertions or tests. Page 58 BDD Manual*/

const mongoose = require('mongoose'),
      MongoMemoryServer = require('mongodb-memory-server').default,
      expect = require('chai').expect,
      User = require('../../models/User')

describe('mongodb memory server database', () => {

    let mongoServer
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    context('user model test', () => {

        before(async () => {
            mongoServer = new MongoMemoryServer()
            const mongoUri = await mongoServer.getUri()
            await mongoose.connect(mongoUri, opts)
        })

        after(async () => {
            await mongoose.disconnect()
            await mongoServer.stop()
        })

        it('no users', async () => {
            const emptyUsers = await User.countDocuments()
            expect(emptyUsers).to.equal(0)
        })

        it('save user', async () => {
            const user = new User({
                username: 'John Doe',
                email: 'john@email.com'
            })
            const saveUser = await user.save()

            const actual = saveUser.username
            const expected = 'john doe'
            expect(actual).to.equal(expected)
            expect(saveUser).to.include({username: expected})
            expect(saveUser).to.be.an('object')
        
            const countUser = await User.countDocuments()
            expect(countUser).to.deep.equal(1)
            
        })

        it('find user', async () => {
            const findUser = await User.findOne({
                username: 'john doe'
            })            
            expect(findUser.username).to.equal('john doe')
        })
    })
})