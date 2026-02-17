// ============================================
// MENU DATA — Éditer ici ou via admin.html
// ============================================
const MENU_DATA = {
  categories: [
    {
      id: "kebabs",
      label: "🥙 Kebabs",
      items: [
        { name: "Kebab Classique", price: "7.50€", desc: "Viande grillée, salade, tomates, oignons, sauce blanche", badge: "Best-seller", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop" },
        { name: "Kebab Fromage", price: "8.50€", desc: "Viande grillée, double fromage fondu, salade, sauce", img: "https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=400&h=300&fit=crop" },
        { name: "Kebab Galette", price: "8.00€", desc: "En galette de blé, viande, crudités, sauce au choix", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop" },
        { name: "Kebab Meat Grill", price: "10.00€", desc: "Double viande, double fromage, oignons caramélisés, sauce spéciale", badge: "🔥 Spécialité", badgeType: "hot", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop" },
        { name: "Kebab Falafel", price: "8.00€", desc: "Falafels maison, houmous, crudités, sauce tahini", badge: "🌱 Végé", badgeType: "veg", img: "https://images.unsplash.com/photo-1593001872117-c51d326a3654?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: "assiettes",
      label: "🍽️ Assiettes",
      items: [
        { name: "Assiette Kebab", price: "11.00€", desc: "Viande grillée, frites, salade, sauce au choix", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
        { name: "Assiette Mixte", price: "13.00€", desc: "Brochettes + kebab, riz, frites, salade", badge: "Populaire", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop" },
        { name: "Assiette Brochettes", price: "12.50€", desc: "2 brochettes de poulet ou agneau, riz, salade", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: "burgers",
      label: "🍔 Burgers",
      items: [
        { name: "Burger Classic", price: "9.00€", desc: "Steak haché, cheddar, salade, tomate, sauce burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
        { name: "Burger BBQ", price: "10.50€", desc: "Double steak, oignons croustillants, bacon, sauce BBQ", badge: "🔥 Copieux", badgeType: "hot", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop" },
        { name: "Burger Chicken", price: "9.50€", desc: "Poulet croustillant, coleslaw, sauce miel-moutarde", img: "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: "sides",
      label: "🍟 Accompagnements",
      items: [
        { name: "Frites maison", price: "3.50€", desc: "Croustillantes, salées à point", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop" },
        { name: "Nuggets (x6)", price: "4.50€", desc: "Poulet pané croustillant", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop" },
        { name: "Boissons", price: "2.00€", desc: "Coca, Fanta, Ice Tea, Ayran", img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop" }
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
