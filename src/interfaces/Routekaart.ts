// import { z } from "zod";

export interface Besparing {
  investering_euro: number
  besparing_euro_per_jaar: number
  aardgas_reductie_m3: number
  elektriciteit_reductie_kwh: number
  co2_reductie_ton: number
  matched_beschrijving: string
}

export interface Maatregel {
  code: string
  beschrijving: string
  natuurlijk_moment: boolean
  van_toepassing: number
  procent_al_uitgevoerd: number
  besparing_ingevuld: Besparing 
}
export interface Locatie {
  locatie_naam: string
  adres: string
  pc_h_t: string
  bvo_m2: number
  bouwjaar: number
  kwh_elektriciteit: number
  aardgas_equivalent_m3: number
  aardgas_m3: number
  warmte_GJ: number
  eigen_opwek_duurzame_warmte_kwh: number
  eigen_opwek_pv_panelen_kwh: number
  maatregelen: Maatregel[]
}

export interface Routekaart {
  excelnaam: string
  instelling_naam: string 
  beheerder?: string
  locaties: Locatie[]
}