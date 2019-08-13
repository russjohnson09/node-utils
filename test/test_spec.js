const expect = require(`chai`).expect;

const {hello} = require(`./../index`);



describe(`test hello`, function() {

    it(`hello`, function(done) {

        hello();
        done();
    })

});

describe(`test command helper`, function() {

    it(`Command helper`, function() {

        //TODO write tests
        expect(null).to.not.be.null;
    })

});
