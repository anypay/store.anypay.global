
import * as Hapi from 'hapi';

'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

server.route({
  method: 'POST',
  path: '/ticket_purchases',
  handler: async function(request: Hapi.request, h: Hapi.ResponseToolkit) {
    return 'POST /ticket_purchases';
  }
})

server.route({
    method:'GET',
    path:'/ticket_purchases/{uid}',
    handler:function(request: Hapi.Request, h: Hapi.ResponseToolkit) {

      return `GET /ticket_purchases/${request.params.uid}`;
    }
});

server.route({
    method:'GET',
    path:'/tickets/{uid}',
    handler:function(request: Hapi.Request, h: Hapi.ResponseToolkit) {

      return `GET /tickets/${request.params.uid}`;
    }
});

server.route({
    method:'POST',
    path:'/tickets/{uid}/checkin',
    handler:function(request: Hapi.Request, h: Hapi.ResponseToolkit) {

      return `GET /tickets/${request.params.uid}`;
    }
});

server.route({
    method:'POST',
    path:'/anypay/webhooks',
    handler:function(request: Hapi.Request, h: Hapi.ResponseToolkit) {

      return request.payload;
    }
});

// Start the server
async function start () {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

export {

  start

}

if (require.main === module) {

  start();

}

