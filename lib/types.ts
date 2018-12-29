
export interface AnypayWebhook {
  json: any;
}

export interface AnypayInvoice {
  uid: string;
}

export interface TicketPurchase {

  anypay_invoice_uid: string;

  invoice?: AnypayInvoice;

  id?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface Ticket {

  uuid: string; // bitcoin cash address
  ticket_purchase_id: number;

  id?: number;
  created_at?: Date;
  updated_at?: Date;
  checked_at?: Date;
}
