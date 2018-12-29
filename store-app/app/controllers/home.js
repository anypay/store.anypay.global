import Controller from '@ember/controller';
import $ from 'jquery'

export default Controller.extend({

    actions: {
      "new-ticket-purchase": async function() {

        console.log('PURCHASE TICKET!');

        let response = await $.ajax({
          method: 'POST',
          url: 'https://store.anypay.global/ticket_purchases'
        })

        console.log(response);

      }
    }
});

