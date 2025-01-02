ServerEvents.recipes(event => {
    event.remove({id:'immersiveengineering:crafting/plate_steel_hammering'})
    event.remove({id: 'createbigcannons:cutting/empty_machine_gun_round'})

    event.remove({mod:'mteg'})
    event.remove({mod:'jeg'})

 
// Оружие - Weaponry -----------------------------------------------------------------------------
    function sequenced_gun_assembly(input, transitionalItem, output, part1, part2, part3, part4){
        event.recipes.create.sequenced_assembly([
            output
        ], input,[
            event.recipes.createDeploying(transitionalItem,[transitionalItem, part1]),
            event.recipes.createDeploying(transitionalItem,[transitionalItem, part2]),
            event.recipes.createDeploying(transitionalItem,[transitionalItem, part3]),
            event.recipes.createDeploying(transitionalItem,[transitionalItem, part4]),
            event.recipes.createPressing(transitionalItem, transitionalItem)
        ]).transitionalItem(transitionalItem).loops(1)
    }

    event.shaped(Item.of('mteg:m1911', 1), 
    [
        '   ',
        'RCF', 
        ' HM'
    ],
    {R:'#forge:rods/steel', F:'minecraft:flint', C:'immersiveengineering:component_steel', 
        H:'immersiveengineering:gunpart_hammer', M:'immersiveengineering:toolupgrade_revolver_magazine'}
    )

    event.shaped(Item.of('mteg:micro_uzi', 1), 
    [
        '  F',
        'RSC', 
        ' MH'
    ],
    {R:'#forge:rods/steel', F:'minecraft:flint', C:'immersiveengineering:component_steel', 
        H:'immersiveengineering:gunpart_hammer', M:'kubejs:gun_magazine', S: 'createbigcannons:recoil_spring'}
    )

    sequenced_gun_assembly('kubejs:gunbox', 'kubejs:incomplete_assault_rifle', 'jeg:combat_rifle', 'immersiveengineering:component_steel', 'kubejs:gun_magazine', '#forge:plates/steel', '#forge:rods/steel')
    sequenced_gun_assembly('kubejs:gunbox', 'kubejs:incomplete_rifle', 'mteg:m1_garand', '#forge:rods/steel', '#forge:rods/steel', 'immersiveengineering:gunpart_drum', 'immersiveengineering:component_steel')
    sequenced_gun_assembly('kubejs:gunbox', 'kubejs:incomplete_shotgun', 'jeg:pump_shotgun', 'immersiveengineering:gunpart_barrel', 'createbigcannons:recoil_spring', 'immersiveengineering:component_steel', '#forge:plates/steel')

    //sequenced_gun_assembly('kubejs:gunbox', 'kubejs:incomplete_grenade_launcher', 'cgm:grenade_launcher', 'immersiveengineering:gunpart_drum', '#forge:rods/steel', 'immersiveengineering:component_steel', 'immersiveengineering:gunpart_hammer')
    sequenced_gun_assembly('#forge:rods/steel', 'kubejs:incomplete_heavy_rifle', 'jeg:bolt_action_rifle', 'immersiveengineering:component_steel', 'create:precision_mechanism', '#forge:rods/steel', 'create:sturdy_sheet')
    event.recipes.create.sequenced_assembly(['jeg:burst_rifle'], 
        'createaddition:electric_motor',[
            event.recipes.createDeploying('kubejs:incomplete_burst_rifle',['kubejs:incomplete_burst_rifle', 'kubejs:gun_magazine']),
            event.recipes.createDeploying('kubejs:incomplete_burst_rifle',['kubejs:incomplete_burst_rifle', '#forge:rods/steel']),
            event.recipes.createDeploying('kubejs:incomplete_burst_rifle',['kubejs:incomplete_burst_rifle', 'create:electron_tube']),
            event.recipes.createDeploying('kubejs:incomplete_burst_rifle',['kubejs:incomplete_burst_rifle', 'create:precision_mechanism']),
            event.recipes.createPressing('kubejs:incomplete_burst_rifle', 'kubejs:incomplete_burst_rifle')
        ]).transitionalItem('kubejs:incomplete_burst_rifle').loops(1)
    
    //sequenced_gun_assembly('kubejs:gunbox', 'kubejs:incomplete_bazooka', 'cgm:bazooka', 'createbigcannons:steel_cannon_barrel', 'createbigcannons:steel_cannon_barrel', 'immersiveengineering:component_electronic', 'cgm:short_scope')

// ПОРОХА - Gunpowders -----------------------------------------------------------
    event.shapeless(Item.of('kubejs:improved_gunpowder_pinch', 6), 
        [
          'minecraft:gunpowder',
          '#minecraft:coals',
          'create:cinder_flour'
        ]
    )
    event.shapeless(Item.of('kubejs:gunpowder_pinch', 6),
        [
            'minecraft:gunpowder'
        ] 
    )
    event.shapeless(Item.of('minecraft:gunpowder', 6),
       [
            'kubejs:gunpowder_pinch',
            'kubejs:gunpowder_pinch',
            'kubejs:gunpowder_pinch',
            'kubejs:gunpowder_pinch',
            'kubejs:gunpowder_pinch',
            'kubejs:gunpowder_pinch'
        ] 
    )

// Аммуниция - Munitions -----------------------------------------------------------------------
    event.recipes.create.cutting('8x createbigcannons:empty_machine_gun_round', 'createbigcannons:autocannon_cartridge_sheet').processingTime(100)
    
    event.recipes.create.sequenced_assembly(['jeg:pistol_ammo'], 
        'createbigcannons:empty_machine_gun_round',[
            event.recipes.createDeploying('kubejs:incomplete_basic_bullet',['kubejs:incomplete_basic_bullet', 'kubejs:gunpowder_pinch']),
            event.recipes.createDeploying('kubejs:incomplete_basic_bullet',['kubejs:incomplete_basic_bullet', '#forge:nuggets/copper']),
            event.recipes.createPressing('kubejs:incomplete_basic_bullet', 'kubejs:incomplete_basic_bullet')
        ]).transitionalItem('kubejs:incomplete_basic_bullet').loops(1)

    event.recipes.create.sequenced_assembly(['jeg:rifle_ammo'], 
        'createbigcannons:empty_machine_gun_round',[
            event.recipes.createDeploying('kubejs:incomplete_advanced_bullet',['kubejs:incomplete_advanced_bullet', 'kubejs:improved_gunpowder_pinch']),
            event.recipes.createDeploying('kubejs:incomplete_advanced_bullet',['kubejs:incomplete_advanced_bullet', '#forge:nuggets/steel']),
            event.recipes.createPressing('kubejs:incomplete_advanced_bullet', 'kubejs:incomplete_advanced_bullet')
        ]).transitionalItem('kubejs:incomplete_advanced_bullet').loops(1)
    
    event.shaped(Item.of('jeg:shotgun_shell', 3),
        [
        ' D ',
        'PPP',
        'CCC'],
        {D:'#forge:dusts/steel', P:'kubejs:improved_gunpowder_pinch', C:'immersiveengineering:empty_shell'}
    )
    
/*    event.recipes.create.sequenced_assembly(['cgm:missile'], 
        'create:fluid_pipe',[
            event.recipes.createFilling('create:fluid_pipe', ['create:fluid_pipe', Fluid.lava(500)]),
            event.recipes.createDeploying('create:fluid_pipe',['create:fluid_pipe', 'create:sturdy_sheet']),
            event.recipes.createDeploying('create:fluid_pipe',['create:fluid_pipe', 'createbigcannons:nitropowder']),
            event.recipes.createDeploying('create:fluid_pipe',['create:fluid_pipe', 'create:electron_tube']),
            event.recipes.createPressing('create:fluid_pipe', 'create:fluid_pipe')
        ]).transitionalItem('create:fluid_pipe').loops(1)*/
    
    event.shaped(Item.of('jeg:grenade', 1),
        [
        ' NI',
        'IPI',
        ' I '],
        {N:'create:cinder_flour', P:'minecraft:gunpowder', I:'minecraft:iron_nugget'}
    )

    event.shaped(Item.of('jeg:stun_grenade', 1),
    [
    ' NI',
    'IPI',
    ' I '],
    {N:'minecraft:glowstone_dust', P:'kubejs:gunpowder_pinch', I:'minecraft:iron_nugget'}
    )

    event.shapeless(Item.of('jeg:molotov_cocktail', 4),
    [
         'minecraft:potion',
         'kubejs:gunpowder_pinch',
         'minecraft:wheat'
     ] 
    )

    event.shapeless(Item.of('jeg:healing_talisman', 4),
       [
            'majruszsdifficulty:bandage',
            'minecraft:golden_apple',
            'minecraft:redstone'
        ] 
    )
// Части оружия - gunparts ---------------------------------------------------------------------
    event.shaped(Item.of('kubejs:gunbox', 1), 
        [
            'PRP',
            'SMC', 
            'PHP'
        ],
        {
            P:'#forge:plates/steel',
            R:'#forge:rods/steel',
            S:'createbigcannons:recoil_spring',
            M:'create:precision_mechanism',
            C:'immersiveengineering:component_steel',
            H:'immersiveengineering:gunpart_hammer'
        }
    )
    event.shaped(Item.of('kubejs:gun_magazine', 1), 
        [
            'N N',
            'NSN', 
            'NPN'
        ],
        {
            P:'#forge:plates/steel',
            S:'createbigcannons:recoil_spring',
            N:'#forge:nuggets/steel'
        }
    )
})