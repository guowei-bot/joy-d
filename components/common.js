
export const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ]
export const tiers = [
    {
      name: 'Freelancer',
      id: 'tier-freelancer',
      href: '#',
      price: { monthly: '$0', annually: '$0' },
      description: 'The essentials to provide your best work for clients.',
      features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
      mostPopular: false,
      priceStripe: {},
      pricePaddle: {}
    },
    {
      name: 'Startup',
      id: 'tier-startup',
      href: '#',
      price: { monthly: '$9.9', annually: '$100' },
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      mostPopular: true,
      priceStripe: {
        monthly: {
          type: 'recurring',
          id: 'price_1NHPqbJ82ghomF5c2qhWBJAh',
          product_id: 'prod_O3WunFd23o8DWJ'
        },
        annually: {
          type: 'recurring',
          id: 'price_1NHkS6J82ghomF5cVKLfh6Cu',
          product_id: 'prod_O3WunFd23o8DWJ'
        }
       
      },
      pricePaddle: {
        monthly: {
          plan_id: 53298
        },
        annually: {
          plan_id: 53298
        }
      }
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      price: { monthly: '$19', annually: '$200' },
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom reporting tools',
      ],
      mostPopular: false,
      priceStripe: {
        monthly: {
          type: 'recurring',
          id: 'price_1NHPqbJ82ghomF5cZei4dh6f',
          product_id: 'prod_O3WunFd23o8DWJ'
        },
        annually: {
          type: 'recurring',
          id: 'price_1NHkSEJ82ghomF5cqYCuWwbP',
          product_id: 'prod_O3WunFd23o8DWJ'
        }
       
      },
      pricePaddle: {
        monthly: {
          plan_id: 53299
        },
        annually: {
          plan_id: 53299
        }
      }
    },
  ]