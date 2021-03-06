/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../services/stripe";

import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
      // metadata
    })


    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [
        { price: 'pricepqowkdopqkwodp', quantity: 1 },
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: 'http://localhost:3000/posts',
      cancel_url: 'http://localhost:3000/'
    })

    res.status(200).send({ sessionId: checkoutSession.id });
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}