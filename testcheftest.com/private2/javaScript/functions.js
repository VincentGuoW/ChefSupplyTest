let brandsList = ["1880.php","ACP.php","Alto-Shaman.php","AmericanRange.php","AmericanMetalcraft.php",
                    "APWWyott.php","Ateco.php","Atosa.php","BakersPride.php","Berkel.php","Blodgett.php","Bloomfield.php",
                    "BlueSealCanada.php","BrevilleCommercial.php","Browne.php","Bunn.php","Cambro.php","Cameo.php","CardinalCanada.php",
                    "Carlise.php","Celco.php","ChampionMoyerDiebelCanada.php","ChefMaster.php","ChurchillChina.php","ComponentHardware.php",
                    "CresCorCanada.php","CrownVerity.php","DoyonBakingEquipment.php","Edlund.php","EFI.php","Eurodib.php","FDickMercer.php",
                    "Garland.php","Globe.php","Habco.php","HamiltonBeach.php","Hatco.php","HoshizakiPermul.php","Ice-O-Matic.php","Kilotech.php",
                    "KoalaCareProducts.php","LainoxCanada.php","Libbey.php","LockwoodManufacturing.php","LouisTellierCanada.php",
                    "Magnum.php","Mercer.php","Metro.php","Midea.php","MVPGroup.php","Nemco.php","NewAirRefrigeration.php","Omcan.php",
                    "Panasonic.php","Peugeot.php","PitcoFrialator.php","Rational.php","raulsen.php","RobotCoupe.php","Rubbermaid.php",
                    "Sammic.php","SanJamar.php","Scotsman.php","Simag.php","Somerset.php","Southbend.php","Star.php","Steelite.php",
                    "Stero.php","SwissmarImports.php","TableCraftProducts.php","TarrisonProductsLimited.php","Taylor.php","TaylorPrecision.php",
                    "Toastmaster.php","Traulsen.php","TurboChef.php","Unox.php","Victorinox.php","Vitamix.php","Vollrath.php","Vulcan.php",
                    "Waring.php","Wells.php","Winco.php","WoodStone.php","WorldTableware.php","Zwilling.php"/*,"GlobalIndustrial.php",
"GlobalSolutionsByNemco.php"*/];

function brandSeacher(inputBrand) {
    let brands = [];
    for(let j = 0; j < inputBrand.length; j++){
        let brand = inputBrand[j].split(' ');
        for(let i = 0; i < brandsList.length; i++){
            //let brand = brandsList[i].toLocaleLowerCase().split('.');
            let apiBrand = brandsList[i].toLowerCase().split('.');
            if(apiBrand[0].includes(brand[0])){
                //console.log(brandsList[i]);
                brands.push(brandsList[i]);
                //console.log("this is the brand cut", apiBrand);
                break;
            }
        }
    }
    let urls = brandSelector(brands);  
    return urls;   
}
/*function chue () {
    let fodi = brandsList.indexOf("FDickMercer.php");
    console.log (fodi)
}

chue();*/

function brandSelector(brands) {
    let urlList ="";
    //let baseUrl = 'https://testcheftest.com/.private/Api/brands.php?brand=';
    let baseUrl = 'https://thechefsupply.com/Api/brands.php?brand=';
    
    
    urlList = baseUrl;

    for (let i = 0; i < brands.length; i++) {
        let brandAndPhp = brands[i].split('.');
        let url = brandAndPhp[0] + '.json';
        if(i < brands.length - 1){
            urlList += url + "--"; 
        }
        else{
            urlList += url;
        }
    }
    
    //console.log(urlList);
    return urlList;
}


function categoryUrl(category)
{
   
    let url;
    
    switch (category) {
        case "Pizza Peel--Pizza Peel Hanger":
        case "Pizza Stone":
            let brands1 = [brandsList[4]];
            url = brandSelector(brands1);
            break;
        case "Pizza Delivery Bag--Pan Rack, Pizza--Pan Gripper--Pizza Cutter--Pizza Bubble Popper--Pizza Rocker": 
            let brands2 = [brandsList[4],brandsList[84]];
            url = brandSelector(brands2);
            break;
        
        case "Food Packaging machine--Heat Seal Machine--Bag Sealer":
            let brands4 = [brandsList[9],brandsList[30]];  
            url = brandSelector(brands4);
            break;
        case "Food Slicer, Electric":  
            let brands5 = [brandsList[9],brandsList[49],brandsList[33],brandsList[30]];
            url = brandSelector(brands5);
            break;
        case "Ice Maker Dispenser, Cube-Style--Ice Maker Dispenser, Nugget-Style--Ice Maker with Bin, Nugget-Style--Ice Maker with Bin, Cube-Style--Ice Maker with Bin, Flake-Style--Ice maker, Cube-Style--Ice Maker, Flake-Style--Ice Maker, Nugget-Style": 
        case "Ice Bin": 
            let brands6 = [brandsList[30],brandsList[38],brandsList[37],brandsList[29],brandsList[62]];
            url = brandSelector(brands6);
            break;
        case "Sous Vide Cooker": 
            let brands8 = [brandsList[13],brandsList[30],brandsList[35],brandsList[80],brandsList[82]];
            url = brandSelector(brands8);
            break;
        case "Fork, Cocktail Oyster--Fork, Dessert--Fork, Dinner--Fork, Dinner European--Fork, Fish--Fork, Lobster Pick--Fork, Salad--Fork, Snail / Escargot":
        case "Knife / Spreader--Knife, Dinner--Knife, Dessert":
        case "Spoon, Coffee / Teaspoon--Spoon, Demitasse--Spoon, Dessert--Spoon, Dinner--Spoon, Grapefruit / Cocktail--Spoon, Iced Tea--Spoon, Soup / Bouillon--Spoon, Sugar--Spoon, Tablespoon--Spoon, Tasting":
            let brands9 = [brandsList[14],brandsList[67],brandsList[0]];
            url = brandSelector(brands9);
            break;
        case "Knife, Steak":
            let brands10 = [brandsList[14],brandsList[67],brandsList[0],brandsList[78],brandsList[87]];
            url = brandSelector(brands10);
            break;
        case "Steam Table Pan, Stainless Steel--Steam Table Pan Cover, Stainless Steel":
            let brands11 = [brandsList[14],brandsList[80]];
            url = brandSelector(brands11);
            break;
        case "Oven, Deck-Type, Gas--Oven, Electric, Conveyor--Oven, Gas, Conveyor--Oven, Wood / Coal / Gas Fired--Pizza Bake Oven, Countertop, Electric--Pizza Bake Oven, Countertop, Gas--Pizza Bake Oven, Deck-Type, Electric--Pizza Bake Oven, Deck-Type, Gas":
            let brands12 = [brandsList[10],brandsList[32],brandsList[8],brandsList[76],brandsList[27],brandsList[82],brandsList[85]];   
            url = brandSelector(brands12);
            break;
        case "Hot Water Dispenser":
            let brands13 = [brandsList[15]];  
            url = brandSelector(brands13);
            break;
        case "Coffee Maker / Brewer Urn--Coffee Tea Brewer--Coffee Brewer for Airpot--Coffee Brewer For Decanter--Coffee Brewer for Satellites--Coffee Brewer for Thermal Server--Coffee Brewer, for Single Cup":
            let brands14 = [brandsList[15],brandsList[35],brandsList[45]];  
            url = brandSelector(brands14);
            break;
        case "Dishwasher Rack Extender--Dishwasher Rack, Bun Pan/Tray--Dishwasher Rack, Bun Pan / Tray--Dishwasher, For Flatware--Dishwasher Rack, Glass Compartment--Dishwasher Rack, Open--Dolly, Dishwasher Rack":
        case "Food Pan, Plastic--Food Pan, Cover, Plastic--Food Pan Colander--Food Pan Drain Tray--Food Pan, Hi-Temp Plastic":  
        case "Food storage container, box--food storage container--Food Storage Container Cover--Food Storage Container, Box Cover Lid": 
        case "Measuring Pitchers": 
        case "Shelving Label Holder / Marker--Stickers (labels)":
        case "Tumbler, Plastic":
        case "Food carrier, insulated plastic--Food Carrier Dolly":
            let brands15 = [brandsList[16]];
            url = brandSelector(brands15);
            break;
        case "Pizza delivery bag":
            let brands17 = [brandsList[16],brandsList[84]];
            url = brandSelector(brands17);
            break;
        case "Plate, China--Plate, Plastic--Plate/Platter, Compartment, China--Plate/Platter, Compartment, Plastic--Platter, China--Platter, Plastic":
        case "China, Bowl--Soup Bowl Crock, Onion--Bowl, Plastic--Soup Salad Pasta Cereal Bowl, Plastic":
        case "Dessert Dish, China--Ice Cream Sundae Dish, Plastic--Ice Cream Sundae Dish, Metal--Ice Cream Sundae Dessert Dish, Glass":
        case "Mug, China--Mug, Plastic":
            let brands18 = [brandsList[17],brandsList[67],brandsList[86],brandsList[23]];
            url = brandSelector(brands18);
            break;
        case "Brush, Bottle--Brush, Broiler / Grill--Brush, Butcher Block--Brush, Counter / Bench--Brush, Cutting Board--Brush, Floor--Brush, Fryer--Brush, Oven / Pizza--Brush, Panini / Waffle Baker--Brush, Wok--Brush, Vegetable":
            let brands19 = [brandsList[19],brandsList[84]];
            url = brandSelector(brands19);
            break;
        case "Dipper Well--Dipper Well Faucet--Faucet, Deck Mount--Faucet, Electronic hands Free--Faucet, Kettle / pot Filler--Faucet, Wall / Splash Mount--Pre-Rinse Faucet Assembly--Pre-Rinse Faucet Assembly, with Add On Faucet--Pre-Rinse, Add On Faucet": 
            let brands20 = [brandsList[24]];
            url = brandSelector(brands20);
            break;
        case "Charbroiler, Gas, Outdoor Grill": 
            let brands21 = [brandsList[26]]; 
            url = brandSelector(brands21);
            break;
        case "Can Opener, Electric--Can Opener, Handheld--Can Opener, Parts--Can Opener, Table Mount":
            let brands22 = [brandsList[28],brandsList[22],brandsList[69]];
            url = brandSelector(brands22);
            break;
        case "Dishtable, Soiled--Dishtable, Clean Straight":
        case "Sink, Hand--Sink, Drop-In":
        case "Sink, (1) One Compartment--Sink, (2) Two Compartment--Sink, (3) Three Compartment--Mop Sink":
        case 'Work Table, 12" - 21", Stainless Steel Top--Work Table, 24" - 27", Stainless Steel Top--Work Table, 30" - 35", Stainless Steel Top--Work Table, 36" - 38", Stainless Steel Top--Work Table, 40" - 48", Stainless Steel Top--Work Table, 54" - 62", Stainless Steel Top--Work Table, 63" - 72", Stainless Steel Top--Work Table, 73" - 84", Stainless Steel Top--Work Table, 85" - 96", Stainless Steel Top--Work Table, 109" - 120", Stainless Steel Top--Work Table, 121" - 132", Stainless Steel Top--Work Table, 133" - 144", Stainless Steel Top':
        case "Equipment Stand, for Countertop Cooking":
        case "Dish Cabinet--Work Table, Cabinet base Sliding Doors--Cabinet, Wall-Mounted":
        case "Glass Froster":
            let brands23 = [brandsList[29]];
            url = brandSelector(brands23);
            break;
        case "Chest Freezer":
            let brands24 = [brandsList[29],brandsList[20],brandsList[51]];
            url = brandSelector(brands24);
            break;
        case "Shelving, wall":
        case "Shelving, wire--Shelving Unit":
            let brands25 = [brandsList[29],brandsList[47]];
            url = brandSelector(brands25);
            break;
        case "Display Case, Refrigerated--Display Case, Refrigerated Bakery--Display Case, Refrigerated Deli--Display Case, Refrigerated Deli, Countertop--Display Case, Refrigerated, Countertop--Display Case, Refrigerated, Drop in--Display Case, Refrigerated, Dual Serve--Display Case, Refrigerated, Self-Serve--Display Case, Vertical Glass Sides": 
            let brands26 = [brandsList[29],brandsList[51],brandsList[49]];
            url = brandSelector(brands26);
            break;
        case "Display Case, Hot Food, Countertop--Display Merchandiser, Heated, For Multi-Product--Hot Dog merchandiser--Merchandiser, Open Heated Display": 
            let brands27 = [brandsList[29],brandsList[80],brandsList[36]];
            url = brandSelector(brands27);
            break;
        case "induction Soup Kettle--Soup Kettle": 
            let brands28 = [brandsList[30],brandsList[36],brandsList[84],brandsList[80]];
            url = brandSelector(brands28);
            break;
        case "Beverage Dispenser, Insulated--Beverage Dispenser, Non-insulated--Beverage Server--Beverage Dispenser, Electric (Cold)--Beverage Dispenser, Electric (Hot)--Frozen Drink Machine, Non-Carbonated, Bowl Type--Chocolate Fountain--Beverage Dispenser, Electric (cold)":
            let brands29 = [brandsList[30],brandsList[80]];  
            url = brandSelector(brands29);
            break;

        case "Kettle Mixer, Direct-Steam--Kettle, Direct Steam, Countertop--Kettle, Direct Steam, Stationary--Kettle, Direct Steam, Tilting--Kettle, Gas, Countertop--Kettle, Gas, Stationary--Kettle, Gas, Tilting--Kettle, Electric, Countertop--Kettle, Electric, Stationary--Kettle, Electric, Tilting":
            let brands31 = [brandsList[32],brandsList[81]];  
            url = brandSelector(brands31);
            break;
       
        case "Fryer, Electric, Countertop, Full Pot--Fryer, Electric, Countertop, Split Pot--Fryer, Electric, Floor Model, Full Pot--Fryer, Electric, Floor Model, Split Pot--Fryer, Electric, Multiple Battery--Fryer Gas Chicken / Fish--Fryer Gas Countertop Full Pot--Fryer Gas Countertop Split Pot--Fryer Gas Floor Model Full Pot--Fryer Gas Floor Model Split Pot--Fryer Gas Multiple Battery--Fryer Gas Outdoor Portable--Fryer Greaseless Air--Pressure Fryer Electric--Pressure Fryer Gas--Ventless Fryer--Oil Filter Pot--Fryer Filter Mobile":
            let brands33 = [brandsList[32],brandsList[55],brandsList[29],brandsList[7],brandsList[81]]; 
            url = brandSelector(brands33);
            break;
        case 'Range, 12" Heavy Duty, Electric--Range, 12" Heavy Duty, Gas--Range, 12" Restaurant, Electric--Range, 12" Restaurant, Gas--Range, 16"-17" Heavy Duty, Gas--Range, 18" Heavy Duty, Electric--Range, 18" Heavy Duty, Gas--Range, 22" Heavy Duty, Gas--Range, 24" Heavy Duty, Electric--Range, 24" Heavy Duty, Gas--Range, 24" Restaurant, Electric--Range, 24" Restaurant, Gas--Range, 30" Heavy Duty, Gas--Range, 30" Restaurant, Electric--Range, 32" Heavy Duty, Gas--Range, 34" Heavy Duty, Gas--Range, 36" Heavy Duty, Electric--Range, 36" Heavy Duty, Gas--Range, 36" Restaurant, Electric--Range, 36" Restaurant Gas--Range, 36" Restaurant, Gas/Electric--Range, 48" Heavy Duty, Gas--Range, 48" Restaurant, Gas--Range, 48" Restaurant, Electric--54" Heavy Duty, Gas--Range, 60" Heavy Duty, Electric--Range, 60" Heavy Duty, Gas--Range, 60" Restaurant, Gas--Range, 60" Restaurant, Electric--Range, 72" Heavy Duty, Gas--Range, 72" Restaurant, Gas--Range, 72" Restaurant, Electric--Range, Base, Gas--Range, Stock Pot, Gas--Range, Stock Pot, Electric--Range, Tandoor--Range, Wok, Gas--Induction Range, CounterTop--Induction Range, Floor Model':
            let brands34 = [brandsList[32],brandsList[65],brandsList[81],brandsList[3],brandsList[29],brandsList[7],brandsList[37]];
            url = brandSelector(brands34);
            break;
        case "Convection & Deck Oven Stacked--Convection Oven / Proofer, Electric--Convection Oven / Proofer, Gas--Convection Oven, Electric--Convection Oven, Gas--Oven, Deck-Type, Electric--Oven, Deck-Type, Gas":
            let brands35 = [brandsList[32],brandsList[65],brandsList[81],brandsList[3],brandsList[29],brandsList[7],brandsList[11],brandsList[8],brandsList[77]]; 
            url = brandSelector(brands35);
            break;
        case "Salamander Broiler, Electric--Salamander Broiler, Gas":
            let brands36 = [brandsList[32],brandsList[65],brandsList[81],brandsList[3],brandsList[29],brandsList[7],brandsList[37],brandsList[52]]; 
            url = brandSelector(brands36);
            break;
        case "Hot Plates": 
        case "Griddle / Charbroiler, Gas, Countertop--Griddle / Hotplate, Gas, Countertop--Griddle on Overfire Broiler, Gas, Countertop--Griddle on Overfire Broiler, Gas, Floor Model--Griddle, Electric, Countertop--Griddle, Electric, Floor Model--Griddle, Gas, Countertop--Griddle, Gas, Floor Model--Griddle, Outdoor Portable--Teppanyaki Griddle, Electric--Teppanyaki Griddle, Gas":
        case "Charbroiler / Hotplate, Gas, Countertop--Charbroiler, Charcoal--Charbroiler, Charcoal, Outdoor grill--Charbroiler, Electric, Countertop--Charbroiler, Electric, Floor Model--Charbroiler, Gas, Countertop--Charbroiler, Gas, Floor Model--Charbroiler, Gas, Outdoor Grill--Charbroiler, Wood Burning--Charbroiler, Gas, Countertop":
            let brands37 = [brandsList[32],brandsList[65],brandsList[81],brandsList[3],brandsList[29],brandsList[7],brandsList[37],brandsList[83],brandsList[66],brandsList[74]]; 
            url = brandSelector(brands37);
            break;
        case "First Aid Supplies":
            let brands38 = [brandsList[33]];
            url = brandSelector(brands38);
            break;
        case "Pasta cooker, Electric--Pasta Cooker, Gas":  
        case "Rice / Grain Cooker":
            let brands39 = [brandsList[33],brandsList[84],brandsList[52],brandsList[35]];
            url = brandSelector(brands39);
            break;
        case "":
        
        case "Toaster Oven broiler, Countertop--Toaster, Contact Grill--Toaster,Contact Grill, Conveyor Type--Toaster, Pop-Up":  
            let brands41 = [brandsList[36],brandsList[66],brandsList[82],brandsList[35]];
            url = brandSelector(brands41);
            break;
        case "Heat lamp bulb--heat lamp, strip type--Heat Lamp, Bulb Type--Fryer dump Station--French fry Warmer--Carving Station Unit--Carving Station / Shelf, Countertop": 
            let brands42 = [brandsList[36],brandsList[84],brandsList[50]];
            url = brandSelector(brands42);
            break;
        case "baby Changing Table":
            let brands43 = [brandsList[40]];
            url = brandSelector(brands43);
            break;
        case "Glass, Wine--Glassware, Plastic":
        case "Glass, Champagne / Sparkling Wine--Glassware, Plastic":
        case "Glass, Beer--Glassware, Plastic":
        case "Glass, Old Fashioned / Rocks--Glassware, Plastic--Glass, Shot / Whiskey":
        case "Glass, Cocktail / Martini--Glass, Cordial / Sherry--Glassware, Plastic":
        case "Glass, Shot / Whiskey--Glassware, Plastic":
        case "Tumbler, Metal--Glass, Specialty":
            let brands44 = [brandsList[42],brandsList[18],brandsList[14]];
            url = brandSelector(brands44);
            break;
        case "Pitcher, Plastic--Decanter Carafe":
            let brands45 = [brandsList[42],brandsList[84]];
            url = brandSelector(brands45);
            break;
        case "Cabinet, Cook / Hold / Oven--Heated Cabinet, Countertop--Heated Cabinet, Mobile--Heated Cabinet, Mobile, Pass-Thru--Heated Cabinet, Reach-In--Heated Cabinet, Roll-In--Heated Cabinet, Undercounter--Heated Holding Proofing Cabinet, Half-Height--Heated Holding Proofing Cabinet, Mobile--Heated Holding Proofing Cabinet, Mobile, Half-Height--Heated Holding Proofing Cabinet, Mobile, Pass-Thru--Heated Holding Proofing, Mobile, Undercounter Rethermalization & Holding Cabinet--Proofing cabinet--Heated Holding Proofing Cabinet, Mobile, Undercounter": 
            let brands46 = [brandsList[43],brandsList[47],brandsList[2],brandsList[25]];
            url = brandSelector(brands46);
            break;
        case "Mandoline Slicer": 
            let brands47 = [brandsList[44]]; 
            url = brandSelector(brands47);
            break;
        case "Pan Rack, Bun":
            let brands48 = [brandsList[45],brandsList[84]];
            url = brandSelector(brands48);
            break;
        case "Microwave Oven--Oven, Combination Rapid Cook":
            let brands49 = [brandsList[48],brandsList[4],brandsList[53]];
            url = brandSelector(brands49);
            break;
        case "Pasta Machine, Extruder--Pasta Machine, Sheeter / Mixer":
            let brands50 = [brandsList[49],brandsList[52],brandsList[14]];  
            url = brandSelector(brands50);
            break;
        case "Pasta cooker, Electric--Pasta Cooker, Gas":  
        case "Rice / Grain Cooker":
            let brands51 = [brandsList[49],brandsList[53],brandsList[35]];
            url = brandSelector(brands51);
            break;
        case "Hot Dog Broiler / Rotisserie--Hot Dog Bun / Roll Warmer--Hot Dog Grill--Hot Dog Heat & Hold Drawer--Hot Dog Merchandiser--Hot Dog Steamer": 
            let brands52 = [brandsList[50],brandsList[80],brandsList[84]];
            url = brandSelector(brands52);
            break; 
        case "Fruit / Vegetable Dicer--Fruit / Vegetable Slicer, cutter, dicer":  
            let brands53 = [brandsList[50],brandsList[84]];
            url = brandSelector(brands53);
            break;
        case "Meat Tenderizer, Electric--Meat Tenderizer, Handheld--Meat Tenderizer, mallet--Meat Tenderizer, Manual":  
            let brands54 = [brandsList[52],brandsList[84],brandsList[22]];
            url = brandSelector(brands54);
            break;
        case "Combi Oven, Electric--Combi Oven, Gas--Oven, Combination Rapid Cook":
            let brands55 = [brandsList[56],brandsList[77],brandsList[81],brandsList[32],brandsList[41]]; 
            url = brandSelector(brands55);
            break;
        case "Juicer Extractor--Juicer, Electric--Juicer, Manual":
            let brands56 = [brandsList[58]];  
            url = brandSelector(brands56);
            break;
        case "Food Processor, benchtop / Countertop--Food Processor, Floor Model": 
            let brands57 = [brandsList[58],brandsList[60],brandsList[82]];
            url = brandSelector(brands57);
            break;
        case "Mop Bucket Wringer combination":
        case "Brush, floor--Drain, floor--Floor mat":
        case "Trash Receptacle Lid / Top--Trash Receptacle, Dolly--Trash Receptacle--Trash can / container":
        case "Recycling Receptacle / Container, Plastic":
            let brands58 = [brandsList[59],brandsList[33],brandsList[84]];
            url = brandSelector(brands58);
            break;
        case "Chilling Paddle":
            let brands59 = [brandsList[61]];
            url = brandSelector(brands59);
            break;
        case "Safety apparel":
            let brands60 = [brandsList[61],brandsList[46]];
            url = brandSelector(brands60);
            break;
        case "Squeeze Bottle":
            let brands62 = [brandsList[70],brandsList[80]];
            url = brandSelector(brands62);
            break;
        case "Underbar ice Bin/Cocktail Station, Sink Combo": 
            let brands63 = [brandsList[71]];
            url = brandSelector(brands63);
            break;
        case "Knife, Chef": 
        case "Knife, Boning":
        case "Knife, Paring":
        case "Knife, slicer":
        case "Knife, Cleaver":
        case "Kitchen Shears--Poultry Shears--Seafood Shears":
        case "Knife, Bread / Sandwich":
        case "Knife / Shears Sharpener, Electric--Knife Sharpener, Manual--Knife, Sharpener Honing System--Knife, Sharpening Stone--Knife, Sharpening Steel":
        case "Speciality Knife":
        case "Knife Set":
        case "Knife Case--Knife Block Rack--knife Blade Cover / Guard":
            let brands65 = [brandsList[14],brandsList[78],/*brandsList[31],*/brandsList[46],brandsList[87],brandsList[84]];
            url = brandSelector(brands65);
            break;
        case "Blender, food, Countertop--Blender, Food, Floor Model--Blender, Bar--Mixer, Hand immersion":  
        case "Blender, Bar--Mixer, Drink / Bar": 
            let brands66 = [brandsList[79],brandsList[35],brandsList[82]]; 
            url = brandSelector(brands66);
            break;
        case "Serving Counter, Hot & Cold--Serving Counter, Hot Food, Electric--Serving Counter, Hot Food, Gas":  
        case "Soft serve Machine": 
        case "Disher, Standard Round Bowl":
            let brands67 = [brandsList[80]];
            url = brandSelector(brands67);
            break;
        case "Cart / Dolly, Dish--Cart, Bussing Utility Transport, Metal--Cart, Bussing Utility Transport, Plastic--Cart, Bussing Utility Transport, Metal Wire":
            let brands68 = [brandsList[80],brandsList[59],brandsList[33],brandsList[47]];
            url = brandSelector(brands68);
            break;
        case "French Whip / Whisk--Piano Whip / Whisk--Specialty Whip / Whisk":
            let brands69 = [brandsList[80],brandsList[84]];
            url = brandSelector(brands69);
            break;
        case "Buffet Warmer--Display Case, Hot Food, Countertop--Food Pan Warmer, Countertop--Food Pan Warmer/Cooker, Countertop--Food Pan Warmer/Rethermalizer, Countertop--Food Topping Warmer, Countertop--Heated Shelf Food Warmer--hot Dog Bun / Roll Warmer--Induction Range Warmer, Countertop--Warming Drawer, Free Standing": 
            let brands70 = [brandsList[80],brandsList[84],brandsList[36]];
            url = brandSelector(brands70);
            break;
        case "Tortilla Dough Press": 
        case "Popcorn Popper": 
        case "Paella Pan--Cast Iron Paella Pan":
        case "Bain Marie Pot--Bain Marie Pot Cover":
        case "Ingredient Bin--Ingredient Bin Lid--Ingredient Bin Cover":
        case "Dough Box--Dough Proofing Retarding Pans / Boxes--Pizza Dough Box--Pizza Dough Box Cover--Dough Box Cover":
        case "Bus Box / Tub--Bus Box / Tub Cover--Tote Box--Tote Box Cover":
        case "Skimmer":
        case "Mixing Paddle":
        case "Skewers, Metal--Skewers, Wood":
        case "Shaker / dredge--Shaker / Dredge Set--Shaker / Dredge, Lid":
        case "Steak Weight":
        case "Egg Ring":
        case "Butter Spreader--Sandwich Spreader":
        case "Garnishing Tools":
        case "Colander--Food Pan Colander--Mesh Strainer":
        case "Bake Pan--Baker's Blade--Baking Cookie Sheet--Baking Dish, China--Baking Mat--Baking Sheet, Pastry Mold--Bun / Sheet Pan--Cake / Pie Display Stand--Cake Cover--Cake Decorating Accessories--Cake Decorating Set--Cake decorating Tube Tips--Cake Pan--Cake Pan, Angel Food--Cake Pan, Removable Bottom--Casserole Dish, China--Donut Cutter--Egg Ring--Jelly Roll Pan--Loaf Pan--Muffin Pan--Pastry Bag--Pastry Brush--Pastry Decorating Comb--Pastry Dough Cutting Wheel--Pie / Cake Marker--Pie / Cake Server--Pie Pan--Pizza Pan--Proofing BAsket--Roller Docker--Rolling Pin--Scoop--Sieve, Drum--Sifter--Springform Pan--Wire Pan Rack / Grate": 
        case "Mixing Bowl":
        case "Baking": 
        case "Cutter Mold":
        case "pizza pan--pizza screen":
        case "Measuring Cups--Measuring Cups, Accessories--Measuring Scoops--Measuring Spoons":
        case "Ladle, Serving--Ladle, Gravy / Sauce--ladle, Soup--Ladle, Salad Dressing, Plastic":
        case "Scoop--French Fry Scoop--Ice Cream Dipper":
        case "spoon, portion control":
        case "Speed Rail / Rack":
        case "Coffee Pot/Teapot, China--Coffee Pot/Teapot, Metal":
        case "Salt / Pepper Shaker--Salt / Pepper Shaker & Mill Set--Salt / Pepper Shaker & Mill, Combo--Salt / Pepper Shaker Mill, Electric--Salt / Pepper Shaker, China--Salt / Pepper Mill, Universal":
        case "Bar Condiment Holder--Condiment Caddy, Countertop Organizer--Condiment Dispenser Pump-Style--Condiment Organizer Bin Rack--Dispenser, Packet--Dispensers, Souffle Condiment Cup":
        case "Menu Cover--Menu Card Holder / Number Stand--Guest Check Presenter--Guest Check Pad Holder":
        case "Tray, Fast Food--Tray Stand--Seafood Tray--Serving Tray, Non-Skid--Taco Prep / Hot Dog Tray--Serving & Display Tray, Metal":
        case "Chafer--Chafing Dish Fuel--Coffee Chafer Urn--Soup Chafer Marmite":
        case "Display Case":
        case "Beverage Dispenser, Insulated--Beverage Dispenser, Non-Insulated":
        case "Sponge--Scrubbers":
        case "Sprayer Bottle, Plastic":  
        case "Towel / Cloth / Mitts, microfiber":
        case "Bucket":
        case "Sign, wet floor": 
        case "Grater, Box--Grater, Electric--Grater, Manual--Grater, Rotary":
        case "Cutting Board Mat--Cutting Board Plane--Cutting Board Rack--Cutting Board, Plastic--Cutting Board, Wood":
            let brands71 = [brandsList[84]];
            url = brandSelector(brands71);
            break;
        case "Serving Bowl, Glass--Serving Bowl, Salad Pasta, Plastic":
        case "Platter--Serving Board":
        case "Serving Fork--Serving Spoon, Notched--Serving Spoon, Perforated--Serving Spoon, Slotted--Serving Spoon, Solid--Tongs, Serving--Tongs, Serving / Utility, Plastic":
        case "Juice Dispenser--Beverage Dispenser--Tea / Coffee Dispenser--Hot Water Dispenser":
        case "Potato Masher":
            let brands72 = [brandsList[84],brandsList[14]];
            url = brandSelector(brands72);
            break;
        case "Serving Spoon, Solid--Serving Spoon, Perforated--Spatula, Plastic--Spatula, Baker's--Spoon / Spatula, Wooden--Serving Spoon, Perforated--Serving Spoon, Solid--Serving Spoon, Slotted":
            let brands73 = [brandsList[84],brandsList[14],brandsList[46]];
            url = brandSelector(brands73);
            break;
        case "Ramekin / Sauce Cup, China--Ramekin / Sauce Cup, Glass--Ramekin / Sauce Cup, Metal--Ramekin / Sauce Cup, Plastic":
            let brands74 = [brandsList[84],brandsList[14],brandsList[70]];
            url = brandSelector(brands74);
            break;
        case "Broom--Broom Head--Broom head, Push--Dust pan--Lobby Dust Pan":
        case "Wet Mop Head--Wet mop, Complete--Mop Broom Squeegee Handle":
        case "Squeegee":
            let brands75 = [brandsList[84],brandsList[33]];
            url = brandSelector(brands75);
            break;
        case "Portable bar, parts & accessories--Portable bar":
        case "bar cocktail shaker":
        case "jigger--liquor pourer":
        case "Turner, Perforated, Plastic--Turner, Perforated, Stainless Steel--Turner, Slotted, Plastic--Turner, Slotted, Stainless Steel--Turner, Solid, Plastic--Turner, Solid, Stainless Steel--Turner, Perforated, Wood Handle--Turner, Slotted, Wood Handl--Turner, Solid, Wood Handle":
            let brands77 = [brandsList[84],brandsList[46]];
            url = brandSelector(brands77);
            break;
        case "condiment caddy, Countertop Organizer":
        case "Ice tote": 
        case "Oven Mitt--Pot Holder":
        case "Timer, Electronic--Timer, Manual":
        case "paper napkin dispenser--Paper towel dispenser--Hand soap / sanitizer dispenser--Toilet tissue dispenser":
            let brands78 = [brandsList[84],brandsList[61]];
            url = brandSelector(brands78);
            break;
        case "Miniature Cookware / Serveware--Basket, Fast Food--Basket, Tabletop, Plastic--Basket, Tabletop, Wood--Basket, Tabletop, Metal--Basket, Display, Wire":
            let brands81 = [brandsList[84],brandsList[70]];
            url = brandSelector(brands81);
            break;
        case "Meat thermometer--Oven Thermometer--Thermometer, Deep Fry / Candy--Thermometer, Dishwasher--Thermometer, Grill--Thermometer, Hot Beverage--Thermometer, Infrared--Thermometer, Pocket--Thermometer, Probe--Thermometer, Refrig Freezer--Thermometer probe cleaning Wipes":
            let brands82 = [brandsList[84],brandsList[72],brandsList[73],brandsList[61]];
            url = brandSelector(brands82);
            break;
        case "Fry Pan--Cast Iron Fry Pan": 
        case "Saute Pan":
        case "Sauce Pot": 
        case "Stock Pot":
        case "Brazier Pan": 
        case "Wok Pan--Cast iron Wok Pan":
        case "Roasting Pan--Cast Iron Roasting Pan":
            let brands83 = [brandsList[84],brandsList[80],brandsList[87],brandsList[14]];
            url = brandSelector(brands83);
            break;
        case "Tongs, Ice / Pom--Tongs, Scissor--Tongs, Serving--Tongs, Serving / Utility, Plastic--Tongs, Snail / Escargot--Tongs, Spaghetti--Tongs, Sugar--Tongs, Tweezer--Tongs, Utility":
            let brands84 = [brandsList[84],brandsList[80],brandsList[28]];
            url = brandSelector(brands84);
            break;
        case "Pot Pan Set": 
        case "Cast Iron Dutch Oven--Cast Iron Fry Pan--Cast Iron Grill / Griddle Pan--Cast Iron Sauce Pan":
            let brands85 = [brandsList[87]];
            url = brandSelector(brands85);
            break;
        case "Dishwasher, Countertop--Dishwasher, Undercounter--Dishwasher, Door Type--Dishwasher, Circular Conveyor--Dishwasher, Door Type, Ventless--Dishwasher, Conveyor Type--Dishwasher, Conveyor Type, Ventless--Dishwasher, Pot/Pan/Utensil, Door Type--Glasswasher, Pass-Thru--Dishwasher, Flight Type--Glasswasher, Undercounter / Underbar":
            let brands87 = [brandsList[87],brandsList[68]];  
            url = brandSelector(brands87);
            break;
        case "Meat Mixer--Meat Bone Saw, Electric--Meat Grinder, Electric--Meat Grinder, Manual--Meat Chopper grinder": 
            let brands88 = [brandsList[87],brandsList[30],brandsList[52]]; 
            url = brandSelector(brands88);
            break;
        case "Mixer, Planetary--Mixer, Spiral Dough":
            let brands89 = [brandsList[87],brandsList[33],brandsList[30]]; 
            url = brandSelector(brands89);
            break;
        case "knife":
            let brands90 = [brandsList[87],/*brandsList[31],*/brandsList[78],brandsList[84]];
            url = brandSelector(brands90);
            break;
        
        //To be defined
        /*
        case "Cotton Candy Machine & Display": // other
            break;
        case "Oven Mitt--Gloves, Heat Resistant--Gloves, Dishwashing / Cleaning--Glove, Cut Resistant--Disposable Gloves":
            break;
        case "Chef's coat":
        case "Chef's pants":
        case "Chef's hat":
        case "Bib Apron--Dishwashing Apron--Waist Apron":
        case "Cook's shirt":
            break;
        case "Hair net":
            break;
        case "Towel / cloth":
            break;
        case "Chemicals: Neutral cleaners--Chemicals: Oven cleaners--Metal cleaner--Chemicals: Ice machine cleaner--Chemicals: Restroom & Bowl Cleaner":
            break;
        case "Test Strips":
            break;
        case "Cleaning Cloth / Wipes--Thermometer Probe Cleaning Wipes":
            break;
        case "Scale, pocket--Scale, Portion, Dial--Scale, Portion, Digital--Scale, Receiving, Digital--Scale, Receiving, Dial--Scale, Price Computing--Scale, Hanging--Label Printing Scale":
            break;
        case "Disposable plates--Disposable bowls--Disposable cone cups--Disposable Platters / Trays--Disposable cups--Disposable baking container--Disposable french fry holder--Disposable container meal kit--Disposable take out container":
            break;
            */
            
    }
    //console.log(url);
    return url;
}





