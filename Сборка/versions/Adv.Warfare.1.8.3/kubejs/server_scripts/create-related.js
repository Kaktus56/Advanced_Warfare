ServerEvents.recipes(event => {

    event.shaped(
        Item.of('createaddition:electric_motor', 1),
    [
        'PCP',
        'CGC',
        'PCP'
    ],
    {
        P: '#forge:plates/brass',
        C: 'immersiveengineering:coil_lv',
        G: 'minecraft:gold_block'
    }
)
})