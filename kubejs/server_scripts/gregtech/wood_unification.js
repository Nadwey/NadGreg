ServerEvents.recipes((event) => {
  function woodUnification(woodType) {
    event.recipes.gtceu
      .assembler(`${woodType}_fence`)
      .inputItems(`${woodType}_planks`, "stick")
      .outputItems(`${woodType}_fence`)
      .circuit(1)
      .duration(100)
      .EUt(4);

    event.recipes.gtceu
      .assembler(`${woodType}_fence_gate`)
      .inputItems(`2x ${woodType}_planks`, "2x stick")
      .outputItems(`${woodType}_fence_gate`)
      .circuit(2)
      .duration(100)
      .EUt(4);

    event.recipes.gtceu
      .assembler(`${woodType}_stairs`)
      .inputItems(`6x ${woodType}_planks`)
      .outputItems(`4x ${woodType}_stairs`)
      .circuit(1)
      .duration(100)
      .EUt(1);
  }

  woodUnification("warped");
  woodUnification("crimson");
  woodUnification("mangrove");
  woodUnification("cherry");
});
