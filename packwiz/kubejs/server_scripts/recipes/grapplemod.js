ServerEvents.recipes(event => {


    event.remove({
        not: { output: 'grapplemod:grapplinghook' },
        mod: 'grapplemod'
    })


    event.shaped('grapplemod:launcheritem', [
        '  P',
        ' R ',
        'R  '
    ], {
        P: 'minecraft:ender_pearl',
        R: 'minecraft:end_rod'
    })


    event.shaped('grapplemod:repeller', [
        'PSP',
        'NNN',
        'PSP'
    ], {
        P: 'minecraft:ender_pearl',
        N: 'minecraft:nether_star',
        S: 'minecraft:shulker_shell'
    })

    event.shaped('grapplemod:longfallboots', [
        'N N',
        'RDR'
    ], {
        N: 'minecraft:nether_star',
        R: 'minecraft:end_rod',
        D: 'minecraft:diamond_boots'
    })

})
