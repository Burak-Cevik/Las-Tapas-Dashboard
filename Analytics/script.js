// Uitgebreide lijst van voedselproducten
const FOOD_PRODUCTS = [
    // Granen en graanproducten
    "Rijst", "Aardappelen", "Tarwe", "Maïs", "Haver", "Gerst", "Rogge", "Quinoa", "Gierst", "Spelt", "Boekweit",
    "Brood", "Pasta", "Couscous", "Bulgur", "Havermout", "Muesli", "Cornflakes", "Risotto", "Polenta", "Tortilla's",
    "Bagels", "Croissants", "Pita", "Naan", "Focaccia", "Ciabatta", "Sourdough", "Rye Bread", "Pumpernickel",

    // Groenten
    "Tomaten", "Komkommers", "Wortelen", "Sla", "Spinazie", "Broccoli", "Bloemkool", "Paprika", "Uien", "Knoflook",
    "Zoete aardappelen", "Pompoen", "Courgette", "Aubergine", "Asperges", "Artisjokken", "Bonen", "Erwten", "Linzen",
    "Kikkererwten", "Spruitjes", "Kool", "Rode kool", "Boerenkool", "Paksoi", "Witlof", "Radijs", "Rucola", "Andijvie",
    "Venkel", "Selderij", "Prei", "Okra", "Radicchio", "Waterkers", "Taro", "Yam", "Cassave", "Bamboe scheuten",

    // Fruit
    "Appels", "Peren", "Bananen", "Sinaasappels", "Citroenen", "Limoenen", "Druiven", "Kiwi's", "Aardbeien", "Frambozen",
    "Bosbessen", "Mango's", "Ananas", "Papaya", "Avocado", "Granaatappel", "Perziken", "Abrikozen", "Pruimen", "Kersen",
    "Watermeloen", "Meloen", "Vijgen", "Dadels", "Lychees", "Passievrucht", "Guave", "Carambola", "Drakenfruit", "Durian",
    "Jackfruit", "Kumquat", "Nectarines", "Pomelo", "Ramboetan", "Sapodilla", "Tamarillo", "Ugli Fruit", "Yuzu",

    // Vlees en gevogelte
    "Rundvlees", "Varkensvlees", "Kip", "Kalkoen", "Lam", "Geit", "Eend", "Konijn", "Wild", "Bizon", "Struisvogel",
    "Kwartel", "Fazant", "Hert", "Eland", "Kangoeroe", "Haas", "Duif", "Gans", "Parelhoen",

    // Vis en zeevruchten
    "Zalm", "Tonijn", "Kabeljauw", "Haring", "Makreel", "Sardines", "Forel", "Garnalen", "Mosselen", "Oesters",
    "Kreeft", "Krab", "Inktvis", "Octopus", "Tilapia", "Zwaardvis", "Heilbot", "Paling", "Ansjovis", "Zeebaars",
    "Dorade", "Schelvis", "Zeewolf", "Zeebrasem", "Zeeduivel", "Schol", "Tong", "Wijting", "Roodbaars", "Steenbolk",

    // Zuivelproducten
    "Melk", "Kaas", "Yoghurt", "Boter", "Room", "Kwark", "Cottage cheese", "Crème fraîche", "Kefir", "Mascarpone",
    "Ricotta", "Mozzarella", "Parmezaan", "Cheddar", "Gorgonzola", "Brie", "Camembert", "Feta", "Halloumi", "Roquefort",

    // Eieren
    "Kippeneieren", "Kwarteleieren", "Eendeneieren", "Ganzeneieren", "Struisvogeleieren",

    // Noten en zaden
    "Amandelen", "Walnoten", "Cashewnoten", "Pistachenoten", "Hazelnoten", "Pinda's", "Zonnebloempitten", "Pompoenpitten",
    "Chiazaad", "Lijnzaad", "Sesamzaad", "Macadamianoten", "Pecannoten", "Paranoten", "Pijnboompitten", "Hennepzaad",

    // Peulvruchten
    "Sojabonen", "Kidneybonen", "Zwarte bonen", "Witte bonen", "Tuinbonen", "Spliterwten", "Mungbonen", "Adzukibonen",
    "Limabonen", "Cannellinibonen", "Edamame", "Borlottibonen", "Flageolets", "Lupinebonen",

    // Kruiden en specerijen
    "Basilicum", "Peterselie", "Koriander", "Tijm", "Rozemarijn", "Oregano", "Munt", "Dille", "Salie", "Bieslook",
    "Kaneel", "Nootmuskaat", "Kruidnagel", "Kardemom", "Kurkuma", "Gember", "Knoflookpoeder", "Uienpoeder", "Paprikapoeder",
    "Cayennepeper", "Komijn", "Korianderzaad", "Venkelzaad", "Anijszaad", "Steranijs", "Saffraan", "Wasabi", "Mosterdzaad",

    // Oliën en vetten
    "Olijfolie", "Zonnebloemolie", "Koolzaadolie", "Sesamolie", "Kokosolie", "Palmolie", "Margarine", "Lijnzaadolie",
    "Avocado-olie", "Walnotenolie", "Truffelolie", "Pompoenpitolie", "Arachideolie", "Ghee",

    // Suikers en zoetstoffen
    "Suiker", "Honing", "Ahornsiroop", "Agavesiroop", "Stevia", "Rietsuiker", "Kokosbloesemsuiker", "Dadelsiroop",
    "Rijstsiroop", "Erythritol", "Xylitol", "Sorbitol", "Maltitol",

    // Dranken (niet-alcoholisch)
    "Water", "Thee", "Koffie", "Espresso", "Cappuccino", "Latte", "Americano", "Frisdrank", "Cola", "Limonade",
    "Vruchtensap", "Sinaasappelsap", "Appelsap", "Tomatensap", "Smoothie", "Milkshake", "Chocolademelk", "Karnemelk",
    "Kokoswater", "Kombucha", "Gemberbier", "Tonic", "Bitter Lemon", "IJsthee", "Groene thee", "Zwarte thee", "Rooibos",
    "Kamillethee", "Muntthee", "Energiedrank", "Sportdrank",

    // Dranken (alcoholisch)
    "Bier", "Wijn", "Rode wijn", "Witte wijn", "Rosé", "Champagne", "Prosecco", "Cava", "Whisky", "Bourbon", "Scotch",
    "Wodka", "Gin", "Rum", "Tequila", "Mezcal", "Cognac", "Brandy", "Likeur", "Vermouth", "Port", "Sherry", "Sake",
    "Cider", "Absint", "Ouzo", "Raki", "Pisco", "Grappa", "Jenever", "Amaretto", "Baileys", "Kahlúa",

    // Sauzen en dressings
    "Mayonaise", "Ketchup", "Mosterd", "BBQ-saus", "Sojasaus", "Tabasco", "Worcestershiresaus", "Teriyakisaus",
    "Pesto", "Guacamole", "Hummus", "Tzatziki", "Aioli", "Tahin", "Hoisinsaus", "Oestersaus", "Chilisaus", "Sriracha",

    // Soepen en bouillons
    "Kippensoep", "Tomatensoep", "Groentesoep", "Erwtensoep", "Uiensoep", "Minestronesoep", "Pompoensoep", "Gazpacho",
    "Borscht", "Miso soep", "Ramen", "Pho", "Bouillon", "Consommé",

    // Desserts en zoetigheden
    "Chocolade", "IJs", "Taart", "Koekjes", "Cake", "Pudding", "Mousse", "Tiramisu", "Cheesecake", "Crème brûlée",
    "Panna cotta", "Baklava", "Gelei", "Marshmallows", "Nougat", "Fudge", "Toffee", "Karamel",

    // Snacks
    "Chips", "Popcorn", "Pretzels", "Noten mix", "Crackers", "Tortilla chips", "Pinda's", "Zonnebloempitten",
    "Gedroogd fruit", "Beef jerky", "Kaaskoekjes", "Olijven",

    // Broodbeleg
    "Jam", "Pindakaas", "Chocopasta", "Honing", "Hagelslag", "Stroop", "Appelstroop", "Sandwichspread",

    // Ontbijtgranen
    "Cornflakes", "Muesli", "Granola", "Havermout", "Pap", "Rijstepap",

    // Vegetarische en veganistische producten
    "Tofu", "Tempeh", "Seitan", "Quorn", "Sojabrokjes", "Vleesvervangers", "Plantaardige burgers", "Falafel",

    // Paddenstoelen
    "Champignons", "Shiitake", "Oesterzwammen", "Portobello", "Cantharellen", "Morieljes", "Truffels",

    // Algen en zeewier
    "Nori", "Wakame", "Spirulina", "Chlorella", "Dulse", "Kombu",

    // Superfoods
    "Goji bessen", "Acai bessen", "Maca poeder", "Cacao nibs", "Tarwegras", "Hennepzaad", "Matcha",

    // Internationale gerechten
    "Sushi", "Pizza", "Pasta", "Curry", "Taco's", "Burrito's", "Paella", "Couscous", "Risotto", "Pad Thai",
    "Dim sum", "Falafel", "Hummus", "Kebab", "Gyros", "Moussaka", "Lasagne", "Ratatouille", "Chili con carne",

    // Brood en gebak
    "Stokbrood", "Bagels", "Muffins", "Donuts", "Croissants", "Scones", "Wafels", "Pannenkoeken",

    // Conserven en ingemaakt voedsel
    "Ingelegde augurken", "Zuurkool", "Olijven", "Zongedroogde tomaten", "Ingeblikte vis", "Ingeblikte groenten"
];

// Constanten en configuratie
const CHART_COLORS = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
    ]
};

// DOM-elementen
const foodInput = document.getElementById('food-item');
const suggestionsBox = document.getElementById('suggestions');
const chartContainer = document.getElementById('myChart');
const barChartContainer = document.getElementById('myBarChart');
const leaderboardList = document.getElementById("leaderboard");

// Functies
function createSuggestionItem(product) {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion');
    suggestionItem.textContent = product;
    suggestionItem.addEventListener('click', () => {
        foodInput.value = product;
        suggestionsBox.innerHTML = '';
    });
    return suggestionItem;
}

function updateSuggestions(inputValue) {
    suggestionsBox.innerHTML = '';
    if (inputValue) {
        const filteredProducts = FOOD_PRODUCTS.filter(product =>
            product.toLowerCase().startsWith(inputValue.toLowerCase())
        );
        filteredProducts.slice(0, 5).forEach(product => {
            suggestionsBox.appendChild(createSuggestionItem(product));
        });
    }
}

function createChart(container, type, data, options) {
    return new Chart(container, {
        type: type,
        data: data,
        options: options
    });
}

function populateLeaderboard(restaurants) {
    restaurants.forEach(restaurant => {
        const listItem = document.createElement("li");
        listItem.classList.add("leaderboard-item");
        listItem.innerHTML = `
            <span class="restaurant-name">${restaurant.name}</span>
            <span class="food-waste">${restaurant.waste}</span>
        `;
        leaderboardList.appendChild(listItem);
    });
}

// Event listeners
foodInput.addEventListener('input', (e) => updateSuggestions(e.target.value));

document.addEventListener('click', (e) => {
    if (!foodInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.innerHTML = '';
    }
});

// Chart data
const chartData = {
    labels: ['Appels', 'Bananas', 'Oranges', 'Grapes', 'Pears'],
    datasets: [{
        label: 'Fruit Quantity',
        data: [10, 20, 30, 40, 50],
        backgroundColor: CHART_COLORS.backgroundColor,
        borderColor: CHART_COLORS.borderColor,
        borderWidth: 1
    }]
};

const barChartData = {
    labels: ['KG', 'CL', 'ML', 'TRAYS'],
    datasets: [{
        label: 'Unit Quantities',
        data: [100, 200, 300, 400],
        backgroundColor: CHART_COLORS.backgroundColor.slice(0, 4),
        borderColor: CHART_COLORS.borderColor.slice(0, 4),
        borderWidth: 1
    }]
};

// Chart options
const chartOptions = {
    responsive: true,
    title: {
        display: true,
        text: 'Fruit Quantity Chart'
    }
};

const barChartOptions = {
    responsive: true,
    title: {
        display: true,
        text: 'Unit Quantities Chart'
    }
};

// Initialize charts
const chart = createChart(chartContainer, 'line', chartData, chartOptions);
const barChart = createChart(barChartContainer, 'bar', barChartData, barChartOptions);

// Populate leaderboard
const restaurants = [
    { name: "Restaurant A", waste: "5 kg" },
    { name: "Restaurant B", waste: "7 kg" },
    { name: "Restaurant C", waste: "10 kg" },
    { name: "Restaurant D", waste: "12 kg" },
];

populateLeaderboard(restaurants);