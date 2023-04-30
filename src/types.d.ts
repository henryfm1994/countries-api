export interface APICountry {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  cioc?: string;
  borders?: string[];
  gini?: { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  DKK?: Aed;
  FOK?: Aed;
  PKR?: Aed;
  PLN?: Aed;
  JOD?: Aed;
  LSL?: Aed;
  ZAR?: Aed;
  EUR?: Aed;
  TWD?: Aed;
  KPW?: Aed;
  IRR?: Aed;
  IQD?: Aed;
  ARS?: Aed;
  MOP?: Aed;
  AMD?: Aed;
  KRW?: Aed;
  AUD?: Aed;
  PAB?: Aed;
  USD?: Aed;
  MNT?: Aed;
  XOF?: Aed;
  RSD?: Aed;
  ETB?: Aed;
  TTD?: Aed;
  DJF?: Aed;
  BSD?: Aed;
  CHF?: Aed;
  UAH?: Aed;
  GMD?: Aed;
  NAD?: Aed;
  UYU?: Aed;
  SBD?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  SCR?: Aed;
  THB?: Aed;
  MMK?: Aed;
  FKP?: Aed;
  BYN?: Aed;
  BWP?: Aed;
  ERN?: Aed;
  BZD?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  NGN?: Aed;
  GBP?: Aed;
  GEL?: Aed;
  ISK?: Aed;
  SOS?: Aed;
  MUR?: Aed;
  COP?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  HUF?: Aed;
  CDF?: Aed;
  LKR?: Aed;
  PEN?: Aed;
  BIF?: Aed;
  KYD?: Aed;
  INR?: Aed;
  XCD?: Aed;
  XAF?: Aed;
  LAK?: Aed;
  RWF?: Aed;
  TZS?: Aed;
  KHR?: Aed;
  ZWL?: Aed;
  NOK?: Aed;
  MDL?: Aed;
  KES?: Aed;
  PHP?: Aed;
  VES?: Aed;
  KID?: Aed;
  SYP?: Aed;
  MKD?: Aed;
  GIP?: Aed;
  MYR?: Aed;
  PGK?: Aed;
  EGP?: Aed;
  ILS?: Aed;
  JMD?: Aed;
  MXN?: Aed;
  BBD?: Aed;
  SEK?: Aed;
  SZL?: Aed;
  LYD?: Aed;
  ANG?: Aed;
  CZK?: Aed;
  GYD?: Aed;
  SLL?: Aed;
  AED?: Aed;
  ZMW?: Aed;
  PYG?: Aed;
  JEP?: Aed;
  KWD?: Aed;
  HNL?: Aed;
  SAR?: Aed;
  ALL?: Aed;
  VUV?: Aed;
  BGN?: Aed;
  AOA?: Aed;
  SSP?: Aed;
  AZN?: Aed;
  BTN?: Aed;
  AFN?: Aed;
  SHP?: Aed;
  BMD?: Aed;
  FJD?: Aed;
  SRD?: Aed;
  TVD?: Aed;
  GTQ?: Aed;
  DOP?: Aed;
  XPF?: Aed;
  TOP?: Aed;
  BRL?: Aed;
  YER?: Aed;
  IMP?: Aed;
  IDR?: Aed;
  GGP?: Aed;
  MVR?: Aed;
  CVE?: Aed;
  QAR?: Aed;
  CLP?: Aed;
  BOB?: Aed;
  LBP?: Aed;
  CAD?: Aed;
  KGS?: Aed;
  TND?: Aed;
  MGA?: Aed;
  HKD?: Aed;
  NIO?: Aed;
  UGX?: Aed;
  BHD?: Aed;
  BND?: Aed;
  SGD?: Aed;
  GHS?: Aed;
  HTG?: Aed;
  RON?: Aed;
  WST?: Aed;
  OMR?: Aed;
  SDG?: BAM;
  TJS?: Aed;
  KZT?: Aed;
  BAM?: BAM;
  VND?: Aed;
  TMT?: Aed;
  UZS?: Aed;
  RUB?: Aed;
  MWK?: Aed;
  STN?: Aed;
  TRY?: Aed;
  NPR?: Aed;
  CNY?: Aed;
  KMF?: Aed;
  JPY?: Aed;
  CRC?: Aed;
  AWG?: Aed;
  LRD?: Aed;
  MZN?: Aed;
  BDT?: Aed;
  GNF?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
