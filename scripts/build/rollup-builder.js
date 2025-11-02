const rollup = require('rollup');
const replace = require('@rollup/plugin-replace');
const babel = require('@rollup/plugin-babel');
const typescript = require('@rollup/plugin-typescript');

function genRollupConfig(inputConfig) {
    const { input, external } = inputConfig;

    return {
        input,
        external,
        plugins: [
            replace({
                __DEV__: process.env.NODE_ENV === 'test',
                __TEST__: process.env.NODE_ENV === 'test',
            }),
            typescript({
                compilerOptions: {
                    target: 'es2015',
                    lib: ['dom'],
                    module: 'ESNext',
                    jsx: 'preserve',
                },
            }),
            babel({
                presets: ['@babel/preset-env'],
                extensions: ['.js', '.ts', '.tsx'],
            }),
        ],
        onLog(level, log, handler) {
            if (log.code === 'CIRCULAR_DEPENDENCY') {
                throw new Error(log);
            }
        },
    };
}

async function build(targets) {
    try {
        for (const { output, ...rest } of targets) {
            const rollupConfig = genRollupConfig(rest);
            const result = await rollup.rollup(rollupConfig);
            await result.write(output);
        }
    } catch (e) {
        console.error('rollup rollup error', e);
        throw e;
    }
}

module.exports.build = build;
