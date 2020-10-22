module.exports = api => {
    api.cache(true)

    const presets = ['@babel/typescript', '@babel/env']

    const plugins = [
        '@babel/plugin-transform-runtime',
        [
            'babel-plugin-module-resolver',
            {
                alias: {
                    '@': './src/',
                    '@/helpers': './src/helpers',
                },
            },
        ],
    ]

    return { presets, plugins }
}