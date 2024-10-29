ServerEvents.recipes((event) => {
  // Upgrade Template
  event.shaped("storagedrawers:upgrade_template", ["SPS", "SWS", " d "], {
    S: "#c:screws/iron",
    P: "gtceu:lv_electric_piston",
    W: "#minecraft:planks",
    d: "#c:tools/screwdrivers",
  });
  event.recipes.gtceu
    .assembler("upgrade_template")
    .inputItems(
      "2x #c:screws/iron",
      "gtceu:lv_electric_piston",
      "#minecraft:planks"
    )
    .outputItems("storagedrawers:upgrade_template")
    .duration(60)
    .EUt(24);

  // Upgrade 1
  event.shaped("storagedrawers:obsidian_storage_upgrade", ["PTP"], {
    P: "#c:plates/obsidian",
    T: "storagedrawers:upgrade_template",
  });

  // Upgrade 2
  event.shaped("storagedrawers:iron_storage_upgrade", ["S S", "PTP", "S S"], {
    S: "#c:rods/iron",
    P: "#c:plates/iron",
    T: "storagedrawers:upgrade_template",
  });

  // Upgrade 3
  event.shaped("storagedrawers:gold_storage_upgrade", ["S S", "PTP", "S S"], {
    S: "#c:rods/gold",
    P: "#c:plates/rose_gold",
    T: "storagedrawers:upgrade_template",
  });

  // Upgrade 4
  event.shaped(
    "storagedrawers:diamond_storage_upgrade",
    ["S S", "PTP", "S S"],
    {
      S: "#c:rods/stainless_steel",
      P: "#c:plates/diamond",
      T: "storagedrawers:upgrade_template",
    }
  );

  // Upgrade 5
  event.shaped(
    "storagedrawers:emerald_storage_upgrade",
    ["S S", "PTP", "S S"],
    {
      S: "#c:rods/titanium",
      P: "#c:plates/emerald",
      T: "storagedrawers:upgrade_template",
    }
  );
  // Upgrade 5 2
  event.shaped(
    "storagedrawers:emerald_storage_upgrade",
    ["S S", "PTP", "S S"],
    {
      S: "#c:rods/titanium",
      P: "#c:plates/olivine",
      T: "storagedrawers:upgrade_template",
    }
  );

  // Storage Downgrade
  event.shaped("storagedrawers:one_stack_upgrade", ["PTP"], {
    P: "flint",
    T: "storagedrawers:upgrade_template",
  });

  // Void Upgrade
  event.shaped("storagedrawers:void_upgrade", ["PPP", "PTP", "PPP"], {
    P: "#c:plates/obsidian",
    T: "storagedrawers:upgrade_template",
  });

  // Drawer Key
  event.shaped("storagedrawers:drawer_key", [" BP", "TPP", "Gs "], {
    B: "#c:bolts/gold",
    T: "storagedrawers:upgrade_template",
    P: "#c:plates/steel",
    G: "#c:plates/gold",
    s: "#c:tools/saws",
  });
});
