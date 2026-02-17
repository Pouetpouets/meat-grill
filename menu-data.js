// ============================================
// MENU DATA — Menu officiel Meat Grill Copponex
// ============================================
const MENU_DATA = {
  categories: [
    {
      id: "kebabs",
      label: "🥙 Kebabs",
      items: [
        { name: "Kebab", price: "8€", desc: "Viande grillée, salade, tomates, oignons, sauce au choix", badge: "Best-seller", img: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=400&h=300&fit=crop&q=80" },
        { name: "Sandwich Galette Kebab", price: "9€", desc: "En galette, viande kebab, crudités, sauce au choix", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop&q=80" },
        { name: "Sandwich Galette Steak", price: "9€", desc: "En galette, steak haché maison, crudités, sauce", badge: "Fait maison", img: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=400&h=300&fit=crop&q=80" },
        { name: "Sandwich Galette Filet de Bœuf", price: "9€", desc: "En galette, filet de bœuf, crudités, sauce", badge: "Fait maison", img: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=400&h=300&fit=crop&q=80" }
      ]
    },
    {
      id: "assiettes",
      label: "🍽️ Assiettes",
      items: [
        { name: "Assiette Kebab", price: "12€", desc: "Viande kebab, frites, salade, sauce au choix", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop&q=80" },
        { name: "Assiette Poulet Mariné", price: "15€", desc: "Poulet mariné grillé, frites, salade", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop&q=80" },
        { name: "Assiette Steak", price: "15€", desc: "Steak haché maison & épicé, frites, salade", badge: "Fait maison", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop&q=80" },
        { name: "Assiette Köfte", price: "15€", desc: "Boulettes köfte maison, frites, salade", badge: "Fait maison", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&q=80" },
        { name: "Assiette Côtelette d'Agneau", price: "20€", desc: "Côtelettes d'agneau grillées, frites, salade", badge: "Premium", badgeType: "hot", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop&q=80" },
        { name: "Assiette Filet de Bœuf", price: "24€", desc: "Filet de bœuf grillé, frites, salade", badge: "Premium", badgeType: "hot", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&q=80" },
        { name: "Assiette Mixte", price: "20€", desc: "Assortiment de viandes grillées, frites, salade", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" }
      ]
    },
    {
      id: "burgers",
      label: "🍔 Burgers",
      items: [
        { name: "Burger Nature", price: "9€", desc: "Steak haché maison, salade, tomate, oignon, sauce", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80" },
        { name: "Burger Cheddar", price: "9.50€", desc: "Steak haché, cheddar fondu, salade, tomate, sauce", img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop&q=80" },
        { name: "Burger Épicée", price: "9.50€", desc: "Steak haché épicé, salade, tomate, sauce piquante", img: "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&h=300&fit=crop&q=80" },
        { name: "Burger Oignons Frits", price: "9.50€", desc: "Steak haché, oignons frits croustillants, sauce", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=300&fit=crop&q=80" },
        { name: "Burger Deluxe", price: "11€ · Menu 14€", desc: "Notre burger signature avec tous les extras", badge: "🔥 Signature", badgeType: "hot", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop&q=80" }
      ]
    },
    {
      id: "tacos",
      label: "🌮 Tacos",
      items: [
        { name: "Tacos 1 Viande", price: "10€ · Menu 13€", desc: "1 viande au choix : kebab, poulet, steak ou köfte", img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=400&h=300&fit=crop&q=80" },
        { name: "Maxi Tacos 2 Viandes", price: "13€ · Menu 16€", desc: "2 viandes au choix, fromage, sauce", badge: "Populaire", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop&q=80" }
      ]
    },
    {
      id: "mezze",
      label: "🥗 Mezze & Salades",
      items: [
        { name: "Houmous", price: "5€", desc: "Purée de pois chiche, sésame, huile d'olive et ail", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&q=80" },
        { name: "Ezme", price: "5€", desc: "Salade de tomate épicée, oignon, persil & paprika", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&q=80" },
        { name: "Haydari", price: "5€", desc: "Yaourt, aneth et menthe", img: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=400&h=300&fit=crop&q=80" },
        { name: "Salade Composée", price: "9€", desc: "Crudités fraîches de saison", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80" },
        { name: "Salade de Poulet", price: "10€", desc: "Poulet grillé, crudités, sauce", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=80" }
      ]
    },
    {
      id: "sides",
      label: "🍟 Extras",
      items: [
        { name: "Frites Maison", price: "5€", desc: "Fait maison, croustillantes", badge: "Fait maison", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop&q=80" },
        { name: "Frites Tex Mex", price: "6€", desc: "Frites épicées façon tex-mex", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&q=80" },
        { name: "Nuggets (x6)", price: "5€", desc: "Poulet pané croustillant", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&q=80" },
        { name: "Tenders (x4)", price: "5€", desc: "Filets de poulet panés", img: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=400&h=300&fit=crop&q=80" },
        { name: "Sticks Mozzarella (x6)", price: "6€", desc: "Mozzarella panée croustillante", img: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=400&h=300&fit=crop&q=80" },
        { name: "Menu Kids", price: "8€", desc: "Burger steak ou poulet cheddar + Caprisun + Mini Surpriz", badge: "- 12 ans" }
      ]
    }
  ],

  sauces: ["Ketchup", "Mayonnaise", "Algérienne", "Sauce Blanche", "Harissa", "Barbecue", "Brazil", "Samurai", "Gruyère", "Curry", "Moutarde", "Biggy"],

  info: {
    name: "Meat Grill",
    tagline: "Kebab & Grillades",
    address: "31 Route de Saint Blaise",
    city: "74350 Copponex, France",
    phone: "",
    subtitle: "No Meat No Life",
    since: "2020"
  }
};

if (typeof module !== 'undefined') module.exports = MENU_DATA;
