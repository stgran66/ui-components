import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'lsjf2lf',
      label: 'Can I use React on a Project?',
      content:
        'You can use React on any project you want. You can use React on any Project you want',
    },
    {
      id: 'akf23mfc',
      label: 'Can I use JavaScript on a Project?',
      content:
        'You can use JavaScript on any project you want. You can use JavaScript on any Project you want',
    },
    {
      id: 'l2jr4nf2knk2',
      label: 'Can I use CSS on a Project?',
      content:
        'You can use CSS on any project you want. You can use CSS on any Project you want',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
