# Anypay Example e-Store

Example Store to test e-Commerce Integrations

## Environment Variables

- ANYPAY_ACCESS_TOKEN

## Commands

- Purchase Ticket
- Receive Payment
- Complete Payment
- Check Ticket

## Queries

- get tickets
- get ticket

## Events

- ticket purchase created
- invoice created

- ticket purchase payment received
- ticket purchase payment completed
- ticket created

## Emails

- payment received
- ticket confirmed

## Structs

### Ticket Purchase

  - id Integer
  - uid String
  - anypay_invoice_uid Integer
  - created_at? Date
  - updated_at? Date
  - status String
  - tickets Ticket[]

Each ticket purchase will include a Bitcoin Cash private key

###  Ticket

  - id Integer
  - uid String
  - ticket_purchase_id Integer
  - created_at? Date
  - updated_at? Date
  - checked_at? Date

