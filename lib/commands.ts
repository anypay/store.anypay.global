
import { log } from './logger';
import { events } from './events';
import * as models from '../models';

import { TicketPurchase, Ticket, AnypayWebhook } from './types';

import { createInvoice } from './anypay';

const TICKET_PRICE = 5;

export async function buyTicket(email: string, currency?: string): Promise<TicketPurchase> {

  log.info('buyticket', email);

  let ticketPurchase: TicketPurchase;

  let anypayInvoice = await createInvoice(TICKET_PRICE, currency || 'DASH');

  ticketPurchase.anypay_invoice_uid = anypayInvoice.uid;

  events.emit('ticketpurhcase.created', ticketPurchase);

  return ticketPurchase;

}

export async function recivePayment(webhook: AnypayWebhook): Promise<TicketPurchase> {

  log.info('receivepayment', webhook);

  let ticketPurchase: TicketPurchase;

  events.emit('payment.received', webhook);

  return ticketPurchase;

}

export async function completePayment(webhook: AnypayWebhook): Promise<Ticket> {

  log.info('completepayment', webhook);

  let ticket: Ticket;

  events.emit('payment.confirmated', ticket);

  return ticket;

}

