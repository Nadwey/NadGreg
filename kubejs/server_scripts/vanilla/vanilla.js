ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ id: "minecraft:blaze_powder" });
  event.remove({ id: "gtceu:shapeless/blaze_rod_to_powder" });
  event.remove({ id: "minecraft:ender_eye" });

  //Ghast Tear
  greg
    .chemical_reactor("gtceu:ghast_tear")
    .inputItems("#c:tiny_dusts/potassium", "#c:tiny_dusts/lithium")
    .inputFluids("gtceu:salt_water 1000")
    .outputItems("minecraft:ghast_tear")
    .duration(400)
    .EUt(30);
  // Skeleton Skull
  greg
    .assembler("gtceu:skeleton_skull")
    .inputItems("minecraft:bone")
    .outputItems("skeleton_skull")
    .duration(100)
    .EUt(4);
  // Bones
  greg
    .extractor("gtceu:bones")
    .inputItems("#minecraft:dirt")
    .outputItems("bone")
    .duration(100)
    .EUt(16);

  // Prismarine
  greg
    .autoclave("gtceu:prismarine")
    .inputItems("minecraft:prismarine_crystals")
    .inputFluids("minecraft:water 100")
    .outputItems("prismarine_shard")
    .duration(1200)
    .EUt(24);
  greg
    .autoclave("gtceu:prismarine_distilled")
    .inputItems("minecraft:prismarine_crystals")
    .inputFluids("gtceu:distilled_water 100")
    .outputItems("prismarine_shard")
    .duration(600)
    .EUt(24);
  greg
    .macerator("gtceu:prismarine_crushed")
    .inputItems("minecraft:prismarine_shard")
    .outputItems("prismarine_crystals")
    .duration(120)
    .EUt(2);

  // Slimeballs
  greg
    .chemical_bath("gtceu:slimeball_bath")
    .inputItems("#c:dusts/asbestos")
    .inputFluids("gtceu:glue 250")
    .outputItems("slime_ball")
    .duration(200)
    .EUt(24);
  greg
    .centrifuge("gtceu:slimeballs_centrifuge")
    .inputItems("slime_ball")
    .outputFluids("gtceu:glue 250")
    .outputItems("#c:dusts/asbestos")
    .duration(200)
    .EUt(24);

  // Sponge
  greg
    .compressor("gtceu:spongebob")
    .inputItems("2x #c:foils/polycaprolactam")
    .outputItems("sponge")
    .duration(200)
    .EUt(2);

  // Fire Resistance
  event.shapeless(
    'minecraft:potion[potion_contents={potion:"minecraft:fire_resistance"}]',
    [
      'minecraft:potion[potion_contents={potion:"minecraft:water"}]',
      "#c:dusts/sugar",
      "#c:dusts/stone",
      "#c:dusts/lead",
    ]
  );
  event.shapeless(
    'minecraft:potion[potion_contents={potion:"minecraft:long_fire_resistance"}]',
    [
      'minecraft:potion[potion_contents={potion:"minecraft:water"}]',
      "#c:dusts/redstone",
      "#c:dusts/sugar",
      "#c:dusts/stone",
      "#c:dusts/lead",
    ]
  );

  // XP
  greg
    .large_chemical_reactor("gtceu:bottle_o_enchanting")
    .inputItems(
      "glass_bottle",
      "#c:tiny_dusts/gold",
      "#c:tiny_dusts/sugar"
    )
    .inputFluids("water 100")
    .outputItems("experience_bottle")
    .duration(20)
    .EUt(256);

  // Nether Star
  greg
    .chemical_reactor("gtceu:nether_star")
    .inputItems("#c:dusts/diamond", "#c:dusts/iridium")
    .inputFluids("gtceu:rocket_fuel 1000", "gtceu:nether_air 8000")
    .outputItems("2x gtceu:nether_star_dust")
    .duration(200)
    .EUt(7680);

  // Netherite
  greg
    .alloy_smelter("gtceu:better_netherite")
    .inputItems("2x netherite_scrap", "2x #c:ingots/gold")
    .outputItems("1x netherite_ingot")
    .duration(150)
    .EUt(100);

  event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1), ["RWR", "WBW", "RmR"], {
    R: "#c:plates/rubber",
    W: "#minecraft:wool",
    B: "minecraft:book",
    m: "#c:tools/mallets"
  });
});
