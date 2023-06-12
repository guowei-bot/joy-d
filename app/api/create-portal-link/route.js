import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { stripe } from '@/libs/stripe';
import { createOrRetrieveCustomer } from '@/libs/supabase-admin';
import { getURL } from '@/libs/helpers';

export async function POST(req) {
  if (req.method === 'POST') {
    try {
      const supabase = createRouteHandlerClient({cookies});
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) throw Error('Could not get user');
      const customer = await createOrRetrieveCustomer({
        uuid: user.id || '',
        email: user.email || ''
      });

      if (!customer) throw Error('Could not get customer');
      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${getURL()}/apps/subscription`
      });
      return new Response(JSON.stringify({ url }), {
        status: 200
      });
    } catch (err) {
      console.log(err);
      return new Response(
        JSON.stringify({ error: { statusCode: 500, message: err.message } }),
        {
          status: 500
        }
      );
    }
  } else {
    return new Response('Method Not Allowed', {
      headers: { Allow: 'POST' },
      status: 405
    });
  }
}