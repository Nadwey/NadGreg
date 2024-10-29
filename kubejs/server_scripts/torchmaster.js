ServerEvents.recipes((event) => {
  // Mega Torch
  event.remove({ id: "torchmaster:megatorch" });
  event.shaped("torchmaster:megatorch", ["SDR", "IBD", "RIS"], {
    S: "#c:screws/iron",
    D: "#c:gems/diamond",
    R: "#c:rings/gold",
    I: "minecraft:stick",
    B: "#c:storage_blocks/coke",
  });

  // Dread Lamp
  event.remove({ id: "torchmaster:dreadlamp" });
  event.shaped("torchmaster:dreadlamp", ["PPP", "GLG", "PPP"], {
    P: "#c:plates/obsidian",
    L: "minecraft:glowstone",
    G: "#c:glass_panes",
  });

  // Feral Flare Lantern
  event.remove({ id: "torchmaster:feral_flare_lantern" });
  event.shaped("torchmaster:feral_flare_lantern", ["SPR", "INP", "RIS"], {
    S: "#c:screws/iron",
    P: "#c:plates/glowstone",
    R: "#c:rings/steel",
    I: "#c:rods/steel",
    N: "#c:small_springs/gold",
  });
});
