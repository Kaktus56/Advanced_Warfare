ServerEvents.recipes(event => {

    event.remove({output:'bigreactors:reprocessorcasing'})
    event.remove({output:'bigreactors:reprocessorcontroller'})

    event.remove({output:'bigreactors:reprocessorfluidinjector'})
    event.remove({output:'bigreactors:reprocessorwasteinjector'})

    event.remove({output:'bigreactors:reprocessoroutputport'})
    event.remove({output:'bigreactors:reprocessorcollector'})

    event.remove({output:'bigreactors:fluidizercasing'})
    event.remove({output:'bigreactors:fluidizercontroller'})

    event.remove({output:'bigreactors:fluidizersolidinjector'})
    event.remove({output:'bigreactors:reprocessorcollector'})
    event.remove({output:'bigreactors:fluidizercontroller'})

    //==============================================================================
    //Reprocessor
    event.recipes.create.sequenced_assembly([
        'bigreactors:reprocessorcasing'
    ], 'immersiveengineering:sheetmetal_steel',[
        event.recipes.createDeploying('immersiveengineering:sheetmetal_steel',['immersiveengineering:sheetmetal_steel', 'immersiveengineering:slab_sheetmetal_lead']),
        event.recipes.createDeploying('immersiveengineering:sheetmetal_steel',['immersiveengineering:sheetmetal_steel', '#forge:ingots/zinc']),
        event.recipes.createPressing('immersiveengineering:sheetmetal_steel', 'immersiveengineering:sheetmetal_steel')
    ]).transitionalItem('immersiveengineering:sheetmetal_steel').loops(2)


    event.recipes.createMechanicalCrafting('bigreactors:reprocessorcontroller',[
        'SSSSS',
        'SEPES',
        'SPUPS',
        'STPCS',
        'SSSSS'
    ],{
        S:'#forge:plates/steel',
        E:'immersiveengineering:component_electronic',
        P:'immersiveengineering:slab_sheetmetal_lead',
        C:'create:content_observer',
        U:'#forge:storage_blocks/uranium',
        T:'create:display_board'
    })

    event.recipes.create.sequenced_assembly([
        'bigreactors:reprocessorfluidinjector'
    ], 'bigreactors:reprocessorcasing',[
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'immersiveengineering:fluid_pump']),
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', '#forge:plates/steel']),
        event.recipes.createPressing('bigreactors:reprocessorcasing', 'bigreactors:reprocessorcasing')
    ]).transitionalItem('bigreactors:reprocessorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:reprocessorwasteinjector'
    ], 'bigreactors:reprocessorcasing',[
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'create:encased_fan']),
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'immersiveengineering:coil_lv']),
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'create:chute']),
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'immersiveengineering:fluid_pump'])
    ]).transitionalItem('bigreactors:reprocessorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:reprocessoroutputport'
    ], 'bigreactors:reprocessorcasing',[
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'create:chute']),
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'create:encased_fan']),
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'immersiveengineering:fluid_pump'])
    ]).transitionalItem('bigreactors:reprocessorcasing').loops(1)


    event.recipes.create.sequenced_assembly([
        'bigreactors:reprocessorcollector'
    ], 'bigreactors:reprocessorcasing',[
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', 'create:fluid_tank']),
        event.recipes.createDeploying('bigreactors:reprocessorcasing',['bigreactors:reprocessorcasing', '#forge:rods/steel'])
    ]).transitionalItem('bigreactors:reprocessorcasing').loops(2)


    event.recipes.create.sequenced_assembly([
        'bigreactors:fluidizercasing'
    ], 'immersiveengineering:sheetmetal_iron',[
        event.recipes.createDeploying('immersiveengineering:sheetmetal_iron',['immersiveengineering:sheetmetal_iron', 'create:fluid_tank']),
        event.recipes.createDeploying('immersiveengineering:sheetmetal_iron',['immersiveengineering:sheetmetal_iron', '#forge:ingots/zinc'])
    ]).transitionalItem('bigreactors:reprocessorcasing').loops(2)


    event.recipes.create.sequenced_assembly([
        'bigreactors:fluidizercontroller',
    ], 'bigreactors:fluidizercasing',[
        event.recipes.createDeploying('bigreactors:fluidizercasing', ['bigreactors:fluidizercasing', 'immersiveengineering:component_electronic']),
        event.recipes.createDeploying('bigreactors:fluidizercasing', ['bigreactors:fluidizercasing', '#forge:plates/constantan']),
        event.recipes.createDeploying('bigreactors:fluidizercasing', ['bigreactors:fluidizercasing', 'create:content_observer']),
        event.recipes.createDeploying('bigreactors:fluidizercasing', ['bigreactors:fluidizercasing', 'create:mechanical_mixer'])
    ]).transitionalItem('bigreactors:fluidizercasing').loops(1)

    event.recipes.create.sequenced_assembly([
        'bigreactors:fluidizersolidinjector'
    ], 'bigreactors:fluidizercasing',[
        event.recipes.createDeploying('bigreactors:fluidizercasing',['bigreactors:fluidizercasing', 'create:encased_fan']),
        event.recipes.createDeploying('bigreactors:fluidizercasing',['bigreactors:fluidizercasing', 'immersiveengineering:coil_lv']),
        event.recipes.createDeploying('bigreactors:fluidizercasing',['bigreactors:fluidizercasing', 'create:chute']),
        event.recipes.createDeploying('bigreactors:fluidizercasing',['bigreactors:fluidizercasing', 'immersiveengineering:fluid_pump'])
    ]).transitionalItem('bigreactors:fluidizercasing').loops(1)
})