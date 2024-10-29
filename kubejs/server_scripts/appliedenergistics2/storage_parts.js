ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // 1k storage
  event.remove({ output: "ae2:cell_component_1k" });
  greg
    .assembler("gtceu:1k_component")
    .inputItems(
      "gtceu:cpu_chip",
      "#c:plates/certus_quartz",
      "#gtceu:circuits/lv"
    )
    .outputItems("ae2:cell_component_1k")
    .duration(200)
    .EUt(30);
  greg
    .assembler("gtceu:1k_component_expensive")
    .inputItems(
      "16x #gtceu:resistors",
      "#c:plates/certus_quartz",
      "2x #gtceu:circuits/lv"
    )
    .inputFluids("gtceu:red_alloy 288")
    .outputItems("ae2:cell_component_1k")
    .duration(200)
    .EUt(30);

  // 4k storage
  event.remove({ output: "ae2:cell_component_4k" });
  greg
    .assembler("gtceu:4k_component")
    .inputItems(
      "gtceu:ram_chip",
      "3x ae2:cell_component_1k",
      "#gtceu:circuits/mv"
    )
    .outputItems("ae2:cell_component_4k")
    .duration(200)
    .EUt(30);

  // 16k storage
  event.remove({ output: "ae2:cell_component_16k" });
  greg
    .assembler("gtceu:16k_component")
    .inputItems(
      "gtceu:ulpic_chip",
      "3x ae2:cell_component_4k",
      "#gtceu:circuits/hv"
    )
    .outputItems("ae2:cell_component_16k")
    .duration(200)
    .EUt(120);

  // 64k storage
  event.remove({ output: "ae2:cell_component_64k" });
  greg
    .assembler("gtceu:64k_component")
    .inputItems(
      "gtceu:lpic_chip",
      "3x ae2:cell_component_16k",
      "#gtceu:circuits/ev"
    )
    .outputItems("ae2:cell_component_64k")
    .duration(200)
    .EUt(480);

  // 256k storage
  event.remove({ output: "ae2:cell_component_256k" });
  greg
    .assembler("gtceu:256k_component")
    .inputItems(
      "gtceu:qbit_cpu_chip",
      "3x ae2:cell_component_64k",
      "#gtceu:circuits/iv"
    )
    .outputItems("ae2:cell_component_256k")
    .duration(200)
    .EUt(1920);
});
