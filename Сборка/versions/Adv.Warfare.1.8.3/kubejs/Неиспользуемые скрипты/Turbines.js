ServerEvents.recipes(event => {

    event.recipes.create.sequenced_assembly([
        Item.of('4x immersiveengineering:dust_uranium').withChance(2.0),
        Item.of('immersiveengineering:dust_lead').withChance(4.0),
        Item.of('immersiveengineering:slag').withChance(4.0),
        Item.of('immersiveengineering:dust_iron').withChance(4.0)
    ], 'alexscaves:waste_drum', [
        event.recipes.createCutting('alexscaves:waste_drum', 'alexscaves:waste_drum'),
        event.recipes.createCutting('alexscaves:waste_drum', 'alexscaves:waste_drum'),
        event.recipes.createFilling('alexscaves:waste_drum', ['alexscaves:waste_drum', Fluid.lava(200)]),
        event.recipes.createPressing('alexscaves:waste_drum', 'alexscaves:waste_drum')
    ]).transitionalItem('alexscaves:waste_drum').loops(1)


    //REACTORS_________________________________________________________
    //Turbina
    event.remove({output:'bigreactors:basic_turbinecasing'})
    event.remove({output:'bigreactors:reinforced_turbinecasing'})

    event.remove({output:'bigreactors:basic_turbinerotorshaft'})
    event.remove({output:'bigreactors:reinforced_turbinerotorshaft'})

    event.remove({output:'bigreactors:basic_turbinerotorblade'})
    event.remove({output:'bigreactors:reinforced_turbinerotorblade'})

    event.remove({output:'bigreactors:basic_turbinefluidport_forge_active'})
    event.remove({output:'bigreactors:basic_turbinefluidport_forge_passive'})
    event.remove({output:'bigreactors:reinforced_turbinefluidport_forge_active'})
    event.remove({output:'bigreactors:reinforced_turbinefluidport_forge_passive'})

    event.remove({output:'bigreactors:basic_turbinepowertapfe_active'})
    event.remove({output:'bigreactors:basic_turbinepowertapfe_passive'})
    event.remove({output:'bigreactors:reinforced_turbinepowertapfe_active'})
    event.remove({output:'bigreactors:reinforced_turbinepowertapfe_passive'})
    
    event.remove({output:'bigreactors:basic_turbinecontroller'})
    event.remove({output:'bigreactors:reinforced_turbinecontroller'})

    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinecasing'
    ], 'immersiveengineering:sheetmetal_iron',[
        event.recipes.createDeploying('immersiveengineering:sheetmetal_iron',['immersiveengineering:sheetmetal_iron', '#forge:plates/lead']),
        event.recipes.createDeploying('immersiveengineering:sheetmetal_iron',['immersiveengineering:sheetmetal_iron', '#forge:plates/iron']),
        event.recipes.createPressing('immersiveengineering:sheetmetal_iron', 'immersiveengineering:sheetmetal_iron')
    ]).transitionalItem('immersiveengineering:sheetmetal_iron').loops(1)

   event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinecasing'
    ], 'bigreactors:basic_turbinecasing',[
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', '#forge:ingots/zinc']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', '#forge:plates/steel']),
        event.recipes.createPressing('bigreactors:basic_turbinecasing', 'bigreactors:basic_turbinecasing')
    ]).transitionalItem('bigreactors:basic_turbinecasing').loops(1)



    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinerotorshaft'
    ], '#forge:rods/iron',[
        event.recipes.createDeploying('#forge:rods/iron',['#forge:rods/iron', '#forge:plates/iron']),
        event.recipes.createDeploying('#forge:rods/iron',['#forge:rods/iron', '#forge:plates/lead']),
        event.recipes.createPressing('#forge:rods/iron', '#forge:rods/iron')
    ]).transitionalItem('#forge:rods/iron').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinerotorshaft'
    ], '#forge:rods/steel',[
        event.recipes.createDeploying('#forge:rods/steel',['#forge:rods/steel', '#forge:ingots/cyanite']),
        event.recipes.createDeploying('#forge:rods/steel',['#forge:rods/steel', '#forge:plates/steel']),
        event.recipes.createDeploying('#forge:rods/steel',['#forge:rods/steel', '#forge:plates/lead']),
        event.recipes.createPressing('#forge:rods/steel', '#forge:rods/steel')
    ]).transitionalItem('#forge:rods/steel').loops(1)



    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinerotorblade'
    ], '#forge:plates/iron',[
        event.recipes.createDeploying('#forge:plates/iron',['#forge:plates/iron', '#forge:plates/lead']),
        event.recipes.createPressing('#forge:plates/iron', '#forge:plates/iron')
    ]).transitionalItem('#forge:plates/iron').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinerotorblade'
    ], '#forge:plates/steel',[
        event.recipes.createDeploying('#forge:plates/steel',['#forge:plates/steel', '#forge:ingots/cyanite']),
        event.recipes.createDeploying('#forge:plates/steel',['#forge:plates/steel', '#forge:plates/lead']),
        event.recipes.createPressing('#forge:plates/steel', '#forge:plates/steel')
    ]).transitionalItem('#forge:plates/steel').loops(1)



    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinefluidport_forge_passive'
    ], 'bigreactors:basic_turbinecasing',[
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'immersiveengineering:fluid_pump']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', '#forge:plates/iron'])
    ]).transitionalItem('bigreactors:basic_turbinecasing').loops(1)
    
    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinefluidport_forge_active'
    ], 'bigreactors:basic_turbinecasing',[
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'minecraft:redstone_torch']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'immersiveengineering:fluid_pump']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', '#forge:plates/iron'])
    ]).transitionalItem('bigreactors:basic_turbinecasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinefluidport_forge_passive'
    ], 'bigreactors:reinforced_turbinecasing',[
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'immersiveengineering:fluid_pump']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', '#forge:plates/steel'])
    ]).transitionalItem('bigreactors:reinforced_turbinecasing').loops(1)
    
    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinefluidport_forge_active'
    ], 'bigreactors:reinforced_turbinecasing',[
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'minecraft:redstone_torch']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'immersiveengineering:fluid_pump']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', '#forge:plates/steel'])
    ]).transitionalItem('bigreactors:reinforced_turbinecasing').loops(1)



    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinepowertapfe_passive'
    ], 'bigreactors:basic_turbinecasing',[
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:basic_turbinecasing').loops(1)
    
    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinepowertapfe_active'
    ], 'bigreactors:basic_turbinecasing',[
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'minecraft:redstone_torch']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:basic_turbinecasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinepowertapfe_passive'
    ], 'bigreactors:reinforced_turbinecasing',[
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:reinforced_turbinecasing').loops(1)
    
    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinepowertapfe_active'
    ], 'bigreactors:reinforced_turbinecasing',[
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'minecraft:redstone_torch']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:reinforced_turbinecasing').loops(1)



    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_turbinecontroller'
    ], 'bigreactors:basic_turbinecasing',[
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'create:speedometer']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'immersiveengineering:component_electronic']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'create:precision_mechanism']),
        event.recipes.createDeploying('bigreactors:basic_turbinecasing',['bigreactors:basic_turbinecasing', 'create:display_board'])
    ]).transitionalItem('bigreactors:basic_turbinecasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_turbinecontroller'
    ], 'bigreactors:reinforced_turbinecasing',[
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'create:content_observer']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'immersiveengineering:component_electronic_adv']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'create:precision_mechanism']),
        event.recipes.createDeploying('bigreactors:reinforced_turbinecasing',['bigreactors:reinforced_turbinecasing', 'create:display_board'])
    ]).transitionalItem('bigreactors:reinforced_turbinecasing').loops(1)


})