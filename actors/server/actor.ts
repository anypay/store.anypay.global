
import * as Hapi from 'hapi';

import { join } from 'path';

'use strict';

const Hapi=require('hapi');




// Start the server
async function start () {

// Create a server with a host and port
  const server=Hapi.server({
      host:'0.0.0.0',
      port:8000,
      routes: {
        files: {
          relativeTo: join(__dirname, '../../store-app/dist/')
        }
      }
  });

  await server.register(require('inert'));

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

  server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: join(__dirname, '../../store-app/dist/'),
              redirectToSlash: true,
              index: true,
          }
      }
  });

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

