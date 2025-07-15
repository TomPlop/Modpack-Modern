// priority: 0

function registerSpeciesRecipes(event) {
	global.SPECIES_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.shapeless('species:music_disc_dial', ['etched:blank_music_disc', 'species:birt_egg'])

	event.shapeless('species:music_disc_lapidarian', ['etched:blank_music_disc', 'tfc:rock/raw/basalt_slab'])

	event.shapeless('species:music_disk_spawner', ['etched:blank_music_disc', 'computercraft:disk'])

	event.shaped('species:cranktrap', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: '#forge:bolts/wrought_iron',
		B: '#forge:rods/wrought_iron',
		C: '#forge:small_springs',
		D: '#forge:tools/hammers'
	}).id('tfg:shaped/cranktrap')

	event.shaped('species:crankbow', [
		'ACA',
		'CBC',
		'DED'
	], {
		A: '#forge:rods/black_steel',
		B: 'minecraft:crossbow',
		C: '#forge:small_gears/steel',
		D: 'tfc:metal/chain/black_steel',
		E: 'create:hand_crank'
	}).id('tfg:shaped/crankbow')

	event.recipes.gtceu.assembler('species:hopelight')
		.itemInputs('1x #forge:plates/magnalium', 'ae2:charged_certus_quartz_crystal')
		.inputFluids(Fluid.of('gtceu:glowstone', 144*4))
		.itemOutputs('2x species:hopelight')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('species:speclight')
		.itemInputs('#forge:rings/magnalium', 'ae2:charged_certus_quartz_crystal')
		.inputFluids(Fluid.of('gtceu:glowstone', 144))
		.itemOutputs('2x species:speclight')
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.shaped('2x species:coil', [
		'ABA'
	], {
		A: '#forge:screws/wrought_iron',
		B: 'firmaciv:rope_coil'
	}).id('tfg:shaped/coil')

	event.shaped('species:harpoon', [
		'A',
		'B',
		'B'
	], {
		A: 'tfc:metal/javelin_head/wrought_iron',
		B: 'firmaciv:rope_coil'
	}).id('tfg:shaped/harpoon')

	// TODO: birtday cake
}