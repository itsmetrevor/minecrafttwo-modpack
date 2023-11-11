PlayerEvents.loggedIn(event => {
    event.player.runCommandSilent(`chatmode local`)
})