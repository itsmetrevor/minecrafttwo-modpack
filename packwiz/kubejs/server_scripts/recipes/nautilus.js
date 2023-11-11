const shells = [
    'wildlife:raw_clam',
    'wildlife:horseshoe_crab',
    'wildlife:hermit_crab',
    'wildlife:clam',
    'wildlife:snail',
    'naturalist:snail_shell'
]

ServerEvents.recipes(event => {
    for (const shell of shells) {
        event.shapeless('minecraft:nautilus_shell', shell)
    }
})
