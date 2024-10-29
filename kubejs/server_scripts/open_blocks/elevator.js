ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  const dyes = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
  ];
  event.remove({ mod: "elevatorid" });
  dyes.forEach((dyes) => {
    greg
      .chemical_bath(`${dyes}_elevator`)
      .inputItems("#elevatorid:elevators")
      .inputFluids(`gtceu:${dyes}_dye 18"`)
      .outputItems(`elevatorid:elevator_${dyes}`)
      .duration(20)
      .EUt(7);
  });
  greg
    .chemical_bath("elevator_washing")
    .inputItems("#elevatorid:elevators")
    .inputFluids("gtceu:chlorine 50")
    .outputItems("elevatorid:elevator_gray")
    .duration(400)
    .EUt(2);

  event.shaped("elevatorid:elevator_gray", ["PPP", "GFG", "PPP"], {
    P: "#c:plates/steel",
    G: "#c:small_gears/steel",
    F: "#c:frames/steel",
  });
});
