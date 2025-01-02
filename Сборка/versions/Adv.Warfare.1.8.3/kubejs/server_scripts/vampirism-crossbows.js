// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

  event.remove({ output: 'vampirism:enhanced_crossbow'})
  event.remove({ output: 'vampirism:basic_tech_crossbow'})
  event.remove({ output: 'vampirism:enhanced_tech_crossbow'})
  event.remove({ output: 'vampirism:enhanced_double_crossbow'})
  


  event.recipes.create.sequenced_assembly([
    Item.of('vampirism:basic_tech_crossbow').withChance(4.0),
    Item.of('minecraft:crossbow').withChance(1.0)
  ], 'vampirism:enhanced_crossbow', [
    event.recipes.createDeploying('vampirism:enhanced_crossbow', ['vampirism:enhanced_crossbow', 'create:hand_crank']),
    event.recipes.createDeploying('vampirism:enhanced_crossbow', ['vampirism:enhanced_crossbow', 'minecraft:diamond']),
    event.recipes.createDeploying('vampirism:enhanced_crossbow', ['vampirism:enhanced_crossbow', 'create:sturdy_sheet']),
    event.recipes.createDeploying('vampirism:enhanced_crossbow', ['vampirism:enhanced_crossbow', 'minecraft:iron_block']),
    event.recipes.createPressing('vampirism:enhanced_crossbow', 'vampirism:enhanced_crossbow')
  ]).transitionalItem('vampirism:enhanced_crossbow').loops(1)
  

  event.recipes.create.sequenced_assembly([
    Item.of('vampirism:enhanced_tech_crossbow').withChance(5.0),
    Item.of('minecraft:crossbow').withChance(1.0)
  ], 'vampirism:basic_tech_crossbow', [
    event.recipes.createDeploying('vampirism:basic_tech_crossbow', ['vampirism:basic_tech_crossbow', 'create:precision_mechanism']),
    event.recipes.createDeploying('vampirism:basic_tech_crossbow', ['vampirism:basic_tech_crossbow', 'minecraft:netherite_ingot']),
    event.recipes.createDeploying('vampirism:basic_tech_crossbow', ['vampirism:basic_tech_crossbow', 'minecraft:spruce_log']),
    event.recipes.createPressing('vampirism:basic_tech_crossbow', 'vampirism:basic_tech_crossbow')
  ]).transitionalItem('vampirism:basic_tech_crossbow').loops(1)
  


  event.recipes.createMechanicalCrafting('vampirism:enhanced_crossbow',[
   'CIC',
   'IGI',
   'AWA'
  ],{
  C:'minecraft:string',
  A:'minecraft:air',
  I:'minecraft:iron_ingot',
  G:'create:cogwheel',
  W:'#minecraft:planks'
  })

  
  event.recipes.create.sequenced_assembly([Item.of('vampirism:enhanced_double_crossbow').withChance(5.0),
    Item.of('minecraft:crossbow').withChance(1.0)],
    'vampirism:enhanced_crossbow',
    [
      event.recipes.createDeploying('vampirism:enhanced_crossbow', ['vampirism:enhanced_crossbow', 'minecraft:iron_ingot']),
      event.recipes.createDeploying('vampirism:enhanced_crossbow', ['vampirism:enhanced_crossbow', 'create:cogwheel']),
      event.recipes.createDeploying('vampirism:enhanced_crossbow', ['vampirism:enhanced_crossbow', 'vampirism:enhanced_crossbow']),
      event.recipes.createPressing('vampirism:enhanced_crossbow', 'vampirism:enhanced_crossbow')
    ]
  ).transitionalItem('vampirism:enhanced_crossbow').loops(1)

})