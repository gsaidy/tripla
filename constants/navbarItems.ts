const navbarItems = [
  {
    text: 'Trips',
    subItems: [
      {
        href: '/trips/create',
        text: 'Create Trip',
        description: 'Create your trip itinerary.',
      },
      {
        href: '/trips',
        text: 'View Trips',
        description: 'See a list of trips created by you or by other users.',
      },
    ],
  },
  {
    text: 'Templates',
    subItems: [
      {
        href: '/templates/create',
        text: 'Create Template',
        description: 'Create your trip template.',
      },
      {
        href: '/templates',
        text: 'View Templates',
        description: 'See a list of templates created by you or by other users.',
      },
    ],
  },
];

export default navbarItems;
