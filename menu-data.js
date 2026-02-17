// ============================================
// MENU DATA — Éditer ici ou via admin.html
// ============================================
const MENU_DATA = {
  categories: [
    {
      id: "kebabs",
      label: "🥙 Kebabs",
      items: [
        { name: "Kebab Classique", price: "7.50€", desc: "Viande grillée, salade, tomates, oignons, sauce blanche", badge: "Best-seller" },
        { name: "Kebab Fromage", price: "8.50€", desc: "Viande grillée, double fromage fondu, salade, sauce" },
        { name: "Kebab Galette", price: "8.00€", desc: "En galette de blé, viande, crudités, sauce au choix" },
        { name: "Kebab Meat Grill", price: "10.00€", desc: "Double viande, double fromage, oignons caramélisés, sauce spéciale", badge: "🔥 Spécialité", badgeType: "hot" },
        { name: "Kebab Falafel", price: "8.00€", desc: "Falafels maison, houmous, crudités, sauce tahini", badge: "🌱 Végé", badgeType: "veg" }
      ]
    },
    {
      id: "assiettes",
      label: "🍽️ Assiettes",
      items: [
        { name: "Assiette Kebab", price: "11.00€", desc: "Viande grillée, frites, salade, sauce au choix" },
        { name: "Assiette Mixte", price: "13.00€", desc: "Brochettes + kebab, riz, frites, salade", badge: "Populaire" },
        { name: "Assiette Brochettes", price: "12.50€", desc: "2 brochettes de poulet ou agneau, riz, salade" }
      ]
    },
    {
      id: "burgers",
      label: "🍔 Burgers",
      items: [
        { name: "Burger Classic", price: "9.00€", desc: "Steak haché, cheddar, salade, tomate, sauce burger" },
        { name: "Burger BBQ", price: "10.50€", desc: "Double steak, oignons croustillants, bacon, sauce BBQ", badge: "🔥 Copieux", badgeType: "hot" },
        { name: "Burger Chicken", price: "9.50€", desc: "Poulet croustillant, coleslaw, sauce miel-moutarde" }
      ]
    },
    {
      id: "sides",
      label: "🍟 Accompagnements",
      items: [
        { name: "Frites maison", price: "3.50€", desc: "Croustillantes, salées à point" },
        { name: "Nuggets (x6)", price: "4.50€", desc: "Poulet pané croustillant" },
        { name: "Boissons", price: "2.00€", desc: "Coca, Fanta, Ice Tea, Ayran" }
      ]
    }
  ],

  info: {
    name: "Meat Grill",
    tagline: "Kebab artisanal & grillades",
    address: "31 Route de Saint Blaise",
    city: "74350 Copponex, France",
    phone: "",
    subtitle: "Viande fraîche, sauces maison, pain cuit sur place.",
    since: "2020"
  }
};

if (typeof module !== 'undefined') module.exports = MENU_DATA;
