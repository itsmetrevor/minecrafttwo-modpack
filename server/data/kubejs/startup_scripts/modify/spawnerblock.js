BlockEvents.modification(event => {
    event.modify('minecraft:spawner', block => {
        block.destroySpeed = 100.0
        block.explosionResistance = 1200
    })
})
