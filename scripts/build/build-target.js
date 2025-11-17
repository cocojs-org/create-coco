const path = require('node:path');

const projectRoot = path.join(__dirname, '../../');
const createCocoSrc = path.join(projectRoot, './src/create-coco.ts');
const createCocoDist = path.join(projectRoot, '/dist/create-coco.js');

module.exports.rollupTargets = [
    {
        input: createCocoSrc,
        output: {
            file: createCocoDist,
            format: 'cjs',
        },
    },
];
