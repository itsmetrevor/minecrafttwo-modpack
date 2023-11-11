PlayerEvents.loggedIn(event => {
    const buildingRule = `effortless buildingrule ${event.player}`
    event.server.runCommandSilent(`${buildingRule} canBreakFar false`)
    event.server.runCommandSilent(`${buildingRule} enableUndoRedo true`)
    event.server.runCommandSilent(`${buildingRule} maxBlockPlaceAtOnce 64`)
    event.server.runCommandSilent(`${buildingRule} maxReachDistance 16`)
    event.server.runCommandSilent(`${buildingRule} undoStackSize 5`)
})