const colors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 
    'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 
    'green', 'red', 'black'
]

ServerEvents.recipes(event => {
    for (const color of colors) {
        event.remove({ output: `compact_storage:backpack_${color}` })
    }
})
