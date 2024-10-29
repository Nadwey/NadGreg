// Architect's Palette is not yet on 1.21.1
// TODO


// ServerEvents.recipes((event) => {
//   event.remove({ output: "architects_palette:charcoal_block" });

//   event.remove({ output: "architects_palette:abyssaline" });
//   event.recipes.gtceu
//     .mixer("abyssaline")
//     .inputItems("gtceu:obsidian_dust", "minecraft:prismarine_shard")
//     .outputItems("2x architects_palette:abyssaline")
//     .EUt(2)
//     .duration(20);

//   event.recipes.gtceu
//     .construction_core("abyssaline")
//     .inputItems("gtceu:obsidian_dust", "minecraft:prismarine_shard")
//     .outputItems("12x architects_palette:abyssaline")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:plating_block" });
//   event.recipes.gtceu
//     .assembler("plating_block")
//     .inputItems("4x #c:plates/iron")
//     .outputItems("4x architects_palette:plating_block")
//     .circuit(10)
//     .EUt(2)
//     .duration(20);

//   event.recipes.gtceu
//     .construction_core("plating_block")
//     .inputItems("4x #c:plates/iron")
//     .outputItems("16x architects_palette:plating_block")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ output: "architects_palette:myonite" });
//   event.recipes.gtceu
//     .mixer("myonite")
//     .inputItems("minecraft:stone", "#c:mushrooms")
//     .outputItems("4x architects_palette:myonite")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("myonite")
//     .inputItems("minecraft:stone", "#c:mushrooms")
//     .outputItems("16x architects_palette:myonite")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(2)
//     .duration(20);

//   event.remove({ output: "architects_palette:olivestone_bricks" });
//   event.recipes.gtceu
//     .mixer("olivestone_bricks")
//     .inputItems("minecraft:stone", "#c:dyes/green")
//     .outputItems("4x architects_palette:olivestone_bricks")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("olivestone_bricks")
//     .inputItems("minecraft:stone", "#c:dyes/green")
//     .outputItems("16x architects_palette:olivestone_bricks")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(2)
//     .duration(20);

//   event.remove({ id: "architects_palette:illuminated_olivestone" });
//   event.recipes.gtceu
//     .mixer("illuminated_olivestone")
//     .inputItems("#architects_palette:olivestone", "minecraft:glowstone")
//     .outputItems("architects_palette:illuminated_olivestone")
//     .EUt(2)
//     .duration(20);

//   event.remove({ id: "architects_palette:overgrown_algal_bricks" });
//   event.recipes.gtceu
//     .mixer("overgrown_algal_bricks")
//     .inputItems("architects_palette:algal_bricks", "minecraft:kelp")
//     .outputItems("architects_palette:overgrown_algal_bricks")
//     .EUt(2)
//     .duration(20);

//   event.remove({ id: "architects_palette:algal_lamp" });
//   event.recipes.gtceu
//     .mixer("algal_lamp")
//     .inputItems("architects_palette:algal_brick", "minecraft:glowstone")
//     .outputItems("architects_palette:algal_lamp")
//     .EUt(2)
//     .duration(20);

//   event.remove({ id: "architects_palette:lit_osseous_skull" });
//   event.recipes.gtceu
//     .canner("lit_osseous_skull")
//     .inputItems("architects_palette:osseous_skull", "minecraft:torch")
//     .outputItems("architects_palette:lit_osseous_skull")
//     .EUt(2)
//     .duration(20);

//   event.remove({ id: "architects_palette:lit_withered_osseous_skull" });
//   event.recipes.gtceu
//     .canner("lit_withered_osseous_skull")
//     .inputItems(
//       "architects_palette:withered_osseous_skull",
//       "minecraft:soul_torch"
//     )
//     .outputItems("architects_palette:lit_withered_osseous_skull")
//     .EUt(2)
//     .duration(20);

//   event.remove({ id: "architects_palette:gilded_sandstone" });
//   event.recipes.gtceu
//     .mixer("gilded_sandstone")
//     .inputItems("minecraft:sandstone", "minecraft:gold_nugget")
//     .outputItems("2x architects_palette:gilded_sandstone")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("gilded_sandstone")
//     .inputItems("minecraft:sandstone", "minecraft:gold_nugget")
//     .outputItems("8x architects_palette:gilded_sandstone")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:weeping_blackstone" });
//   event.recipes.gtceu
//     .mixer("weeping_blackstone")
//     .inputItems("minecraft:blackstone", "minecraft:weeping_vines")
//     .outputItems("1x architects_palette:weeping_blackstone")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("weeping_blackstone")
//     .inputItems("minecraft:blackstone", "minecraft:weeping_vines")
//     .outputItems("8x architects_palette:weeping_blackstone")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:choral_end_stone_bricks" });
//   event.recipes.gtceu
//     .mixer("twisting_blackstone")
//     .inputItems("minecraft:blackstone", "minecraft:twisting_vines")
//     .outputItems("1x architects_palette:twisting_blackstone")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("twisting_blackstone")
//     .inputItems("minecraft:blackstone", "minecraft:twisting_vines")
//     .outputItems("8x architects_palette:twisting_blackstone")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:choral_end_stone_bricks" });
//   event.recipes.gtceu
//     .mixer("choral_end_stone_bricks")
//     .inputItems("minecraft:end_stone_bricks", "minecraft:chorus_fruit")
//     .outputItems("1x architects_palette:choral_end_stone_bricks")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("choral_end_stone_bricks")
//     .inputItems("minecraft:end_stone_bricks", "minecraft:chorus_fruit")
//     .outputItems("4x architects_palette:choral_end_stone_bricks")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:sunstone" });
//   event.recipes.gtceu
//     .mixer("sunstone")
//     .inputItems("minecraft:basalt", "architects_palette:sunmetal_blend")
//     .outputItems("2x architects_palette:sunstone")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("sunstone")
//     .inputItems("minecraft:basalt", "architects_palette:sunmetal_blend")
//     .outputItems("8x architects_palette:sunstone")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:molten_nether_bricks" });
//   event.recipes.gtceu
//     .mixer("molten_nether_bricks")
//     .inputItems("minecraft:nether_bricks", "minecraft:magma_block")
//     .outputItems("2x architects_palette:molten_nether_bricks")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("molten_nether_bricks")
//     .inputItems("minecraft:nether_bricks", "minecraft:magma_block")
//     .outputItems("8x architects_palette:molten_nether_bricks")
//     .inputFluids("minecraft:lava 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:coarse_snow" });
//   event.recipes.gtceu
//     .mixer("coarse_snow")
//     .inputItems("minecraft:snow_block", "minecraft:gravel")
//     .outputItems("2x architects_palette:coarse_snow")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("coarse_snow")
//     .inputItems("minecraft:snow_block", "minecraft:gravel")
//     .outputItems("8x architects_palette:coarse_snow")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:unobtanium" });
//   event.recipes.gtceu
//     .macerator("unobtanium")
//     .inputItems("architects_palette:unobtanium_block")
//     .outputItems("4x architects_palette:unobtanium")
//     .chancedOutput(Item.of("architects_palette:unobtanium", 1), 100, 0)
//     .EUt(GTValues.VA[GTValues.HV])
//     .duration(2000);

//   event.remove({ id: "architects_palette:ancient_plating" });
//   event.recipes.gtceu
//     .mixer("ancient_plating")
//     .inputItems(
//       "minecraft:ancient_debris",
//       "4x architects_palette:nether_brass_ingot",
//       "4x architects_palette:nether_brass_nugget"
//     )
//     .outputItems("32x architects_palette:ancient_plating")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("ancient_plating")
//     .inputItems(
//       "minecraft:ancient_debris",
//       "4x architects_palette:nether_brass_ingot"
//     )
//     .outputItems("64x architects_palette:ancient_plating")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:tread_plate" });
//   event.recipes.gtceu
//     .mixer("tread_plate")
//     .inputItems("architects_palette:plating_block", "#c:dusts/iron")
//     .outputItems("2x architects_palette:tread_plate")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("tread_plate")
//     .inputItems("architects_palette:plating_block", "#c:dusts/iron")
//     .outputItems("8x architects_palette:tread_plate")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:hazard_block" });
//   event.recipes.gtceu
//     .mixer("hazard_block")
//     .inputItems("yellow_concrete", "black_concrete")
//     .outputItems("2x architects_palette:hazard_block")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("hazard_block")
//     .inputItems("yellow_concrete", "black_concrete")
//     .outputItems("8x architects_palette:hazard_block")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:sheet_metal_block" });
//   event.recipes.gtceu
//     .compressor("sheet_metal_block")
//     .inputItems("iron_block")
//     .outputItems("32x architects_palette:sheet_metal_block")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("sheet_metal_block")
//     .inputItems("iron_block")
//     .outputItems("64x architects_palette:sheet_metal_block")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:oracle_lamp" });
//   event.recipes.gtceu
//     .mixer("oracle_lamp")
//     .inputItems("architects_palette:oracle_jelly", "minecraft:end_rod")
//     .outputItems("architects_palette:oracle_lamp")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("oracle_lamp")
//     .inputItems("architects_palette:oracle_jelly", "minecraft:end_rod")
//     .outputItems("8x architects_palette:oracle_lamp")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:dark_oracle_bricks" });
//   event.recipes.gtceu
//     .mixer("dark_oracle_bricks")
//     .inputItems("architects_palette:oracle_bricks", "#c:dyes/black")
//     .outputItems("architects_palette:dark_oracle_bricks")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("dark_oracle_bricks")
//     .inputItems("architects_palette:oracle_bricks", "#c:dyes/black")
//     .outputItems("8x architects_palette:dark_oracle_bricks")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:framed_oracle_block" });
//   event.recipes.gtceu
//     .mixer("framed_oracle_block")
//     .inputItems(
//       "architects_palette:oracle_block",
//       "architects_palette:cerebral_plate"
//     )
//     .outputItems("2x architects_palette:framed_oracle_block")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("framed_oracle_block")
//     .inputItems(
//       "architects_palette:oracle_block",
//       "architects_palette:cerebral_plate"
//     )
//     .outputItems("8x architects_palette:framed_oracle_block")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:algal_blend" });
//   event.recipes.gtceu
//     .mixer("algal_blend")
//     .inputItems("clay_ball", "kelp")
//     .outputItems("2x architects_palette:algal_blend")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("algal_blend")
//     .inputItems("clay_ball", "kelp")
//     .outputItems("16x architects_palette:algal_blend")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:entwine_rod" });
//   event.recipes.gtceu
//     .lathe("entwine_rod")
//     .inputItems("minecraft:ender_pearl")
//     .outputItems("2x architects_palette:entwine_rod")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("entwine_rod")
//     .inputItems("ender_pearl")
//     .outputItems("8x architects_palette:entwine_rod")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:sunmetal_blend" });
//   event.recipes.gtceu
//     .mixer("sunmetal_blend")
//     .inputItems("soul_sand", "#c:dusts/gold")
//     .outputItems("4x architects_palette:sunmetal_blend")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("sunmetal_blend")
//     .inputItems("soul_sand", "#c:dusts/gold")
//     .outputItems("16x architects_palette:sunmetal_blend")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:nether_brass_blend" });
//   event.recipes.gtceu
//     .mixer("nether_brass_blend")
//     .inputItems("soul_sand", "#c:dusts/brass")
//     .outputItems("4x architects_palette:nether_brass_blend")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("nether_brass_blend")
//     .inputItems("soul_sand", "#c:dusts/brass")
//     .outputItems("16x architects_palette:nether_brass_blend")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:wardstone" });
//   event.recipes.gtceu
//     .mixer("wardstone")
//     .inputItems("nether_wart", "#c:dusts/lapis")
//     .outputItems("4x architects_palette:wardstone")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("wardstone")
//     .inputItems("nether_wart", "#c:dusts/lapis")
//     .outputItems("16x architects_palette:wardstone")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:cerebral_plate" });
//   event.recipes.gtceu
//     .mixer("cerebral_plate")
//     .inputItems("tuff", "#c:dusts/nether_quartz")
//     .outputItems("4x architects_palette:cerebral_plate")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("cerebral_plate")
//     .inputItems("tuff", "#c:dusts/nether_quartz")
//     .outputItems("16x architects_palette:cerebral_plate")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   event.remove({ id: "architects_palette:oracle_jelly" });
//   event.recipes.gtceu
//     .mixer("oracle_jelly")
//     .inputItems("sugar", "#c:dusts/amethyst")
//     .outputItems("4x architects_palette:oracle_jelly")
//     .EUt(2)
//     .duration(20);
//   event.recipes.gtceu
//     .construction_core("oracle_jelly")
//     .inputItems("sugar", "#c:dusts/amethyst")
//     .outputItems("16x architects_palette:oracle_jelly")
//     .inputFluids("gtceu:construction_foam 100")
//     .EUt(8)
//     .duration(20);

//   // Warping
//   function getWarped(input, output) {
//     event.recipes.gtceu
//       .construction_core(output)
//       .inputItems(input)
//       .outputItems(`4x ${output}`)
//       .circuit(1)
//       .inputFluids("gtceu:construction_foam 100")
//       .dimension(new ResourceLocation("the_nether"))
//       .EUt(16)
//       .duration(20);
//   }

//   getWarped("architects_palette:abyssaline", "architects_palette:hadaline")
//   getWarped("architects_palette:abyssaline_pillar", "architects_palette:hadaline_pillar")
//   getWarped("architects_palette:abyssaline_tiles", "architects_palette:hadaline_tiles")
//   getWarped("architects_palette:chiseled_abyssaline_bricks", "architects_palette:chiseled_hadaline_bricks")
//   getWarped("architects_palette:abyssaline_bricks", "architects_palette:hadaline_bricks")
//   getWarped("architects_palette:abyssaline_plating", "architects_palette:hadaline_plating")
//   getWarped("architects_palette:abyssaline_lamp", "architects_palette:hadaline_lamp")

//   getWarped("architects_palette:sunstone", "architects_palette:moonstone")
//   getWarped("architects_palette:rotten_flesh_block", "architects_palette:entrails")

//   getWarped("netherite_ingot", "architects_palette:unobtanium")

//   getWarped("granite", "architects_palette:onyx")
//   getWarped("diorite", "architects_palette:nebulite")
//   getWarped("cobblestone", "architects_palette:craterstone")
//   getWarped("andesite", "architects_palette:esoterrack")
//   getWarped("stone_bricks", "architects_palette:moonshale_bricks")
//   getWarped("stone", "architects_palette:moonshale")

//   getWarped("#minecraft:logs", "architects_palette:twisted_log")
//   getWarped("#minecraft:planks", "architects_palette:twisted_planks")
//   getWarped("#minecraft:saplings", "architects_palette:twisted_sapling")
//   getWarped("#minecraft:leaves", "architects_palette:twisted_leaves")

//   getWarped("clay", "architects_palette:warpstone")
// });
