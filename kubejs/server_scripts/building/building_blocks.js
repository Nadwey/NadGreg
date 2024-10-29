ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .mixer("skystone_dust")
    .inputItems("gtceu:stone_dust", "#c:dusts/certus_quartz")
    .outputItems("2x ae2:sky_dust")
    .circuit(1)
    .EUt(2)
    .duration(20);


  event.recipes.gtceu
    .construction_core("skystone_dust")
    .inputItems("gtceu:stone_dust", "#c:dusts/certus_quartz")
    .outputItems("8x ae2:sky_dust")
    .inputFluids("gtceu:construction_foam 100")
    .circuit(1)
    .EUt(2)
    .duration(20);
})