export function getMenuData() {
    return [
        {
            category: "Starters & Tapas",
            items: [
                {
                    name: "Crimson Duck Tacos",
                    price: "$22",
                    ingredients: "Confit duck leg, hibiscus reduction, pickled onions, chipotle emulsion, handmade blue corn tortilla",
                    isSpicy: true
                },
                {
                    name: "Obsidian Tartare",
                    price: "$26",
                    ingredients: "Hand-cut wagyu beef, charcoal oil, quail egg yolk, caperberries, crispy rye bread, truffle pearls"
                },
                {
                    name: "Scallops & Saffron",
                    price: "$28",
                    ingredients: "Pan-seared divers scallops, saffron foam, cauliflower purée, chorizo crumble, micro cilantro"
                },
                {
                    name: "Burrata & Heritage Tomato",
                    price: "$24",
                    ingredients: "Creamy burrata di Andria, heirloom tomatoes, basil pesto, balsamic glaze caviar, pine nuts",
                    isVegetarian: true
                }
            ]
        },
        {
            category: "Soups & Greens",
            items: [
                {
                    name: "Velvet Forest Cream",
                    price: "$18",
                    ingredients: "Wild mushroom selection, truffle oil, chestnut shavings, thyme foam, served with garlic croutons",
                    isVegetarian: true
                },
                {
                    name: "Lobster Bisque",
                    price: "$24",
                    ingredients: "Slow-cooked lobster stock, cognac reduction, crème fraîche, lobster chunks, dill oil"
                },
                {
                    name: "Roasted Beetroot Salad",
                    price: "$19",
                    ingredients: "Salt-baked beets, whipped goat cheese, candied walnuts, arugula, honey-mustard vinaigrette",
                    isVegetarian: true
                }
            ]
        },
        {
            category: "Main Courses",
            items: [
                {
                    name: "The Smoky Venison",
                    price: "$58",
                    ingredients: "Saddle of venison smoked in hay, juniper berry jus, parsnip purée, wild blackberries, kale crisps"
                },
                {
                    name: "Sea Bass in Salt",
                    price: "$48",
                    ingredients: "Line-caught sea bass, lemon-butter emulsion, asparagus, fondant potatoes, fennel shavings"
                },
                {
                    name: "Lamb Rack 'Provencale'",
                    price: "$54",
                    ingredients: "Herb-crusted lamb rack, ratatouille sphere, black garlic purée, rosemary infusion, dauphinoise potato"
                },
                {
                    name: "Cauliflower Steak",
                    price: "$34",
                    ingredients: "Roasted cauliflower heart, chimichurri sauce, pomegranate seeds, almond flakes, hummus base",
                    isVegan: true
                },
                {
                    name: "Octopus & Chorizo",
                    price: "$46",
                    ingredients: "Grilled octopus tentacle, spicy chorizo foam, confit baby potatoes, romesco sauce, paprika oil",
                    isSpicy: true
                }
            ]
        },
        {
            category: "The Sweet Finale",
            items: [
                {
                    name: "The Enchanted Mushroom",
                    price: "$24",
                    ingredients: "Meringue cap, white chocolate mousse stem, matcha moss, raspberry dust, dry ice fog"
                },
                {
                    name: "Nitro Citrus Bowl",
                    price: "$20",
                    ingredients: "Liquid nitrogen grapefruit sorbet, yuzu gel, crystalized mint, citrus vapour, edible gold"
                },
                {
                    name: "Chocolate Sphere",
                    price: "$22",
                    ingredients: "Dark chocolate dome, hot salted caramel pour, vanilla bean ice cream, honeycomb crunch"
                }
            ]
        },
        {
            category: "Signature Cocktails",
            items: [
                {
                    name: "Smoky Aztec",
                    price: "$18",
                    ingredients: "Mezcal, agave syrup, lime juice, jalapeño slice, smoked paprika rim",
                    isSpicy: true
                },
                {
                    name: "Violet Mist",
                    price: "$16",
                    ingredients: "Empress gin, elderflower liqueur, lemon, egg white foam, lavender bitters"
                }
            ]
        }
    ];
}