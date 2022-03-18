const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@static': 'src/static',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static/bg.jpg',
        '@hooks': 'src/hooks',
        '@store': 'src/store',
        '@context': 'src/context',

    })(config);

    return config;
}