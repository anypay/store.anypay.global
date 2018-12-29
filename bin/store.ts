#!/usr/bin/env ts-node

import * as commander from 'commander';

import { commands } from '../lib';

commander
  .command('buyticket <email>')
  .action(async (email) => {

    let ticketPurchase = await commands.buyTicket(email);

  });

commander.parse(process.argv);

