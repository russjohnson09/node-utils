const expect = require(`chai`).expect;

const {hello,CommandHelper,sleep} = require(`./../index`);



describe(`test hello`, function() {

    it(`hello`, function(done) {

        hello();
        done();
    })

});

describe(`test command helper`, function() {

    it(`Command helper`, async function() {



        let version = await CommandHelper.getNodeVersion();
        console.log(`node version`,version);

        let ls = await CommandHelper.execute(`ls`);
        console.log(`ls`,ls);
        //TODO write tests
        // expect(null).to.not.be.null;
    })

});


describe(`simple utils`, function() {

    it(`sleep`, async function() {
        await sleep(1000);
    })

});
