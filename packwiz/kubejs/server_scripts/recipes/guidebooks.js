const books = [
    Item.of('patchouli:guide_book', { 'patchouli:book': 'simplyswords:runic_grimoire' }),
    Item.of('patchouli:guide_book', { 'patchouli:book': 'mythicmounts:mythical_mounts' }),
    Item.of('patchouli:guide_book', { 'patchouli:book': 'deeperdarker:wanderers_notebook' }),
    Item.of('patchouli:guide_book', { 'patchouli:book': 'wildlife:encyclopedia_of_wildlife' }),
    'cookingforblockheads:no_filter_edition',
    'adventurez:handbook',
    'mca:family_tree',
    'mca:book_death',
    'mca:book_romance',
    'mca:book_family',
    'mca:book_rose_gold',
    'mca:book_infection',
    'mca:book_blueprint',
    'mca:book_supporters',
    'mca:civil_registry',
]

ServerEvents.recipes(event => {
    for (const book of books) {
        event.shapeless( book, 'minecraft:apple' )
    }
})