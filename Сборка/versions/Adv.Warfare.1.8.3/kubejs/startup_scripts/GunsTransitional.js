StartupEvents.registry('item', event => {

    function gunTransitionalRegistry(name, nameRus){
        event.create(name, 'create:sequenced_assembly')
            .displayName(nameRus)
            .texture('kubejs:item/gunbox')
    }

    function bulletTransitionalRegistry(name, nameRus){
        event.create(name, 'create:sequenced_assembly')
            .displayName(nameRus)
            .texture('kubejs:item/bullet')
    }

    event.create('gunpowder_pinch')
        .displayName('Щепотка пороха')
        .texture('kubejs:item/gunpowder_pinch')
        .rarity('UNCOMMON')

    event.create('improved_gunpowder_pinch')
        .displayName('Щепотка продвинутого пороха')
        .texture('kubejs:item/improved_gunpowder_pinch')
        .rarity('RARE')

    event.create('gunbox')
        .displayName('Ствольная коробка')

    event.create("gun_magazine")
        .displayName('Магазин')
        .tooltip('Ингридиент для создания оружия.')
        .tooltip('Не требуется для перезарядки.')


    gunTransitionalRegistry('incomplete_assault_rifle', 'Незавершённая штурмовая винтовка')
    gunTransitionalRegistry('incomplete_rifle', 'Незавершённая винтовка')
    gunTransitionalRegistry('incomplete_shotgun', 'Незавершённый дробовик')
    gunTransitionalRegistry('incomplete_heavy_rifle', 'Незавершённая снайперская винтовка')
    gunTransitionalRegistry('incomplete_grenade_launcher', 'Незавершённый гранатомёт')
    gunTransitionalRegistry('incomplete_burst_rifle', 'Незавершённая полуавтоматическая винтовка')
    gunTransitionalRegistry('incomplete_bazooka', 'Незавершённая ракетница')

    bulletTransitionalRegistry('incomplete_basic_bullet', 'Незавершённая пистолетная пуля')
    bulletTransitionalRegistry('incomplete_advanced_bullet', 'Незавершённая винтовочная пуля')
    bulletTransitionalRegistry('incomplete_shotgun_round', 'Незавершённая пуля дробовика')


})