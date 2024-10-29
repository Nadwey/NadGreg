ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // Printed Silicon
  greg
    .forming_press("printed_silicon_circuit")
    .inputItems("#c:plates/silicon")
    .notConsumableItem("ae2:silicon_press")
    .outputItems("ae2:printed_silicon")
    .duration(200)
    .EUt(30);

  // Printed Logic Circuit
  greg
    .forming_press("printed_logic_processor")
    .inputItems("#c:plates/gold")
    .notConsumableItem("ae2:logic_processor_press")
    .outputItems("ae2:printed_logic_processor")
    .duration(200)
    .EUt(30);

  // Printed Engineering Circuit
  greg
    .forming_press("printed_engineering_processor")
    .inputItems("#c:plates/diamond")
    .notConsumableItem("ae2:engineering_processor_press")
    .outputItems("ae2:printed_engineering_processor")
    .duration(200)
    .EUt(30);

  // Printed Calculation Circuit
  greg
    .forming_press("printed_calculation_circuit")
    .inputItems("#c:plates/certus_quartz")
    .notConsumableItem("ae2:calculation_processor_press")
    .outputItems("ae2:printed_calculation_processor")
    .duration(200)
    .EUt(30);
;
});
