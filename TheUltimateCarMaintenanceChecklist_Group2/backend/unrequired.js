//file for saving anything used temporarily

//list of cars with the same values for all.
const all_vehicle_info = {
  Ford_Mustang_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Mustang_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Mustang_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Mustang_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Mustang_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Mustang_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Mustang_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Mustang_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_F150_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_1991: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Explorer_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Focus_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Focus_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Focus_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Focus_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Focus_2018: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Escape_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Fusion_2006: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Fusion_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Fusion_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Fusion_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Bronco_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Bronco_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Bronco_1996: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Bronco_2021: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Bronco_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Bronco_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Bronco_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Edge_2007: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Edge_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Edge_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Edge_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Edge_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Edge_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_1997: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Expedition_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_1983: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_2019: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Ranger_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Taurus_1986: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Taurus_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Taurus_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Taurus_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Taurus_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Taurus_2019: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Maverick_2022: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Maverick_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Maverick_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ford_Maverick_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_1983: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Camry_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Corolla_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tacoma_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tacoma_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tacoma_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tacoma_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tacoma_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tacoma_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tacoma_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tundra_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tundra_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tundra_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tundra_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tundra_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tundra_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Tundra_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_RAV4_1996: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_RAV4_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_RAV4_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_RAV4_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_RAV4_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_RAV4_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_RAV4_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Highlander_2001: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Highlander_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Highlander_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Highlander_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Highlander_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Highlander_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Highlander_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_1984: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_4Runner_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Prius_1997: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Prius_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Prius_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Prius_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Prius_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Prius_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Prius_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sienna_1998: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sienna_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sienna_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sienna_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sienna_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sienna_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sienna_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Avalon_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Avalon_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Avalon_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Avalon_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Avalon_2022: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sequoia_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sequoia_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sequoia_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sequoia_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sequoia_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sequoia_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Toyota_Sequoia_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Accord_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Civic_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_CRV_1997: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_CRV_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_CRV_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_CRV_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_CRV_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_CRV_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_CRV_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Pilot_2003: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Pilot_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Pilot_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Pilot_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Pilot_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Pilot_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Odyssey_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Odyssey_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Odyssey_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Odyssey_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Odyssey_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Odyssey_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Odyssey_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Ridgeline_2006: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Ridgeline_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Ridgeline_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Ridgeline_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Ridgeline_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Ridgeline_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Passport_1994: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Passport_1998: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Passport_2019: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Passport_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Passport_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Passport_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Passport_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Fit_2001: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Fit_2007: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Fit_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Fit_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Honda_Fit_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_1988: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Silverado_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Malibu_1982: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Malibu_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Malibu_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Malibu_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Malibu_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Malibu_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Malibu_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Equinox_2004: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Equinox_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Equinox_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Equinox_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Equinox_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Equinox_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Traverse_2009: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Traverse_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Traverse_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Traverse_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Traverse_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Traverse_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Tahoe_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Tahoe_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Tahoe_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Tahoe_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Tahoe_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Tahoe_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Tahoe_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Camaro_1982: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Camaro_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Camaro_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Camaro_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Camaro_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Camaro_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Camaro_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Impala_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Impala_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Impala_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Impala_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_1985: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Suburban_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Blazer_1989: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Blazer_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Blazer_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Blazer_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Blazer_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Blazer_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Blazer_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Spark_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Spark_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Spark_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chevrolet_Spark_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Altima_1993: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Altima_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Altima_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Altima_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Altima_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Altima_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Altima_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Maxima_1981: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Maxima_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Maxima_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Maxima_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Maxima_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Maxima_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Rogue_2007: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Rogue_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Rogue_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Rogue_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Rogue_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Rogue_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Rogue_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Frontier_1997: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Frontier_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Frontier_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Frontier_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Frontier_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Frontier_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Frontier_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_1985: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Pathfinder_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_1982: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Sentra_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Titan_2003: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Titan_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Titan_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Titan_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Titan_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Juke_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Juke_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Juke_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Juke_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Leaf_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Leaf_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Leaf_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Leaf_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Leaf_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Nissan_Leaf_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_1982: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_3Series_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_5Series_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X5_1999: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X5_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X5_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X5_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X5_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X5_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X5_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X3_2003: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X3_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X3_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X3_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X3_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X3_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_1986: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_7Series_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_4Series_2013: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_4Series_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_4Series_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_4Series_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_4Series_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_4Series_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_1986: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_M3_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_Z4_2002: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_Z4_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_Z4_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_Z4_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_Z4_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_Z4_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_Z4_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X1_2009: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X1_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X1_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X1_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X1_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  BMW_X1_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A4_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A4_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A4_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A4_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A4_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A4_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A6_1994: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A6_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A6_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A6_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A6_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A6_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A6_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A8_1988: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A8_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A8_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A8_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A8_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A8_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_A8_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q5_2008: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q5_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q5_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q5_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q5_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q5_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q7_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q7_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q7_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q7_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q7_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q7_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q3_2011: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q3_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q3_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q3_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q3_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q3_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q8_2018: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q8_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q8_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q8_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_Q8_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_TT_1998: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_TT_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_TT_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_TT_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_TT_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_S4_1991: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_S4_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_S4_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_S4_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_S4_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_S4_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_RS7_2014: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_RS7_2016: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_RS7_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_RS7_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_RS7_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Audi_RS7_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_1982: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CClass_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_1984: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_EClass_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_1981: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_SClass_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLC_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLC_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLC_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLC_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLC_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLE_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLE_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLE_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLE_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLE_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GClass_1989: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GClass_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GClass_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GClass_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GClass_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GClass_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GClass_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CLA_2013: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CLA_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CLA_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CLA_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CLA_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_CLA_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AClass_1997: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AClass_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AClass_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AClass_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AClass_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLS_2006: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLS_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLS_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLS_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLS_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_GLS_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AMGGT_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AMGGT_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AMGGT_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AMGGT_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  MercedesBenz_AMGGT_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Golf_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Passat_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Passat_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Passat_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Passat_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Passat_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Passat_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_1980: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Jetta_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Tiguan_2007: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Tiguan_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Tiguan_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Tiguan_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Tiguan_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Tiguan_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Tiguan_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Touareg_2002: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Touareg_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Touareg_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Touareg_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Touareg_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Arteon_2017: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Arteon_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Arteon_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Arteon_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_ID4_2021: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_ID4_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_ID4_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_ID4_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Atlas_2017: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Atlas_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Atlas_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Atlas_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Volkswagen_Atlas_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Elantra_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Elantra_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Elantra_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Elantra_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Elantra_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Elantra_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Elantra_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_1985: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Sonata_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Tucson_2004: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Tucson_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Tucson_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Tucson_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Tucson_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Tucson_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Tucson_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_SantaFe_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_SantaFe_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_SantaFe_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_SantaFe_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_SantaFe_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_SantaFe_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_SantaFe_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Kona_2017: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Kona_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Kona_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Kona_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Kona_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Palisade_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Palisade_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Palisade_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Palisade_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Ioniq_2016: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Ioniq_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Ioniq_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Ioniq_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Ioniq_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Accent_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Accent_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Accent_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Accent_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Hyundai_Accent_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Impreza_1992: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Impreza_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Impreza_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Impreza_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Impreza_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Impreza_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Impreza_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Outback_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Outback_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Outback_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Outback_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Outback_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Outback_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Outback_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Forester_1997: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Forester_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Forester_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Forester_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Forester_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Forester_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Forester_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Crosstrek_2012: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Crosstrek_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Crosstrek_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Crosstrek_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Crosstrek_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Crosstrek_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Legacy_1989: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Legacy_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Legacy_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Legacy_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Legacy_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Legacy_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Legacy_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_WRX_2001: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_WRX_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_WRX_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_WRX_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_WRX_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_WRX_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_WRX_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Ascent_2018: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Ascent_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Ascent_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Ascent_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_Ascent_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_BRZ_2012: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_BRZ_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_BRZ_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_BRZ_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_BRZ_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Subaru_BRZ_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_300_2004: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_300_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_300_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_300_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Pacifica_2004: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Pacifica_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Pacifica_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Pacifica_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Pacifica_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Pacifica_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Pacifica_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Voyager_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Voyager_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Voyager_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Voyager_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Aspen_2007: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Aspen_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Aspen_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Aspen_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_TownCountry_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_TownCountry_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_TownCountry_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_TownCountry_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Sebring_1995: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Sebring_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Sebring_2005: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Chrysler_Sebring_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Cherokee_1984: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Cherokee_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Cherokee_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Cherokee_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Cherokee_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Cherokee_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_GrandCherokee_1993: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_GrandCherokee_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_GrandCherokee_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_GrandCherokee_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_GrandCherokee_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_GrandCherokee_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_GrandCherokee_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_1986: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Wrangler_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Compass_2007: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Compass_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Compass_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Compass_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Compass_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Compass_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Compass_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Renegade_2014: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Renegade_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Renegade_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Gladiator_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Gladiator_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Gladiator_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Jeep_Gladiator_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Charger_1982: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Charger_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Charger_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Charger_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Charger_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Charger_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Charger_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Challenger_2008: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Challenger_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Challenger_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Challenger_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Challenger_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Ram1500_1981: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Ram1500_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Ram1500_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Ram1500_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Ram1500_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Ram1500_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Durango_1998: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Durango_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Durango_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Durango_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Durango_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Durango_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Durango_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Journey_2008: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Journey_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Journey_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Journey_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Dakota_1987: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Dakota_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Dakota_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Dakota_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Dakota_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_GrandCaravan_1984: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_GrandCaravan_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_GrandCaravan_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_GrandCaravan_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_GrandCaravan_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Viper_1992: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Viper_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Viper_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Dodge_Viper_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_1981: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_1500_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_2500_1994: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_2500_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_2500_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_2500_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_2500_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_2500_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_2500_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_3500_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_3500_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_3500_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_3500_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_3500_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_3500_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMaster_2014: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMaster_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMaster_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMaster_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMaster_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMaster_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMasterCity_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMasterCity_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_ProMasterCity_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_TRX_2021: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_TRX_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Ram_TRX_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sorento_2002: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sorento_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sorento_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sorento_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sorento_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sorento_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sorento_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Optima_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Optima_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Optima_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Optima_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Optima_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sportage_1993: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sportage_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sportage_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sportage_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sportage_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sportage_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Sportage_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Telluride_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Telluride_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Telluride_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Telluride_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Forte_2008: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Forte_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Forte_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Forte_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Forte_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Forte_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Stinger_2017: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Stinger_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Stinger_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Niro_2016: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Niro_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Niro_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Niro_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Niro_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Seltos_2019: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Seltos_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Seltos_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Seltos_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Kia_Seltos_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda3_2003: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda3_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda3_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda3_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda3_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda3_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda3_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda6_2002: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda6_2008: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda6_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda6_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda6_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-5_2012': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-5_2015': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-5_2020': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-5_2023': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-5_2024': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-5_2025': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-9_2006': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-9_2010': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-9_2015': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-9_2020': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-9_2023': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-30_2019': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-30_2020': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-30_2023': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-30_2024': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_CX-30_2025': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_MX-5Miata_1989': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_MX-5Miata_2000': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_MX-5Miata_2010': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_MX-5Miata_2020': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_MX-5Miata_2023': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_MX-5Miata_2024': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  'Mazda_MX-5Miata_2025': {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda2_2002: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda2_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda2_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda2_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  Mazda_Mazda2_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_1981: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_RangeRover_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_1989: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Discovery_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_1983: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_1990: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Defender_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Evoque_2011: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Evoque_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Evoque_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Evoque_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Evoque_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Evoque_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Velar_2017: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Velar_2020: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Velar_2023: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Velar_2024: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Velar_2025: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Freelander_1997: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Freelander_2000: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Freelander_2010: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  },
  LandRover_Freelander_2015: {
    fluids: {
      engine_oil: 5000,
      transmission_fluid: 60000,
      brake_fluid: 30000,
      coolant: 100000,
      powersteering_fluid: 50000
    },
    tires_brakes: {
      tire_pressure: 1000,
      rotate_tires: 7500,
      brake_pads: 30000,
      brake_discs: 60000
    },
    engine: {
      oil_filter: 5000,
      air_filter: 15000,
      fuel_filter: 60000,
      timing_belt: 100000,
      spark_plugs: 100000
    },
    battery_electrical: { battery: 50000, replace_headlights: 60000 },
    exterior: { wiper_blades: 12000, detailing: 10000 }
  }
}

//List of car makes, models, and years.
const vehicle_data = {
  Ford: {
    Mustang: [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    F150: [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Explorer: [1991, 1995, 2000, 2005, 2010, 2015, 2020, 2023, 2024, 2025],
    Focus: [2000, 2005, 2010, 2015, 2018],
    Escape: [2000, 2005, 2010, 2015, 2020, 2023, 2024, 2025],
    Fusion: [2006, 2010, 2015, 2020],
    Bronco: [1980, 1990, 1996, 2021, 2023, 2024, 2025],
    Edge: [2007, 2010, 2015, 2020, 2023, 2024],
    Expedition: [1997, 2000, 2005, 2010, 2015, 2020, 2023, 2024, 2025],
    Ranger: [1983, 1990, 2000, 2010, 2019, 2023, 2024, 2025],
    Taurus: [1986, 1990, 2000, 2010, 2015, 2019],
    Maverick: [2022, 2023, 2024, 2025]
  },
  Toyota: {
    Camry: [1983, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Corolla: [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Tacoma: [1995, 2000, 2010, 2020, 2023, 2024, 2025],
    Tundra: [2000, 2005, 2010, 2020, 2023, 2024, 2025],
    RAV4: [1996, 2000, 2010, 2020, 2023, 2024, 2025],
    Highlander: [2001, 2005, 2010, 2020, 2023, 2024, 2025],
    "4Runner": [1984, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Prius: [1997, 2005, 2010, 2020, 2023, 2024, 2025],
    Sienna: [1998, 2005, 2010, 2020, 2023, 2024, 2025],
    Avalon: [1995, 2000, 2010, 2020, 2022],
    Sequoia: [2000, 2005, 2010, 2020, 2023, 2024, 2025]
  },
  Honda: {
    Accord: [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Civic: [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    CRV: [1997, 2000, 2010, 2020, 2023, 2024, 2025],
    Pilot: [2003, 2010, 2020, 2023, 2024, 2025],
    Odyssey: [1995, 2000, 2010, 2020, 2023, 2024, 2025],
    Ridgeline: [2006, 2010, 2020, 2023, 2024, 2025],
    Passport: [1994, 1998, 2019, 2020, 2023, 2024, 2025],
    Fit: [2001, 2007, 2010, 2015, 2020]
  },
  Chevrolet: {
    Silverado: [1988, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Malibu: [1982, 1990, 2000, 2010, 2020, 2023, 2024],
    Equinox: [2004, 2010, 2020, 2023, 2024, 2025],
    Traverse: [2009, 2015, 2020, 2023, 2024, 2025],
    Tahoe: [1995, 2000, 2010, 2020, 2023, 2024, 2025],
    Camaro: [1982, 1990, 2000, 2010, 2020, 2023, 2024],
    Impala: [1990, 2000, 2010, 2015],
    Suburban: [1985, 1995, 2005, 2015, 2020, 2023, 2024, 2025],
    Blazer: [1989, 2000, 2010, 2020, 2023, 2024, 2025],
    Spark: [2010, 2015, 2020, 2023]
  },
  Nissan: {
    Altima: [1993, 2000, 2010, 2020, 2023, 2024, 2025],
    Maxima: [1981, 1990, 2000, 2010, 2020, 2023],
    Rogue: [2007, 2010, 2015, 2020, 2023, 2024, 2025],
    Frontier: [1997, 2000, 2010, 2020, 2023, 2024, 2025],
    Pathfinder: [1985, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Sentra: [1982, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Titan: [2003, 2010, 2020, 2023, 2024],
    Juke: [2010, 2015, 2020, 2023],
    Leaf: [2010, 2015, 2020, 2023, 2024, 2025]
  },
  BMW: {
    "3Series": [1982, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    "5Series": [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    X5: [1999, 2005, 2010, 2020, 2023, 2024, 2025],
    X3: [2003, 2010, 2020, 2023, 2024, 2025],
    "7Series": [1986, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    "4Series": [2013, 2015, 2020, 2023, 2024, 2025],
    M3: [1986, 1995, 2000, 2010, 2020, 2023, 2024, 2025],
    Z4: [2002, 2010, 2015, 2020, 2023, 2024, 2025],
    X1: [2009, 2015, 2020, 2023, 2024, 2025]
  },
  Audi: {
    A4: [1995, 2000, 2010, 2020, 2023, 2024],
    A6: [1994, 2000, 2010, 2020, 2023, 2024, 2025],
    A8: [1988, 1995, 2000, 2010, 2020, 2023, 2024],
    Q5: [2008, 2010, 2020, 2023, 2024, 2025],
    Q7: [2005, 2010, 2020, 2023, 2024, 2025],
    Q3: [2011, 2015, 2020, 2023, 2024, 2025],
    Q8: [2018, 2020, 2023, 2024, 2025],
    TT: [1998, 2000, 2010, 2020, 2023],
    S4: [1991, 2000, 2010, 2020, 2023, 2024],
    RS7: [2014, 2016, 2020, 2023, 2024, 2025]
  },
  MercedesBenz: {
    CClass: [1982, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    EClass: [1984, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    SClass: [1981, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    GLC: [2015, 2020, 2023, 2024, 2025],
    GLE: [2015, 2020, 2023, 2024, 2025],
    GClass: [1989, 2000, 2010, 2020, 2023, 2024, 2025],
    CLA: [2013, 2015, 2020, 2023, 2024, 2025],
    AClass: [1997, 2000, 2010, 2020, 2023],
    GLS: [2006, 2015, 2020, 2023, 2024, 2025],
    AMGGT: [2015, 2020, 2023, 2024, 2025]
  },
  Volkswagen: {
    Golf: [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Passat: [1980, 1990, 2000, 2010, 2020, 2023],
    Jetta: [1980, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Tiguan: [2007, 2010, 2015, 2020, 2023, 2024, 2025],
    Touareg: [2002, 2005, 2010, 2020, 2023],
    Arteon: [2017, 2020, 2023, 2024],
    ID4: [2021, 2023, 2024, 2025],
    Atlas: [2017, 2020, 2023, 2024, 2025]
  },
  Hyundai: {
    Elantra: [1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Sonata: [1985, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Tucson: [2004, 2010, 2015, 2020, 2023, 2024, 2025],
    SantaFe: [2000, 2005, 2010, 2020, 2023, 2024, 2025],
    Kona: [2017, 2020, 2023, 2024, 2025],
    Palisade: [2020, 2023, 2024, 2025],
    Ioniq: [2016, 2020, 2023, 2024, 2025],
    Accent: [1995, 2000, 2010, 2020, 2023]
  },
  Subaru: {
    Impreza: [1992, 2000, 2010, 2020, 2023, 2024, 2025],
    Outback: [1995, 2000, 2010, 2020, 2023, 2024, 2025],
    Forester: [1997, 2000, 2010, 2020, 2023, 2024, 2025],
    Crosstrek: [2012, 2015, 2020, 2023, 2024, 2025],
    Legacy: [1989, 2000, 2010, 2020, 2023, 2024, 2025],
    WRX: [2001, 2005, 2010, 2020, 2023, 2024, 2025],
    Ascent: [2018, 2020, 2023, 2024, 2025],
    BRZ: [2012, 2015, 2020, 2023, 2024, 2025]
  },
  Chrysler: {
    Pacifica: [2004, 2010, 2015, 2020, 2023, 2024, 2025],
    Voyager: [2000, 2010, 2020, 2023],
    "300": [2004, 2010, 2020, 2023],
    Aspen: [2007, 2010, 2015, 2020],
    TownCountry: [1990, 2000, 2010, 2015],
    Sebring: [1995, 2000, 2005, 2010]
  },
  Jeep: {
    Cherokee: [1984, 1990, 2000, 2010, 2020, 2023],
    GrandCherokee: [1993, 2000, 2010, 2020, 2023, 2024, 2025],
    Wrangler: [1986, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Compass: [2007, 2010, 2015, 2020, 2023, 2024, 2025],
    Renegade: [2014, 2020, 2023],
    Gladiator: [2020, 2023, 2024, 2025]
  },
  Dodge: {
    Charger: [1982, 2000, 2010, 2020, 2023, 2024, 2025],
    Challenger: [2008, 2010, 2015, 2020, 2023],
    Ram1500: [1981, 1990, 2000, 2010, 2020, 2023],
    Durango: [1998, 2000, 2010, 2020, 2023, 2024, 2025],
    Journey: [2008, 2010, 2015, 2020],
    Dakota: [1987, 1990, 2000, 2010, 2020],
    GrandCaravan: [1984, 1990, 2000, 2010, 2020],
    Viper: [1992, 2000, 2010, 2020]
  },
  Ram: {
    "1500": [1981, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    "2500": [1994, 2000, 2010, 2020, 2023, 2024, 2025],
    "3500": [2000, 2010, 2020, 2023, 2024, 2025],
    ProMaster: [2014, 2015, 2020, 2023, 2024, 2025],
    ProMasterCity: [2015, 2020, 2023],
    TRX: [2021, 2023, 2024]
  },
  Kia: {
    Sorento: [2002, 2010, 2015, 2020, 2023, 2024, 2025],
    Optima: [2000, 2010, 2015, 2020, 2023],
    Sportage: [1993, 2000, 2010, 2020, 2023, 2024, 2025],
    Telluride: [2020, 2023, 2024, 2025],
    Forte: [2008, 2010, 2015, 2020, 2023, 2024],
    Stinger: [2017, 2020, 2023],
    Niro: [2016, 2020, 2023, 2024, 2025],
    Seltos: [2019, 2020, 2023, 2024, 2025]
  },
  Mazda: {
    Mazda3: [2003, 2010, 2015, 2020, 2023, 2024, 2025],
    Mazda6: [2002, 2008, 2015, 2020, 2023],
    "CX-5": [2012, 2015, 2020, 2023, 2024, 2025],
    "CX-9": [2006, 2010, 2015, 2020, 2023],
    "CX-30": [2019, 2020, 2023, 2024, 2025],
    "MX-5Miata": [1989, 2000, 2010, 2020, 2023, 2024, 2025],
    Mazda2: [2002, 2010, 2015, 2020, 2023]
  },
  LandRover: {
    RangeRover: [1981, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Discovery: [1989, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Defender: [1983, 1990, 2000, 2010, 2020, 2023, 2024, 2025],
    Evoque: [2011, 2015, 2020, 2023, 2024, 2025],
    Velar: [2017, 2020, 2023, 2024, 2025],
    Freelander: [1997, 2000, 2010, 2015]
  }
}


//this is an automation script to correct and validate all_vehicle_info-------------
// import fetch from "node-fetch";
// import { all_vehicle_info } from "./carinfo.js";

// correctInfo();
// async function correctInfo(){
//   const AI_SuggestedChanges = {};
//   const fails = [];
//   const code_format = JSON.stringify([
//     "MAKE_MODEL_YEAR",
//     {
//       fluids: {
//         engine_oil: 5000,
//         transmission_fluid: 60000,
//         brake_fluid: 30000,
//         coolant: 100000,
//         powersteering_fluid: 50000
//       },
//       tires_brakes: {
//         tire_pressure: 1000,
//         rotate_tires: 7500,
//         brake_pads: 30000,
//         brake_discs: 60000
//       },
//       engine: {
//         oil_filter: 5000,
//         air_filter: 15000,
//         fuel_filter: 60000,
//         timing_belt: 100000,
//         spark_plugs: 100000
//       },
//       battery_electrical: { battery: 50000, replace_headlights: 60000 },
//       exterior: { wiper_blades: 12000, detailing: 10000 }
//     }
//   ])

//   const context = "I will be sending you code in this exact format, except a MAKE, MODEL, and YEAR will be provided:"
//    + code_format 
//    + " The numbers for the various car parts/concepts are estimates for how many miles it may last before a replacement, refill, inspection, or other (depending on the part/concept you're looking at) is needed. You need to send the code back in the exact same format, the only thing that will change are the bottom nested key, value pairs such as 'oil_filter: 5000,'. The provided code is an official reference, meaning that. IF you find that the values for a vehicle don't fit the matching reference's value, THEN change it to the value it should be. If you find that a value is fine (ELSE), then do not include that key, value pair. I only want the ones you change. Please be absolutely certain that you are sending a STRICT JSON string as I will be parsing your response"

   
//   for (const entry of Object.entries(all_vehicle_info)){
//     const headers = {
//       "Authorization": "Bearer ",
//       "Content-Type": "application/json"
//     };
    
//     const data = {
//       "method": "POST",
//       "headers": headers,
//       "body": JSON.stringify({
//         "model": "gpt-3.5-turbo",
//         "temperature": .5,
//         "messages": [
//           {"role": "system", "content": context},
//           {"role": "user", "content": JSON.stringify(entry)}
//         ]
//       }),
//     };
//     const response = await fetch("https://api.openai.com/v1/chat/completions", data);
//     const response_json = await response.json();

//     try{
//       const car_entry_changes = JSON.parse(response_json["choices"][0]["message"]["content"]);
//       AI_SuggestedChanges[car_entry_changes[0]] = car_entry_changes[1];
//     }catch(err){
//       console.log(err);
//       fails.push(response_json["choices"][0]["message"]["content"])
//     }
    
//   }
//   console.log("changes");
//   console.log(AI_SuggestedChanges);

//   console.log("\n\n\n Fails");
//   console.log(fails);
// }

// import { all_vehicle_info } from "./carinfo.js"

//code to fix fails after fixing jsons
// const ai_changes = {}
// const corrected_all_vehicle_info = {};

// for (const key in all_vehicle_info){
//   corrected_all_vehicle_info[key] = JSON.parse(JSON.stringify(all_vehicle_info[key]));
  
//   if (key in ai_changes){
//     for (const category in ai_changes[key]){
//       for (const part in ai_changes[key][category]){
//         corrected_all_vehicle_info[key][category][part] = ai_changes[key][category][part];
//       }
//     }
//   }
// }

// console.log('final prod');
// console.log(corrected_all_vehicle_info)





// const copy_all_vehicle_info = JSON.parse(JSON.stringify(all_vehicle_info));

// for (const make of Object.keys(all_vehicle_info)){
//   copy_all_vehicle_info[make]['service_history'] = [];
//   for (const category of Object.keys(all_vehicle_info[make])){
//     if (category !== "mileage_log" && category !== "service_history")
//     for (const part of Object.keys(all_vehicle_info[make][category])){
//       const save = copy_all_vehicle_info[make][category][part];
//       copy_all_vehicle_info[make][category][part] = [0, save];
//     }
//   }
// }
// console.dir(copy_all_vehicle_info, { depth: null, maxArrayLength: null });