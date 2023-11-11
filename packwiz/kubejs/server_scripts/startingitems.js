PlayerEvents.loggedIn(event => {

    if (event.player.stages.has('startingItemsReceived')) {
        return
    }

    event.player.stages.add('startingItemsReceived')

    const startingItems = [
        'grapplemod:grapplinghook',
        'minecraft:crafting_table',
        '64x minecraft:oak_planks',
        '16x things:recall_potion',
        '16x minecraft:torch',
        Item.of('spiceoffabric:paper_bag', {
            inventory: {
                Items: [
                    {Count: 16, Slot: 0, id: 'minecraft:cooked_cod'},
                    {Count: 16, Slot: 1, id: 'minecraft:apple'},
                    {Count: 16, Slot: 2, id: 'minecraft:mushroom_stew'},
                    {Count: 16, Slot: 3, id: 'minecraft:bread'}
                ]
            }
        })

    ]


    for (const item of startingItems) {
        event.player.give(item)
    }
})