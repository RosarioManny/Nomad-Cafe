import { MenuBreakfast, MenuBeverages, MenuGelatos, MenuPastries } from "../../../components/Menu/submenu";


export const menuCategories = [
  { 
    id: 'breakfast', 
    label: 'Breakfast', 
    Component: MenuBreakfast, 
    image: '/products/green_traveler.webp', 
    img_alt: 'Nomad signature Traveler sandwich',
    tag: '/icons-logos/Nomad-White-Breakfast.webp'
  },
  { 
    id: 'drinks', 
    label: 'Drinks', 
    Component: MenuBeverages, 
    image: '/products/Capuccino_heart.webp', 
    img_alt: 'Nomad cappuccino with heart latte art',
    tag: '/icons-logos/Nomad-White-Beverages.webp'
  },
  { 
    id: 'pastries', 
    label: 'Pastries', 
    Component: MenuPastries, 
    image: '/products/Nomad-Danishes-Adjusted.webp', 
    img_alt: 'Nomad assorted danishes',
    tag: '/icons-logos/Nomad-White-PastriesMore.webp'
  },
  { 
    id: 'gelato', 
    label: 'Gelato', 
    Component: MenuGelatos, 
    image: '/products/Nomad_Choc_Matcha_Gelato.png', 
    img_alt: 'Nomad homemade chocolate hazelnut and matcha gelato',
    tag: '/icons-logos/Nomad-White-Gelato.webp'
  }
];