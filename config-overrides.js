const { override, addWebpackAlias } = require("customize-cra");
const path = require("path")

const resolve = (p) => path.resolve(__dirname,p)

module.exports = override(
    addWebpackAlias({
        '@':resolve('src')
    })
)
