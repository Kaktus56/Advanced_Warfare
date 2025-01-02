ItemEvents.tooltip(event =>{
    event.addAdvanced('minecraft:player_head', (item, advanced, text) => {
        let playerName = item.nbt?.SkullOwner?.Name
        if (playerName) {
          text.add(Text.red(`Голова $==={playerName}===`))
        }
      })
      
    event.addAdvanced('#iceandfire:scales/dragon', (item, advanced, text) => {
        text.add(1, Text.gray('Желанная валюта в некоторых магазинах'))
    })
    event.addAdvanced('vampirism:crossbow_arrow', (item, advanced, text) => {
        text.add(1, Text.blue('Аммуниция для охотничьих арбалетов'))
    })

    event.addAdvanced('minecraft:diamond', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('Удерживайте ').gold(), Text.of('Shift ').yellow(), Text.of('для доп. информации.').gold()])
      }else{
        text.add(1, Text.aqua('Используйте на наковальне с оружием'))
        text.add(2, Text.aqua('чтобы с небольшим шансом улучшить'))
        text.add(3, Text.aqua('это оружие.'))
      }
    })

    event.addAdvanced('minecraft:lapis_lazuli', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [Text.of('Удерживайте ').gold(), Text.of('Shift ').yellow(), Text.of('для доп. информации.').gold()])
      }else{
        text.add(1, Text.aqua('Используйте на наковальне с оружием'))
        text.add(2, Text.aqua('чтобы с небольшим шансом улучшить'))
        text.add(3, [Text.of('это оружие.').aqua(), Text.of(' Сбрасывает прежние улучшения').red()])
      }
    })

    event.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
      text.add(1, Text.red('Выключен на сервере. Вызывает вылет при'))
      text.add(2, Text.red('использовании с другим оружием.'))
  })

  event.addAdvanced('createbigcannons:cannon_welder', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Удерживайте ').gold(), Text.of('Shift ').yellow(), Text.of('для доп. информации.').gold()])
    }else{
      text.add(1, Text.green('Необходим для сварки орудий'))
      text.add(2, Text.green('после установки на корабль или'))
      text.add(3, Text.green('на артиллерийскую башню.'))
    }
  })

  event.addAdvanced('vampirism:vampire_beacon', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Удерживайте ').gold(), Text.of('Shift ').yellow(), Text.of('для доп. информации.').gold()])
    }else{
      text.add(1, Text.gold('Работает аналогично маяку,'))
      text.add(2, Text.gold('но требует блоки кровавого железа'))
      text.add(3, Text.gold('в качестве основы.'))
    }
  })

event.addAdvanced('jeg:grenade', (item, advanced, text) => {
    text.add(1, Text.aqua('После выдирания чеки товарищ граната'))
    text.add(2, Text.aqua('вам не друг.'))
})

event.addAdvanced('jeg:stun_grenade', (item, advanced, text) => {
  text.add(1, Text.yellow('Think fast, chucklenuts!'))
})

event.addAdvanced('jeg:molotov_cocktail', (item, advanced, text) => {
  text.add(1, Text.yellow('Оружие свободоборцев'))
})
})
