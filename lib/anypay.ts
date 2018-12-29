
import * as http from 'superagent';

const webhookURL = process.env.ANYPAY_WEBHOOK_URL || 'https://store.anypay.global/anypay/webhooks';

import { AnypayInvoice } from './types';
import { log } from './logger';

export async function createInvoice(amount: number, currency: string): Promise<AnypayInvoice> {

  let payload = {
    amount,
    currency
    //webhook_url: webhookURL
  };

  log.info('requestpayload', payload);

  try {

    let resp = await http
      .post('https://api.anypay.global/invoices')
      .auth(process.env.ANYPAY_ACCESS_TOKEN, "")
      .send(payload)

    log.info('invoiceresponse', resp);

    return resp;

  } catch(error) {

    log.error(error.message);

    return;

  }

}

