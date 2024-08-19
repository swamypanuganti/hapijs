//npm install @hapi/hapi
//https://medium.com/acmvit/restful-crud-api-with-hapi-js-c92edd36d8df

'use strict';
const Hapi = require('@hapi/hapi');

const init = async() =>{
    const server =  Hapi.server({
        port:3005,
        host:'localhost',
    });
console.log('inside inti');
    server.route({
        method: 'GET',
        path: '/api/notes',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });
    
    server.route({
        method: 'POST',
        path: '/api/note',
        handler: async (request, h) => {
            let info = request.payload;
            console.log(info);
            // let newInfo = new Note(info);
            // await newInfo.save((err, task) => {
            //     if (err) return console.log(err);
            // })
            return h.response("Success");
        }
    });

    //Update Note
    server.route({
        method: 'PUT',
        path: '/api/note/{id}',
        handler: async (request, h) => {
            let params = request.params.id;
            let info = request.payload;
            // let infos = await Note.updateOne({ _id: params }, info).lean();
            return h.response(infos);
        }
    });

    //Delete Note
    server.route({
        method: 'DELETE',
        path: '/api/note/{id}',
        handler: async (request, h) => {
            let params = request.params.id;
            // let infos = await Note.remove({ _id: params });
            return h.response(infos);
        }
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);

}
process.on('unhandledRejection',(err)=>{
    console.log('unhandle exception'+JSON.stringify(err));
    process.exit(1);
    });
init();
