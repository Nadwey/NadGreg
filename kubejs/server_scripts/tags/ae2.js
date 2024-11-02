ServerEvents.tags("item", (event) => {
  event.remove("c:dusts/ender_pearl", "ae2:ender_dust");
  event.remove("c:dusts/certus_quartz", "ae2:certus_quartz_dust");
  event.remove("c:dusts/fluix", "ae2:fluix_dust");
  event.remove("forge:silicon", "ae2:silicon");

  event.add("forge:silicon", "gtceu:silicon_plate");
});
