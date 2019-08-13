module.exports = {

    sleep: async function(time)
    {
        return new Promise((resolve) => {
            setTimeout(resolve,time);
        });
    },
    hello: function()
    {
        console.log(`hello`)
    }
};
