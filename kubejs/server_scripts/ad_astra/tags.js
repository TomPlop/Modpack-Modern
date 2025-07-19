// priority: 0

const registerAdAstraFluidTags = (event) => {

	global.AD_ASTRA_DISABLED_FLUIDS.forEach(fluid => {
		event.removeAllTagsFrom(fluid)
		event.add('c:hidden_from_recipe_viewers', fluid)
	})

	// Using this to represent 'breathable air' instead of oxygen
	event.removeAllTagsFrom('ad_astra:oxygen')

	event.removeAll('ad_astra:fuel')
	event.removeAll('ad_astra:efficient_fuel')

	event.add('ad_astra:tier_1_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_2_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_3_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_4_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_5_rocket_fuel', 'gtceu:rocket_fuel')

	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:bio_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:cetane_boosted_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:gasoline')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:high_octane_gasoline')

	event.add('ad_astra:freezes_in_space', 'tfc:salt_water')
	event.add('ad_astra:freezes_in_space', 'tfc:spring_water')
	event.add('ad_astra:evaporates_in_space', 'tfc:salt_water')
	event.add('ad_astra:evaporates_in_space', 'tfc:spring_water')
	event.add('ad_astra:evaporates_in_space', '#tfc:alcohols')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.add('ad_astra:zip_gun_propellants', x)
	})
}

const registerAdAstraItemTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
	
	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mars_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:venus_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mercury_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:glacio_cobblestone')

	// Insulation Tier 1
	event.add('forge:insulation_t1', 'gtceu:borosilicate_glass_dust')
	event.add('forge:insulation_t1', 'gtceu:vitrified_asbestos_dust')
	
	//Insulation Tier 2
	event.add('forge:insulation_t2', 'tfg:aes_insulation_sheet')
	event.add('forge:insulation_t2', 'tfg:aes_insulation_roll')

	// Deco blocks
	const DECO_BLOCKS = [ 'iron', 'steel', 'desh', 'calorite', 'ostrum' ];
	DECO_BLOCKS.forEach(block => {
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_factory_block`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_plating`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_panel`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_pillar`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_plateblock`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:encased_${block}_block`)
	})

	event.add('forge:storage_blocks/etrium', 'ad_astra:etrium_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_factory_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:encased_etrium_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_plateblock')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_panel')

	event.add('tfc:foods', 'ad_astra:cheese')
	event.add('tfc:foods/dairy', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_sandwich', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_jam_sandwich', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_jam_sandwich_2', 'ad_astra:cheese')
	event.add('firmalife:foods/cheeses', 'ad_astra:cheese')

	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_helmet')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_leggings')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_boots')
	
	event.remove('minecraft:wool', 'ad_astra:glacian_fur')
	
	global.AD_ASTRA_WOOD.forEach(wood => {

		if (wood.log) {
			event.add('minecraft:logs', wood.log)
			event.add('minecraft:logs_that_burn', wood.log)
		}

		if (wood.stripped_log) {
			event.add('minecraft:logs', wood.stripped_log)
			event.add('minecraft:logs_that_burn', wood.stripped_log)
		}

		if (wood.isHardwood == true) {
			event.add('tfg:hardwood', wood.logs)
		} else {
			event.add('tfg:softwood', wood.logs)
		}
	})

}

const registerAdAstraBlockTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	// All new stones
	global.EXTRATERRESTRIAL_RAW_ROCKS.forEach(rock => {
		event.add('forge:stone', rock)
		event.add('tfc:breaks_when_isolated', rock)
		event.add('tfc:rock/raw', rock)
		event.add('minecraft:mineable/pickaxe', rock)
		event.add('tfc:can_carve', rock)
		// Collapse tags also require a collapse recipe to work.
		// Don't add the recipe if you don't want them to actually collapse!
		event.add('tfc:can_collapse', rock)
		event.add('tfc:can_trigger_collapse', rock)
		event.add('tfc:can_start_collapse', rock)
		event.add('tfc:powderkeg_breaking_blocks', rock)
		event.add('tfc:bloomery_insulation', rock)
		event.add('firmalife:oven_insulation', rock)
		event.add('tfc:forge_insulation', rock)
	})

	global.EXTRATERRESTRIAL_HARDENED_ROCKS.forEach(rock => {
		event.add('minecraft:mineable/pickaxe', rock)
		event.add('tfc:can_collapse', rock)
		event.add('tfc:can_trigger_collapse', rock)
		event.add('tfc:powderkeg_breaking_blocks', rock)
		event.add('tfc:bloomery_insulation', rock)
		event.add('firmalife:oven_insulation', rock)
		event.add('tfc:forge_insulation', rock)
		event.add('tfc:can_carve', rock)
	})

	// Moon	
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:moon_sand')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_moon_stone')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:sand/white')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:sand/black')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/dacite')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_moon_deepslate')
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:glacio_stone')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_glacio_stone')
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:glacio_cobblestone')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/dacite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/dacite')

	// Mars
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/dacite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/dacite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/diorite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/rhyolite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/rhyolite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/andesite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/andesite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/chert')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/chert')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/conglomerate')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/conglomerate')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/claystone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/claystone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/limestone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/limestone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/dolomite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/dolomite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/shale')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/shale')
	event.add('ad_astra:mars_stone_replaceables', 'ad_astra:mars_stone')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/hardened_mars_stone')
	event.add('ad_astra:mars_stone_replaceables', 'ad_astra:venus_stone')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/hardened_venus_stone')
	event.add('ad_astra:mars_stone_replaceables', 'gtceu:red_granite')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/hardened_red_granite')
	event.add('ad_astra:mars_stone_replaceables', 'minecraft:dripstone_block')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/hardened_dripstone')
	event.add('ad_astra:mars_stone_replaceables', 'minecraft:red_sand')
	event.add('ad_astra:mars_stone_replaceables', 'ad_astra:mars_sand')
	event.add('ad_astra:mars_stone_replaceables', 'ad_astra:venus_sand')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:sand/black')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:sand/red')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:sand/pink')


	event.add('minecraft:rabbits_spawnable_on', '#ad_astra:moon_stone_replaceables')
	event.add('species:limpet_spawnable_on', '#ad_astra:moon_stone_replaceables')

	event.add('tfc:can_landslide', 'ad_astra:moon_sand')
	event.add('tfc:can_landslide', 'ad_astra:mars_sand')
	event.add('tfc:can_landslide', 'ad_astra:venus_sand')
	event.add('tfc:can_landslide', 'minecraft:red_sand')

	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:mars_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:venus_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:mercury_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:glacio_cobblestone')
	event.add('tfc:can_landslide', 'gtceu:red_granite_cobblestone')

	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mars_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:venus_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mercury_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:glacio_cobblestone')

	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:mars_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:venus_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:mercury_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:glacio_cobblestone_slab')

	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:mars_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:venus_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:mercury_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:glacio_cobblestone_stairs')

	event.add('tfg:rock_stairs', 'ad_astra:moon_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:mars_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:venus_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:mercury_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:glacio_stone_stairs')

	event.add('tfg:rock_slabs', 'ad_astra:moon_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:mars_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:venus_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:mercury_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:glacio_stone_slab')

	event.add('ad_astra:destroyed_in_space', '#minecraft:saplings')
}

const registerAdAstraBiomeTags = (event) => {

	event.removeAll('ad_astra:has_structure/oil_well')

	global.MOON_BIOMES.forEach(biome => {
		event.add('tfg:moon_biomes', biome)
		event.add('tfg:has_structure/meteors', biome)
		event.add('tfg:has_structure/cheese_ores', biome)
		event.add('tfg:has_structure/moonbase', biome)
		event.add('tfg:has_structure/moon_rabbit_houses', biome)
		event.add('species:limpet_spawns', biome)
	})
}

const registerAdAstraEntityTypeTags = (event) => {

	// moon
	const MOON_ENTITIES = [
		'tfc:rat',
		'tfg:moon_rabbit',
		'minecraft:enderman',
		'minecraft:shulker',
		'minecraft:shulker_bullet',
		'minecraft:skeleton',
		'species:limpet',
		'species:birt',
		'endermanoverhaul:windswept_hills_enderman',
		'endermanoverhaul:soulsand_valley_enderman',
		'endermanoverhaul:spirit',
		'endermanoverhaul:end_enderman',
		'endermanoverhaul:end_islands_enderman',
	]

	MOON_ENTITIES.forEach(entity => {

		event.add('ad_astra:can_survive_extreme_cold', entity)
		event.add('ad_astra:lives_without_oxygen', entity)
	})

	event.add('tfc:deals_crushing_damage', 'minecraft:enderman')
	event.add('tfc:deals_crushing_damage', 'minecraft:skeleton')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:windswept_hills_enderman')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:soulsand_valley_enderman')
	event.add('tfc:deals_piercing_damage', 'endermanoverhaul:end_enderman')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:end_islands_enderman')
	event.add('tfc:deals_crushing_damage', 'ad_astra:star_crawler')

	event.add('tfg:ignores_gravity', 'minecraft:shulker_bullet')
	event.add('tfg:ignores_gravity', 'endermanoverhaul:spirit')
	event.add('tfg:ignores_gravity', 'species:birt')
	event.add('tfg:ignores_gravity', 'ad_astra:star_crawler')
}

const registerAdAstraPlacedFeatures = (event) => {
	
	event.add('tfg:moon_craters', 'tfg:moon/crater/extra_large')
	event.add('tfg:moon_craters', 'tfg:moon/crater/large')
	event.add('tfg:moon_craters', 'tfg:moon/crater/medium')
	event.add('tfg:moon_craters', 'tfg:moon/crater/small')
	
	global.MOON_STONE_TYPES.forEach(stone => {
		// only in the sparse ones
		event.add('tfg:moon_large_rock_features', `tfg:moon/surface/delta/${stone}`)
		// in all moon biomes
		event.add('tfg:moon_small_rock_features', `tfg:moon/surface/pile/${stone}`)
		event.add('tfg:moon_small_rock_features', `tfg:moon/surface/loose/${stone}`)
	})

	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_moon_sand')
	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_white_sand')
	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_black_sand')

	event.add('tfg:venus_delta_surface_features', 'tfg:venus/surface/geyser_source_patch')
	event.add('tfg:venus_delta_surface_features', 'tfg:venus/surface/stromatolite_cluster_patch')
	event.add('tfg:venus_delta_surface_features', 'tfg:venus/surface/stromatolite_tower')

	event.add('tfg:venus_delta_terrain_features', 'tfg:venus/terrain/hot_spring_delta')
	event.add('tfg:venus_delta_terrain_features', 'tfg:venus/terrain/stromatolite_disk')
}
