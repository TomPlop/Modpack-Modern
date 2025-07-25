
//priority: 0
"use strict";

//#region Assign materials
//////////////////////////////
//////////////////////////////
//Assign a new material here with the name of the material, the hex color for the name display, the item id that is used during smithing, and an index number that should be !!!unique!!!
const materials = [
    //Gems
    {materialName: 'almandine_tfc', nameColor: '#7b1112', itemName: 'gtceu:exquisite_almandine_gem', indexNumber: 0.11, lang_en_us: 'Almandine'},
    {materialName: 'andradite_tfc', nameColor: '#c29d1e', itemName: 'gtceu:exquisite_andradite_gem', indexNumber: 0.12, lang_en_us: 'Andradite'},
    {materialName: 'blue_topaz_tfc', nameColor: '#a7c1c6', itemName: 'gtceu:exquisite_blue_topaz_gem', indexNumber: 0.13, lang_en_us: 'Blue Topaz'},
    {materialName: 'cinnabar_tfc', nameColor: '#c2274a', itemName: 'gtceu:exquisite_cinnabar_gem', indexNumber: 0.14, lang_en_us: 'Cinnabar'},
    {materialName: 'coal_tfc', nameColor: '#2b2f32', itemName: 'gtceu:exquisite_coal_gem', indexNumber: 0.15, lang_en_us: 'Coal'},
    {materialName: 'diamond_tfc', nameColor: '#98c2c6', itemName: 'gtceu:exquisite_diamond_gem', indexNumber: 0.16, lang_en_us: 'Diamond'},
    {materialName: 'emerald_tfc', nameColor: '#11c254', itemName: 'gtceu:exquisite_emerald_gem', indexNumber: 0.17, lang_en_us: 'Emerald'},
    {materialName: 'green_sapphire_tfc', nameColor: '#75af89', itemName: 'gtceu:exquisite_green_sapphire_gem', indexNumber: 0.18, lang_en_us: 'Green Sapphire'},
    {materialName: 'grossular_tfc', nameColor: '#c28b5c', itemName: 'gtceu:exquisite_grossular_gem', indexNumber: 0.19, lang_en_us: 'Grossular'},
    {materialName: 'rutile_tfc', nameColor: '#681c05', itemName: 'gtceu:exquisite_rutile_gem', indexNumber: 0.191, lang_en_us: 'Rutile'},
    {materialName: 'lazurite_tfc', nameColor: '#1e29bb', itemName: 'gtceu:exquisite_lazurite_gem', indexNumber: 0.192, lang_en_us: 'Lazurite'},
    {materialName: 'pyrope_tfc', nameColor: '#b11344', itemName: 'gtceu:exquisite_pyrope_gem', indexNumber: 0.193, lang_en_us: 'Pyrope'},
    {materialName: 'rock_salt_tfc', nameColor: '#c2b2af', itemName: 'gtceu:exquisite_rock_salt_gem', indexNumber: 0.194, lang_en_us: 'Rock Salt'},
    {materialName: 'ruby_tfc', nameColor: '#a41b0c', itemName: 'gtceu:exquisite_ruby_gem', indexNumber: 0.195, lang_en_us: 'Ruby'},
    {materialName: 'salt_tfc', nameColor: '#bebec2', itemName: 'gtceu:exquisite_salt_gem', indexNumber: 0.196, lang_en_us: 'salt'},
    {materialName: 'sapphire_tfc', nameColor: '#2628b0', itemName: 'gtceu:exquisite_sapphire_gem', indexNumber: 0.197, lang_en_us: 'Sapphire'},
    {materialName: 'sodalite_tfc', nameColor: '#2e40c6', itemName: 'gtceu:exquisite_sodalite_gem', indexNumber: 0.198, lang_en_us: 'Sodalite'},
    {materialName: 'coke_tfc', nameColor: '#424847', itemName: 'gtceu:exquisite_coke_gem', indexNumber: 0.199, lang_en_us: 'Coke'},
    {materialName: 'spessartine_tfc', nameColor: '#c28017', itemName: 'gtceu:exquisite_spessartine_gem', indexNumber: 0.181, lang_en_us: 'Spessartine'},
    {materialName: 'topaz_tfc', nameColor: '#b1a42d', itemName: 'gtceu:exquisite_topaz_gem', indexNumber: 0.182, lang_en_us: 'Topaz'},
    {materialName: 'uvarovite_tfc', nameColor: '#22b43b', itemName: 'gtceu:exquisite_uvarovite_gem', indexNumber: 0.183, lang_en_us: 'Uvarovite'},
    {materialName: 'nether_quartz_tfc', nameColor: '#bdb6b0', itemName: 'gtceu:exquisite_nether_quartz_gem', indexNumber: 0.184, lang_en_us: 'Nether Quartz'},
    {materialName: 'certus_quartz_tfc', nameColor: '#8ca4c4', itemName: 'gtceu:exquisite_certus_quartz_gem', indexNumber: 0.185, lang_en_us: 'Certus Quartz'},
    {materialName: 'quartzite_tfc', nameColor: '#b8bab8', itemName: 'gtceu:exquisite_quartzite_gem', indexNumber: 0.186, lang_en_us: 'Quartzite'},
    {materialName: 'realgar_tfc', nameColor: '#c22e28', itemName: 'gtceu:exquisite_realgar_gem', indexNumber: 0.187, lang_en_us: 'Realgar'},
    {materialName: 'malachite_tfc', nameColor: '#00b789', itemName: 'gtceu:exquisite_malachite_gem', indexNumber: 0.188, lang_en_us: 'Malachite'},
    {materialName: 'glass_tfc', nameColor: '#c2c2c6', itemName: 'gtceu:exquisite_glass_gem', indexNumber: 0.189, lang_en_us: 'Glass'},
    {materialName: 'olivine_tfc', nameColor: '#7fad03', itemName: 'gtceu:exquisite_olivine_gem', indexNumber: 0.171, lang_en_us: 'Olivine'},
    {materialName: 'opal_tfc', nameColor: '#bdadb6', itemName: 'gtceu:exquisite_opal_gem', indexNumber: 0.172, lang_en_us: 'Opal'},
    {materialName: 'amethyst_tfc', nameColor: '#9b78ba', itemName: 'gtceu:exquisite_amethyst_gem', indexNumber: 0.173, lang_en_us: 'Amethyst'},
    // {materialName: 'echo_shard_tfc', nameColor: '#002123', itemName: 'gtceu:exquisite_echo_shard_gem', indexNumber: 0.174, lang_en_us: 'Echo Shard'}, // disabled
    {materialName: 'lapis_tfc', nameColor: '#6581c6', itemName: 'gtceu:exquisite_lapis_gem', indexNumber: 0.175, lang_en_us: 'Lapis'},
    {materialName: 'apatite_tfc', nameColor: '#059cbb', itemName: 'gtceu:exquisite_apatite_gem', indexNumber: 0.176, lang_en_us: 'Apatite'},
    {materialName: 'red_garnet_tfc', nameColor: '#710910', itemName: 'gtceu:exquisite_red_garnet_gem', indexNumber: 0.177, lang_en_us: 'Red Garnet'},
    {materialName: 'yellow_garnet_tfc', nameColor: '#bbc207', itemName: 'gtceu:exquisite_yellow_garnet_gem', indexNumber: 0.178, lang_en_us: 'Yellow Garnet'},
    {materialName: 'monazite_tfc', nameColor: '#9eb576', itemName: 'gtceu:exquisite_monazite_gem', indexNumber: 0.179, lang_en_us: 'Monazite'},
    {materialName: 'rose_quartz_tfc', nameColor: '#ba3458', itemName: 'gtceu:exquisite_rose_quartz_gem', indexNumber: 0.161, lang_en_us: 'Rose Quartz'},
    {materialName: 'fluix_tfc', nameColor: '#53458d', itemName: 'tfg:exquisite_fluix_gem', indexNumber: 0.162, lang_en_us: 'Fluix'},
    //Metals
    {materialName: 'silver_tfc', nameColor: '#d8d8f4', itemName: 'vintageimprovements:silver_sheet', indexNumber: 0.162, lang_en_us: 'Silver'},
    {materialName: 'sterling_silver_tfc', nameColor: '#eae5d3', itemName: 'gtceu:sterling_silver_plate', indexNumber: 0.163, lang_en_us: 'Sterling Silver'},
    {materialName: 'gold_tfc', nameColor: '#ede65b', itemName: 'create:golden_sheet', indexNumber: 0.164, lang_en_us: 'Gold'},
    {materialName: 'rose_gold_tfc', nameColor: '#eddedb', itemName: 'vintageimprovements:rose_gold_sheet', indexNumber: 0.165, lang_en_us: 'Rose Gold'},
    {materialName: 'nickel_tfc', nameColor: '#bfd1ea', itemName: 'vintageimprovements:nickel_sheet', indexNumber: 0.166, lang_en_us: 'Nickel'},
    {materialName: 'platinum_tfc', nameColor: '#d8cea1', itemName: 'vintageimprovements:platinum_sheet', indexNumber: 0.167, lang_en_us: 'Platinum'},
    {materialName: 'titanium_tfc', nameColor: '#c496d8', itemName: 'gtceu:titanium_plate', indexNumber: 0.168, lang_en_us: 'Titanium'},
    {materialName: 'bismuth_tfc', nameColor: '#607c79', itemName: 'gtceu:bismuth_plate', indexNumber: 0.169, lang_en_us: 'Bismuth'},
    {materialName: 'neutronium_tfc', nameColor: '#d7d7db', itemName: 'gtceu:neutronium_plate', indexNumber: 0.151, lang_en_us: 'Neutronium'},
    //Other
    {materialName: 'pyrite_tfc', nameColor: '#a75e10', itemName: 'gtceu:rich_raw_pyrite', indexNumber: 0.152, lang_en_us: 'Pyrite'},
    {materialName: 'redx_tfc', nameColor: '#a06156', itemName: 'morered:red_alloy_wire', indexNumber: 0.153, lang_en_us: 'RedX'}
]
/////////////////////////////
/////////////////////////////

// #region Tags
// Assigns trim_materials tag to items registered above
function registerTFGTrimTags(event) { 
  event.removeAll('minecraft:trim_materials')
  materials.forEach(material => {
    event.add('minecraft:trim_materials', material.itemName)
  })
}
// #endregion

//#region Trim Item Atlas
//Automatically creates armor_trims.json file
const trimfilePath = 'kubejs/assets/minecraft/atlases/armor_trims.json';
let trimdata = JsonIO.read(trimfilePath) || {};
trimdata["sources"] = trimdata["sources"] || [];

let trimsource = trimdata["sources"].find(s => s.type === "paletted_permutations");

if (!trimsource) {
    trimsource = {
    type: "paletted_permutations",
    textures: [
      "trims/models/armor/coast",
      "trims/models/armor/coast_leggings",
      "trims/models/armor/sentry",
      "trims/models/armor/sentry_leggings",
      "trims/models/armor/dune",
      "trims/models/armor/dune_leggings",
      "trims/models/armor/wild",
      "trims/models/armor/wild_leggings",
      "trims/models/armor/ward",
      "trims/models/armor/ward_leggings",
      "trims/models/armor/eye",
      "trims/models/armor/eye_leggings",
      "trims/models/armor/vex",
      "trims/models/armor/vex_leggings",
      "trims/models/armor/tide",
      "trims/models/armor/tide_leggings",
      "trims/models/armor/snout",
      "trims/models/armor/snout_leggings",
      "trims/models/armor/rib",
      "trims/models/armor/rib_leggings",
      "trims/models/armor/spire",
      "trims/models/armor/spire_leggings",
      "trims/models/armor/wayfinder",
      "trims/models/armor/wayfinder_leggings",
      "trims/models/armor/shaper",
      "trims/models/armor/shaper_leggings",
      "trims/models/armor/silence",
      "trims/models/armor/silence_leggings",
      "trims/models/armor/raiser",
      "trims/models/armor/raiser_leggings",
      "trims/models/armor/host",
      "trims/models/armor/host_leggings"
    ],
    palette_key: "trims/color_palettes/trim_palette",
    permutations: {}
  };
  trimdata["sources"].push(trimsource);
}

trimsource.permutations = trimsource.permutations || {};

materials.forEach(material => {
    trimsource.permutations[material.materialName] = `tfc:color_palettes/trims/${material.materialName}`;
});
JsonIO.write(trimfilePath, trimdata);
//#endregion

//#region Trim Block Atlas
//Automatically creates blocks.json file
const blockfilePath = 'kubejs/assets/minecraft/atlases/blocks.json';
let blockdata = JsonIO.read(blockfilePath) || {};
blockdata["sources"] = blockdata["sources"] || [];

let blocksource = blockdata["sources"].find(s => s.type === "paletted_permutations");

if (!blocksource) {
    blocksource = {
    type: "paletted_permutations",
    textures: [
      "trims/items/leggings_trim",
      "trims/items/chestplate_trim",
      "trims/items/helmet_trim",
      "trims/items/boots_trim",
      "tfc:item/helmet_trim",
      "tfc:item/chestplate_trim",
      "tfc:item/greaves_trim",
      "tfc:item/boots_trim"
    ],
    palette_key: "trims/color_palettes/trim_palette",
    permutations: {}
  };
  blockdata["sources"].push(blocksource);
}

blocksource.permutations = blocksource.permutations || {};

materials.forEach(material => {
    blocksource.permutations[material.materialName] = `tfc:color_palettes/trims/${material.materialName}`;
});
JsonIO.write(blockfilePath, blockdata);
//#endregion

//#region Trim Material Data
//Automatically creates material.json files
materials.forEach(material => {
    const trimfilepaths = [
      `kubejs/data/minecraft/trim_material/${material.materialName}.json`,
      `kubejs/data/tfc/trim_material/${material.materialName}.json`
    ];
  
    const newtrimdata = {
      asset_name: material.materialName,
      description: {
        color: material.nameColor,
        translate: `trim_material.tfc.${material.materialName}`
      },
      ingredient: material.itemName,
      item_model_index: material.indexNumber
    };
  
    trimfilepaths.forEach(trimfilepaths => {
      const existingData = JsonIO.read(trimfilepaths);
  
      // Only write if the file is missing or contents are different
      if (JSON.stringify(existingData) !== JSON.stringify(newtrimdata)) {
        JsonIO.write(trimfilepaths, newtrimdata);
      }
    });
  });
//#endregion

//#region Lang
//en_us
//reads the existing file, inserts new key-value pair, writes info back to the file
const langfilePath = 'kubejs/assets/tfc/lang/en_us.json';
let langdata = JsonIO.read(langfilePath) || {};

materials.forEach(material => {
    langdata[`trim_material.tfc.${material.materialName}`] = material.lang_en_us;
});

JsonIO.write(langfilePath, langdata);
//#endregion
