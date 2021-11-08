import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

export let data = [];

data = [
  {
    client: 'The Hype Agency',
    title: 'Talent Management System',
    description:
      'The Hype Agency works with marketing films to find, vet and select staff fro marketing events acrosss the United States.',
    style: {
      backgroundColor: 'rgb(125, 147, 239)',
    },
    icon: CheckBoxIcon,
  },
  {
    client: 'Beawick Engineering',
    title: 'E-Commerce',
    description:
      'Not only was the site a redesign but we were tasked with upgrading their e-commerce to increase the number of sales made through their website.',
    style: { backgroundColor: 'rgb(222, 69, 102)' },
    icon: CatchingPokemonIcon,
  },
  {
    client: 'Eastern Propane & Gas',
    title: 'Design evolution of the marketing site',
    description:
      'We worked closely with the internal marketing team to redesign their marketing site.',
    style: { backgroundColor: 'rgb(121, 227, 170)' },
    icon: AllInclusiveIcon,
  },
];
