module.exports = {
    soma(a=Number, b=Number) {
        try {

            return a + b

        } catch (err) {
            return console.log(`Deu merda vey. O erro é: ${err}`);
        }
    }
}