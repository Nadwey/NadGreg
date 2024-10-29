ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  event.remove({ mod: "storagedrawers" });
  const woodTypes = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "warped",
    "crimson",
  ];
  woodTypes.forEach((woodType) => {
    // Type 1
    event.shaped(
      `storagedrawers:${woodType}_full_drawers_1`,
      ["PPP", "sCr", "PPP"],
      {
        P: `${woodType}_planks`,
        s: "#c:tools/saws",
        C: "#c:chests/wooden",
        r: "#c:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`storagedrawers:${woodType}_full_drawers_1`)
      .inputItems(`6x minecraft:${woodType}_planks`, "#c:chests/wooden")
      .outputItems(`storagedrawers:${woodType}_full_drawers_1`)
      .circuit(9)
      .duration(100)
      .EUt(16);
    // Type 2
    event.shaped(
      `storagedrawers:${woodType}_full_drawers_2`,
      ["PPP", "rCs", "PPP"],
      {
        P: `${woodType}_planks`,
        s: "#c:tools/saws",
        C: "#c:chests/wooden",
        r: "#c:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`storagedrawers:${woodType}_full_drawers_2`)
      .inputItems(`6x minecraft:${woodType}_planks`, "#c:chests/wooden")
      .outputItems(`storagedrawers:${woodType}_full_drawers_2`)
      .circuit(10)
      .duration(100)
      .EUt(16);
    // Type 4
    event.shaped(
      `storagedrawers:${woodType}_full_drawers_4`,
      ["PsP", "PCP", "PrP"],
      {
        P: `${woodType}_planks`,
        s: "#c:tools/saws",
        C: "#c:chests/wooden",
        r: "#c:tools/mallets",
      }
    );
    greg
      .assembler(`storagedrawers:${woodType}_full_drawers_4`)
      .inputItems(`6x minecraft:${woodType}_planks`, "#c:chests/wooden")
      .outputItems(`storagedrawers:${woodType}_full_drawers_4`)
      .circuit(11)
      .duration(100)
      .EUt(16);

    // Half 1
    event.shaped(
      `storagedrawers:${woodType}_half_drawers_1`,
      ["PPP", "sCr", "PPP"],
      {
        P: `${woodType}_slab`,
        s: "#c:tools/saws",
        C: "#c:chests/wooden",
        r: "#c:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`storagedrawers:${woodType}_half_drawers_1`)
      .inputItems(`6x minecraft:${woodType}_slab`, "#c:chests/wooden")
      .outputItems(`storagedrawers:${woodType}_half_drawers_1`)
      .circuit(9)
      .duration(100)
      .EUt(16);
    // Half 2
    event.shaped(
      `storagedrawers:${woodType}_half_drawers_2`,
      ["PPP", "rCs", "PPP"],
      {
        P: `${woodType}_slab`,
        s: "#c:tools/saws",
        C: "#c:chests/wooden",
        r: "#c:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`storagedrawers:${woodType}_half_drawers_2`)
      .inputItems(`6x minecraft:${woodType}_slab`, "#c:chests/wooden")
      .outputItems(`storagedrawers:${woodType}_half_drawers_2`)
      .circuit(10)
      .duration(100)
      .EUt(16);
    // Half 4
    event.shaped(
      `storagedrawers:${woodType}_half_drawers_4`,
      ["PsP", "PCP", "PrP"],
      {
        P: `${woodType}_slab`,
        s: "#c:tools/saws",
        C: "#c:chests/wooden",
        r: "#c:tools/mallets",
      }
    );
    greg
      .assembler(`storagedrawers:${woodType}_half_drawers_4`)
      .inputItems(`6x minecraft:${woodType}_slab`, "#c:chests/wooden")
      .outputItems(`storagedrawers:${woodType}_half_drawers_4`)
      .circuit(11)
      .duration(100)
      .EUt(16);
    // Trim
    event.shaped(
      `storagedrawers:${woodType}_trim`,
      ["PPP", "PsP", "PPP"],
      {
        P: `${woodType}_slab`,
        s: "#c:tools/saws"
      }
    )
  });

  // Controller
  event.remove({ output: "storagedrawers:controller" });
  event.shaped("storagedrawers:controller", ["PCP", "KDK", "OPO"], {
    P: "#c:plates/diamond",
    C: "#gtceu:circuits/lv",
    K: "gtceu:red_alloy_single_wire",
    D: "#storagedrawers:drawers",
    O: "#c:plates/obsidian",
  });
  // Controller Extension
  event.remove({ output: "storagedrawers:controller_io" });
  event.shaped("storagedrawers:controller_io", ["OPO", "KDK", "PCP"], {
    P: "#c:plates/diamond",
    C: "#gtceu:circuits/lv",
    K: "gtceu:red_alloy_single_wire",
    D: "#storagedrawers:drawers",
    O: "#c:plates/obsidian",
  });
});
