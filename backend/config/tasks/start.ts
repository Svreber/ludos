const nodemon = require('nodemon');

nodemon({
    ext: 'ts',
    watch: ['src'],
    exec: 'ts-node',
    script: 'src/index',
//    args: args // FIXME: Not very safe
});
