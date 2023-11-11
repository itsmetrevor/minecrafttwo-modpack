ServerEvents.recipes(event => {

    event.shapeless('minecraft:terracotta', 
         ['#minecraft:terracotta', 
          'supplementaries:soap'])
         .keepIngredient('supplementaries:soap')

})