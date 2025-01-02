ServerEvents.recipes(event => {

    event.remove({output:'bigreactors:basic_reactorcasing'})
    event.remove({output:'bigreactors:reinforced_reactorcasing'})
    
    event.remove({output:'bigreactors:basic_reactorfuelrod'})
    event.remove({output:'bigreactors:reinforced_reactorfuelrod'})

    event.remove({output:'bigreactors:basic_reactorcontrolrod'})
    event.remove({output:'bigreactors:reinforced_reactorcontrolrod'})

    event.remove({output:'bigreactors:basic_reactorcontroller'})
    event.remove({output:'bigreactors:reinforced_reactorcontroller'})

    event.remove({output:'bigreactors:basic_reactorpowertapfe_active'})
    event.remove({output:'bigreactors:basic_reactorpowertapfe_passive'})
    event.remove({output:'bigreactors:reinforced_reactorpowertapfe_active'})
    event.remove({output:'bigreactors:reinforced_reactorpowertapfe_passive'})

    event.remove({output:'bigreactors:basic_reactorsolidaccessport'})
    event.remove({output:'bigreactors:reinforced_reactorsolidaccessport'})

    event.remove({output:'bigreactors:reinforced_reactorfluidaccessport'})

    event.remove({output:'bigreactors:reinforced_reactorfluidport_forge_passive'})
    event.remove({output:'bigreactors:reinforced_reactorfluidport_forge_active'})

    
    event.recipes.create.sequenced_assembly(['bigreactors:basic_reactorcasing'],
        'immersiveengineering:sheetmetal_iron',
    [
            event.recipes.createPressing('immersiveengineering:sheetmetal_iron', 'immersiveengineering:sheetmetal_iron'),
            event.recipes.createDeploying('immersiveengineering:sheetmetal_iron',['immersiveengineering:sheetmetal_iron', '#forge:plates/lead']),
            event.recipes.createDeploying('immersiveengineering:sheetmetal_iron',['immersiveengineering:sheetmetal_iron', '#forge:plates/iron']),
            event.recipes.createPressing('immersiveengineering:sheetmetal_iron', 'immersiveengineering:sheetmetal_iron')
    ]).transitionalItem('immersiveengineering:sheetmetal_iron').loops(1)

    event.recipes.create.sequenced_assembly(['bigreactors:reinforced_reactorcasing'],
    'bigreactors:basic_reactorcasing',
    [
        event.recipes.createPressing('bigreactors:basic_reactorcasing', 'bigreactors:basic_reactorcasing'),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', '#forge:ingots/zinc']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', '#forge:plates/steel']),
        event.recipes.createPressing('bigreactors:basic_reactorcasing', 'bigreactors:basic_reactorcasing')
    ]).transitionalItem('bigreactors:basic_reactorcasing').loops(1)


    event.recipes.create.sequenced_assembly(['bigreactors:basic_reactorfuelrod'],
    'immersiveengineering:chute_iron',
    [
        event.recipes.createDeploying('immersiveengineering:chute_iron', ['immersiveengineering:chute_iron', '#forge:rods/iron']),
        event.recipes.createDeploying('immersiveengineering:chute_iron', ['immersiveengineering:chute_iron', '#forge:rods/iron']),
        event.recipes.createDeploying('immersiveengineering:chute_iron', ['immersiveengineering:chute_iron', '#forge:ingots/graphite']),
        event.recipes.createDeploying('immersiveengineering:chute_iron', ['immersiveengineering:chute_iron', '#forge:plates/iron']),
        event.recipes.createPressing('immersiveengineering:chute_iron', 'immersiveengineering:chute_iron')
    ]).transitionalItem('immersiveengineering:chute_iron').loops(1)

    event.recipes.create.sequenced_assembly(['bigreactors:reinforced_reactorfuelrod'],
    'immersiveengineering:chute_steel',
    [
        event.recipes.createDeploying('immersiveengineering:chute_steel', ['immersiveengineering:chute_steel', '#forge:rods/steel']),
        event.recipes.createDeploying('immersiveengineering:chute_steel', ['immersiveengineering:chute_steel', '#forge:rods/steel']),
        event.recipes.createDeploying('immersiveengineering:chute_steel', ['immersiveengineering:chute_steel', 'immersiveengineering:ingot_hop_graphite']),
        event.recipes.createDeploying('immersiveengineering:chute_steel', ['immersiveengineering:chute_steel', 'create:sturdy_sheet']),
        event.recipes.createPressing('immersiveengineering:chute_steel', 'immersiveengineering:chute_steel')
    ]).transitionalItem('immersiveengineering:chute_steel').loops(1)


    event.recipes.create.sequenced_assembly(['bigreactors:basic_reactorcontrolrod'],
    'bigreactors:basic_reactorcasing',
    [
        event.recipes.createDeploying('bigreactors:basic_reactorcasing', ['bigreactors:basic_reactorcasing', '#forge:rods/electrum']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing', ['bigreactors:basic_reactorcasing', '#forge:rods/electrum']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing', ['bigreactors:basic_reactorcasing', '#forge:ingots/zinc']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing', ['bigreactors:basic_reactorcasing', 'createaddition:electric_motor']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing', ['bigreactors:basic_reactorcasing', 'create:mechanical_piston']),
        event.recipes.createPressing('bigreactors:basic_reactorcasing', 'bigreactors:basic_reactorcasing')
    ]).transitionalItem('bigreactors:basic_reactorcasing').loops(1)

    event.recipes.create.sequenced_assembly(['bigreactors:reinforced_reactorcontrolrod'],
    'bigreactors:reinforced_reactorcasing',
    [
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing', ['bigreactors:reinforced_reactorcasing', '#forge:rods/electrum']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing', ['bigreactors:reinforced_reactorcasing', '#forge:rods/electrum']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing', ['bigreactors:reinforced_reactorcasing', 'createaddition:electric_motor']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing', ['bigreactors:reinforced_reactorcasing', 'create:mechanical_piston']),
        event.recipes.createPressing('bigreactors:reinforced_reactorcasing', 'bigreactors:reinforced_reactorcasing')
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_reactorcontroller'
    ], 'bigreactors:reinforced_reactorcasing',[
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'create:content_observer']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:component_electronic_adv']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'create:precision_mechanism']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'create:display_board'])
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_reactorpowertapfe_active'
    ], 'bigreactors:basic_reactorcasing',[
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'minecraft:redstone_torch']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:basic_reactorcasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_reactorpowertapfe_passive'
    ], 'bigreactors:basic_reactorcasing',[
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:basic_reactorcasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_reactorpowertapfe_active'
    ], 'bigreactors:reinforced_reactorcasing',[
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'minecraft:redstone_torch']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_reactorpowertapfe_passive'
    ], 'bigreactors:reinforced_reactorcasing',[
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'createaddition:modular_accumulator']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:connector_hv'])
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:basic_reactorsolidaccessport'
    ], 'bigreactors:basic_reactorcasing',[
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'create:encased_fan']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'immersiveengineering:coil_lv']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'create:chute']),
        event.recipes.createDeploying('bigreactors:basic_reactorcasing',['bigreactors:basic_reactorcasing', 'immersiveengineering:fluid_pump'])
    ]).transitionalItem('bigreactors:basic_reactorcasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_reactorsolidaccessport'
    ], 'bigreactors:reinforced_reactorcasing',[
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'create:encased_fan']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:coil_lv']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'create:chute']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:fluid_pump'])
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_reactorfluidaccessport'
    ], 'bigreactors:reinforced_reactorcasing',[
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'create:chute']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:fluid_pump'])
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_reactorfluidport_forge_passive'
    ], 'bigreactors:reinforced_reactorcasing',[
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:fluid_pump']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', '#forge:plates/steel'])
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)
    
    event.recipes.create.sequenced_assembly([
        'bigreactors:reinforced_reactorfluidport_forge_active'
    ], 'bigreactors:reinforced_reactorcasing',[
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'minecraft:redstone_torch']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', 'immersiveengineering:fluid_pump']),
        event.recipes.createDeploying('bigreactors:reinforced_reactorcasing',['bigreactors:reinforced_reactorcasing', '#forge:plates/steel'])
    ]).transitionalItem('bigreactors:reinforced_reactorcasing').loops(1)
})
