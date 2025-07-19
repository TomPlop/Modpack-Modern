// priority: 0

const registerAdAstraRecipes = (event) => {

	event.remove({ mod: 'ad_astra' })

	//#region Rocket parts

	event.shaped('ad_astra:launch_pad', [
		'BAB',
		'AAA',
		'BAB'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel'
	}).id('tfg:launch_pad')

	//#region Tier 1 rocket

	event.recipes.gtceu.assembler('tfg:rocket_nose_cone_t1')
		.itemInputs(
			'gtceu:hv_emitter',
			'gtceu:dense_rocket_alloy_t1_plate',
			'3x gtceu:double_stainless_steel_plate')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144 * 16))
		.itemOutputs('ad_astra:rocket_nose_cone')
		.duration(1200)
		.circuit(2)
		.EUt(480)


	event.recipes.gtceu.pyrolyse_oven('tfg:pyrolyse_vitrified_asbestos_dust')
		.inputFluids(Fluid.of('gtceu:nitrogen', 100))
		.itemInputs('gtceu:asbestos_dust')
		.itemOutputs('gtceu:vitrified_asbestos_dust')
		.duration(80)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:rocket_alloy_t1')
		.itemInputs('6x #forge:dusts/aluminium', '2x #forge:dusts/stainless_steel')
		.inputFluids(Fluid.of('gtceu:red_steel', 144))
		.itemOutputs('9x #forge:dusts/rocket_alloy_t1')
		.duration(580)
		.circuit(2)
		.EUt(480)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(400)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_distilled_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(250)
		.EUt(120)

	event.recipes.gtceu.assembler(`tfg:rocket_fin_t1`)
		.itemInputs('#forge:plates/rocket_alloy_t1', '#forge:double_plates/stainless_steel')
		.itemOutputs('ad_astra:rocket_fin')
		.duration(150)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])


	event.recipes.gtceu.assembler('tfg:rocket_steel_engine')
		.itemInputs(
			'2x #forge:double_plates/stainless_steel',
			'2x #gtceu:circuits/hv',
			'gtceu:hv_electric_pump',
			'2x gtceu:power_thruster',
			'#forge:rotors/stainless_steel')
		.inputFluids(Fluid.of('gtceu:blue_steel', 144 * 8))
		.itemOutputs('ad_astra:steel_engine')
		.duration(600)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('ad_astra:assembler_tier_1_rocket')
		.itemInputs(
			'8x #forge:dense_plates/rocket_alloy_t1',
			'4x ad_astra:rocket_fin',
			'1x ad_astra:steel_engine',
			'1x ad_astra:rocket_nose_cone',
			'16x #forge:insulation_t1'
		)
		.inputFluids(Fluid.of('gtceu:silicon', 144 * 16))
		.itemOutputs('ad_astra:tier_1_rocket')
		.duration(1200)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#endregion


	//#region space suits

	event.recipes.gtceu.forming_press('space_suit_fabric')
		.itemInputs(
			'#forge:foils/aluminium',
			'gtceu:carbon_fiber_mesh',
			'#forge:foils/silicone_rubber',
			'tfg:polycaprolactam_fabric'
		)
		.itemOutputs('2x tfg:space_suit_fabric')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.HV])

	event.shaped('ad_astra:space_helmet', [
		'AAA',
		'ADA',
		'BBB'
	], {
		A: 'gtceu:tempered_glass',
		B: 'tfg:space_suit_fabric',
		D: '#forge:small_fluid_pipes/polyethylene'
	}).id('tfg:space_helmet')

	//event.recipes.gtceu.assembler('ad_astra:netherite_space_helmet')
	//	.itemInputs(
	//		'ad_astra:space_helmet',
	//		'3x #forge:plates/titanium_tungsten_carbide',
	//		'3x #forge:plates/polyphenylene_sulfide',
	//		'5x gtceu:laminated_glass'
	//	)
	//	.itemOutputs('ad_astra:netherite_space_helmet')
	//	.duration(400)
	//	.EUt(GTValues.VA[GTValues.IV])

	event.shaped('ad_astra:space_suit', [
		'B B',
		'BDB',
		'BBB'
	], {
		B: 'tfg:space_suit_fabric',
		D: 'ad_astra:oxygen_gear'
	}).id('tfg:space_suit')

	//event.recipes.gtceu.assembler('ad_astra:netherite_space_suit')
	//	.itemInputs('ad_astra:space_suit', '4x #forge:plates/titanium_tungsten_carbide', '4x #forge:plates/polyphenylene_sulfide')
	//	.itemOutputs('ad_astra:netherite_space_suit')
	//	.duration(400)
	//	.EUt(GTValues.VA[GTValues.IV])

	event.shaped('ad_astra:space_pants', [
		'BAB',
		'B B',
		'B B'
	], {
		A: 'gtceu:hv_electric_motor',
		B: 'tfg:space_suit_fabric',
	}).id('tfg:space_pants')

	//event.recipes.gtceu.assembler('ad_astra:netherite_space_pants')
	//	.itemInputs('ad_astra:space_pants', '4x #forge:plates/titanium_tungsten_carbide', '4x #forge:plates/polyphenylene_sulfide')
	//	.itemOutputs('ad_astra:netherite_space_pants')
	//	.duration(400)
	//	.EUt(GTValues.VA[GTValues.IV])

	event.shaped('ad_astra:space_boots', [
		'B B',
		'A A'
	], {
		A: '#forge:plates/polyphenylene_sulfide',
		B: 'tfg:space_suit_fabric'
	}).id('tfg:space_boots')

	//event.recipes.gtceu.assembler('ad_astra:netherite_space_boots')
	//	.itemInputs('ad_astra:space_boots', '2x #forge:plates/titanium_tungsten_carbide', '2x #forge:plates/polyphenylene_sulfide')
	//	.itemOutputs('ad_astra:netherite_space_boots')
	//	.duration(400)
	//	.EUt(GTValues.VA[GTValues.IV])


	event.shaped('ad_astra:oxygen_gear', [
		'BAB',
		'ECE',
		'BDB'
	], {
		A: '#gtceu:circuits/hv',
		B: '#forge:tiny_fluid_pipes/stainless_steel',
		C: 'gtceu:hv_electric_pump',
		D: 'gtceu:fluid_detector_cover',
		E: 'ad_astra:gas_tank'
	}).id('tfg:oxygen_gear')

	//#endregion

	//#region Gas tanks

	event.shaped('ad_astra:gas_tank', [
		'ABA',
		'ACA',
		'AAA'
	], {
		A: '#forge:foils/polyphenylene_sulfide',
		B: '#forge:tiny_fluid_pipes/polyethylene',
		C: 'gtceu:aluminium_fluid_cell'
	}).id('tfg:gas_tank')

	event.shaped('ad_astra:large_gas_tank', [
		'ABA',
		'ACA',
		'AAA'
	], {
		A: '#forge:sheets/polyphenylene_sulfide',
		B: '#forge:small_fluid_pipes/polyethylene',
		C: 'gtceu:stainless_steel_fluid_cell'
	}).id('tfg:large_gas_tank')

	//#endregion

	//#region Machines
	event.shaped('ad_astra:oxygen_distributor', [
		'DBD',
		'ACA',
		'DBD'
	], {
		A: '#forge:plates/stainless_steel',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:hv_machine_hull',
		D: 'gtceu:filter_casing'
	}).id('tfg:oxygen_distributor')

	event.shaped('ad_astra:gravity_normalizer', [
		'A A',
		'CBC',
		'ADA'
	], {
		A: '#forge:rods/magnetic_neodymium',
		B: 'gtceu:ev_field_generator',
		C: '#forge:plates/titanium',
		D: 'gtceu:ev_polarizer',
	}).id('tfg:gravity_normalizer')

	event.shaped('ad_astra:oxygen_sensor', [
		'AEA',
		'BDC',
		'AAA'
	], {
		A: '#forge:plates/red_alloy',
		B: 'gtceu:activity_detector_cover',
		C: 'gtceu:fluid_detector_cover',
		D: 'gtceu:mv_machine_hull',
		E: '#gtceu:circuits/mv'
	}).id('tfg:oxygen_sensor')

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_silicon')
		.itemInputs('gtceu:silicon_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('ad_astra:photovoltaic_etrium_cell')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_phosphorous')
		.itemInputs('gtceu:phosphorus_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('2x ad_astra:photovoltaic_etrium_cell')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_naquadah')
		.itemInputs('gtceu:naquadah_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('4x ad_astra:photovoltaic_etrium_cell')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_neutronium')
		.itemInputs('gtceu:neutronium_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('8x ad_astra:photovoltaic_etrium_cell')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.shaped('2x ad_astra:solar_panel', [
		'AAA',
		' C ',
		'BFE'
	], {
		A: 'ad_astra:photovoltaic_etrium_cell',
		B: '#gtceu:batteries/mv',
		C: '#forge:rods/long/aluminium',
		E: '#gtceu:circuits/mv',
		F: 'gtceu:mv_machine_hull'
	}).id('tfg:solar_panel')

	//#endregion

	//#region Радио

	event.shaped('ad_astra:radio', [
		'AB ',
		'CDC',
		'CCC'
	], {
		A: 'gtceu:lv_sensor',
		B: '#forge:tools/screwdrivers',
		C: '#forge:plates/polyethylene',
		D: '#gtceu:circuits/lv'
	}).id('tfg:radio')

	//#endregion

	//#region Rover

	event.shaped('ad_astra:wheel', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#forge:plates/polyphenylene_sulfide',
		B: '#forge:rings/stainless_steel',
	}).id('tfg:ad_astra_wheel')

	event.recipes.gtceu.assembler('tfg:tier_1_rover')
		.itemInputs(
			'gtceu:mv_sensor',
			'ad_astra:radio',
			'ad_astra:gas_tank',
			'4x ad_astra:wheel',
			'2x gtceu:hv_electric_motor',
			'4x #forge:plates/stainless_steel',
			'4x #forge:frames/stainless_steel')
		.itemOutputs('ad_astra:tier_1_rover')
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion


	//#region Колесо

	event.shaped('ad_astra:white_flag', [
		'ABB',
		'ABB',
		'A  '
	], {
		A: '#forge:rods/long/steel',
		B: '#tfc:high_quality_cloth',
	}).id('tfg:white_flag')

	event.recipes.gtceu.chemical_bath(`tfg:ad_astra_flag_bleaching`)
		.itemInputs('#ad_astra:flags')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 36))
		.itemOutputs(`ad_astra:white_flag`)
		.duration(150)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		if (color != "white") {
			event.recipes.gtceu.chemical_bath(`tfg:ad_astra_${color}_flag`)
				.itemInputs('ad_astra:white_flag')
				.inputFluids(Fluid.of(`tfc:${color}_dye`, 36))
				.itemOutputs(`ad_astra:${color}_flag`)
				.duration(150)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

	//#endregion

	// #region Ingots

	event.recipes.gtceu.chemical_bath('tfg:desh_cool_down_water')
		.itemInputs('#forge:hot_ingots/desh')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('#forge:ingots/desh')
		.duration(400)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:desh_cool_down_distilled_water')
		.itemInputs('#forge:hot_ingots/desh')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('#forge:ingots/desh')
		.duration(250)
		.EUt(120)

	// #endregion

	//#region Воздушный пистолет

	event.shaped('ad_astra:zip_gun', [
		'ACC',
		'DB ',
		'   '
	], {
		A: 'gtceu:lv_electric_pump',
		B: '#forge:bolts/steel',
		C: '#forge:tiny_fluid_pipes/steel',
		D: 'ad_astra:gas_tank',
	}).id('tfg:zip_gun')

	//#endregion

	//#region Космо картина

	event.shaped('ad_astra:space_painting', [
		'AAA',
		'ACA',
		'AAA'
	], {
		A: '#forge:rods/desh',
		C: '#tfc:high_quality_cloth',
	}).id('tfg:space_painting')

	//#endregion

	//#region Convert whatever fluids we want into the breathable gas needed for the Oxygen Distributor

	event.custom({
		type: 'ad_astra:oxygen_loading',
		cookingtime: 1,
		energy: 30,
		input: {
			ingredient: {
				fluid: 'gtceu:air'
			},
			millibuckets: 1
		},
		result: {
			fluid: 'ad_astra:oxygen',
			millibuckets: 100
		}
	}).id('ad_astra:oxygen_loading/air_from_air')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.custom({
			type: 'ad_astra:oxygen_loading',
			cookingtime: 1,
			energy: 30,
			input: {
				ingredient: {
					fluid: x
				},
				millibuckets: 1
			},
			result: {
				fluid: 'ad_astra:oxygen',
				millibuckets: 1000
			}
		}).id(`ad_astra:oxygen_loading/air_from_${x.split(':')[1]}`)
	})

	//#endregion

	//#region Misc blocks

	event.shaped('ad_astra:vent', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'gtceu:steel_frame',
		B: '#tfg:metal_bars'
	}).id('tfg:shaped/ad_astra_vent')

	//#endregion

	//#region Decoration blocks

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.shaped(`ad_astra:${color}_industrial_lamp`, [
			' N ',
			'DTD',
			' P '
		], {
			N: '#forge:rods/steel',
			T: 'minecraft:glowstone',
			D: `minecraft:${color}_stained_glass_pane`,
			P: '#forge:plates/steel'
		})
			.id(`tfg:shaped/ad_astra_${color}_industrial_lamp`);

		event.shaped(`ad_astra:small_${color}_industrial_lamp`, [
			' N ',
			'DTD',
			' P '
		], {
			N: '#forge:bolts/steel',
			T: 'minecraft:glowstone',
			D: `minecraft:${color}_stained_glass_pane`,
			P: '#forge:rods/steel'
		})
			.id(`tfg:shaped/ad_astra_small_${color}_industrial_lamp`);
	})

	const DECO_BLOCKS = [
		{ type: 'iron', material: 'wrought_iron' },
		{ type: 'steel', material: 'steel' },
		{ type: 'desh', material: 'desh' },
		{ type: 'calorite', material: 'calorite' },
		{ type: 'ostrum', material: 'ostrum' }
	]

	DECO_BLOCKS.forEach(x => {

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_plating`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_plating`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(1)

		event.recipes.gtceu.chemical_bath(`tfg:ad_astra_glowing_${x.type}_pillar`)
			.itemInputs(`ad_astra:${x.type}_pillar`)
			.inputFluids(Fluid.of('gtceu:glowstone', 144))
			.itemOutputs(`ad_astra:glowing_${x.type}_pillar`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_factory_block`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_factory_block`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(2)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_panel`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_panel`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(3)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_pillar`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_pillar`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(4)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_plateblock`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_plateblock`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(5)

		event.recipes.gtceu.assembler(`tfg:ad_astra_encased_${x.type}_block`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:encased_${x.type}_block`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(6)

		// Stonecutter recipes as well, so you can switch between them
		event.stonecutting(`ad_astra:${x.type}_plating`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_factory_block`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_panel`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_pillar`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_plateblock`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:encased_${x.type}_block`, `#tfg:ad_astra_${x.type}_blocks`)

		// Stairs n slabs
		event.stonecutting(`ad_astra:${x.type}_plating_stairs`, `ad_astra:${x.type}_plating`)
		event.stonecutting(`2x ad_astra:${x.type}_plating_slab`, `ad_astra:${x.type}_plating`)

		// Pressure plates
		event.shaped(`ad_astra:${x.type}_plating_pressure_plate`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `ad_astra:${x.type}_plating_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfg:shaped/ad_astra_${x.type}_pressure_plate`)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x ad_astra:${x.type}_plating_slab`)
			.itemOutputs(`ad_astra:${x.type}_plating_pressure_plate`)
			.circuit(0)
			.duration(50)
			.EUt(2)

		// Buttons
		generateCutterRecipe(event, `ad_astra:${x.type}_plating_pressure_plate`, `6x ad_astra:${x.type}_plating_button`, 50, 7, `ad_astra_${x.type}_button`)

		// Doors
		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_sliding_door`)
			.itemInputs(`9x #forge:plates/${x.material}`, '2x #forge:glass_panes')
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`ad_astra:${x.type}_sliding_door`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(20)
	})

	event.shapeless('ad_astra:marked_iron_pillar', ['ad_astra:iron_pillar', '#forge:dyes/yellow', '#forge:dyes/black'])
		.id('tfg:shapeless/marked_iron_pillar')

	event.recipes.gtceu.assembler(`tfg:ad_astra_reinforced_door`)
		.itemInputs(`9x #forge:plates/steel`, '2x #forge:glass_panes')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`ad_astra:reinforced_door`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(21)

	event.recipes.gtceu.assembler(`tfg:ad_astra_airlock`)
		.itemInputs(`9x #forge:plates/steel`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`ad_astra:airlock`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(22)

	event.recipes.gtceu.assembler(`tfg:ad_astra_steel_door`)
		.itemInputs('createdeco:industrial_iron_door', '#forge:glass_panes')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs('ad_astra:steel_door')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler(`tfg:ad_astra_steel_trapdoor`)
		.itemInputs('tfc:metal/trapdoor/steel', '#forge:glass_panes')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs('ad_astra:steel_trapdoor')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	// Etrium only has factory block, encased block, plateblock, panel, and (storage) block

	event.recipes.gtceu.assembler(`tfg:ad_astra_etrium_panel`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:etrium_panel`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(3)

	event.recipes.gtceu.assembler(`tfg:ad_astra_etrium_factory_block`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:etrium_factory_block`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(2)

	event.recipes.gtceu.assembler(`tfg:ad_astra_etrium_plateblock`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:etrium_plateblock`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(5)

	event.recipes.gtceu.assembler(`tfg:ad_astra_encased_etrium_block`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:encased_etrium_block`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(6)

	event.stonecutting('ad_astra:etrium_panel', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:etrium_factory_block', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:encased_etrium_block', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:etrium_plateblock', '#tfg:ad_astra_etrium_blocks')

	//#endregion

	//#region Space stations

	event.custom({
		type: "ad_astra:space_station_recipe",
		dimension: "ad_astra:earth_orbit",
		ingredients: [
			{ count: 43, ingredient: { item: "gtceu:aluminium_frame" }},
			{ count: 24, ingredient: { item: "gtceu:glass_plate" }},
			{ count: 4, ingredient: { item: "minecraft:glowstone_dust" }},
			{ count: 1, ingredient: { item: "ad_astra:launch_pad" }}
		],
		structure: "tfg:orbit/space_station"
	})

	event.custom({
		type: "ad_astra:space_station_recipe",
		dimension: "ad_astra:moon_orbit",
		ingredients: [
			{ count: 43, ingredient: { item: "gtceu:aluminium_frame" }},
			{ count: 24, ingredient: { item: "gtceu:glass_plate" }},
			{ count: 4, ingredient: { item: "minecraft:glowstone_dust" }},
			{ count: 1, ingredient: { item: "ad_astra:launch_pad" }}
		],
		structure: "tfg:orbit/space_station"
	})

	//#endregion

	//#region Wood
		event.remove({ type: 'greate:cutting', input: '#ad_astra:aeronos_caps' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:aeronos_planks' })
		event.remove({ type: 'greate:cutting', input: '#ad_astra:strophar_caps' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:glacian_log' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:stripped_glacian_log' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:strophar_planks' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:glacian_planks' })

		global.AD_ASTRA_WOOD.forEach(wood => {
			woodBuilder(event, wood.name, wood.lumber, wood.logs, wood.log, wood.stripped_log, wood.plank, wood.stair, wood.slab, wood.door, wood.trapdoor, wood.fence, wood.fence_gate, wood.support, wood.pressure_plate, wood.button)
		})
		
		event.shaped('16x ad_astra:aeronos_ladder', [
			'A A',
			'ABA',
			'A A'
		], {
			A: 'tfg:wood/lumber/aeronos',
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
		}).id('tfg:shaped/aeronos_ladder')
		
		event.shaped('16x ad_astra:strophar_ladder', [
			'A A',
			'ABA',
			'A A'
		], {
			A: 'tfg:wood/lumber/strophar',
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
		}).id('tfg:shaped/strophar_ladder')

		generateGreenHouseRecipe(event, '8x ad_astra:glacian_fur', 16000, '64x ad_astra:glacian_log', 'tfg:green_house/glacian_tree', 'ad_astra:moon', 8, '8x ad_astra:glacian_leaves', GTValues.VA[GTValues.MV])
		generateGreenHouseRecipe(event, '8x ad_astra:strophar_mushroom', 16000, '64x ad_astra:strophar_stem', 'tfg:green_house/strophar_mushroom', 'ad_astra:moon', 8, '16x ad_astra:strophar_cap', GTValues.VA[GTValues.MV])
		generateGreenHouseRecipe(event, '8x ad_astra:aeronos_mushroom', 16000, '64x ad_astra:aeronos_stem', 'tfg:green_house/aeronos_mushroom', 'ad_astra:moon', 8, '16x ad_astra:aeronos_cap', GTValues.VA[GTValues.MV])
	//#endregion
}
