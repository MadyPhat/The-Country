export type Countries = Country[];

export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName{
  [key: string]: Name
}

export interface Tkl {
  official: string;
  common: string;
}

export type Currencies = {
  [key in currencyKey]: Currency;
};
export type currencyKey =
  | 'XAF'
  | 'QAR'
  | 'DOP'
  | 'JPY'
  | 'XOF'
  | 'NOK'
  | 'IQD'
  | 'MWK'
  | 'GEL'
  | 'USD'
  | 'GNF'
  | 'EUR'
  | 'VND'
  | 'CDF'
  | 'IDR'
  | 'MVR'
  | 'XPF'
  | 'MOP'
  | 'MUR'
  | 'RSD'
  | 'EGP'
  | 'NAD'
  | 'ZAR'
  | 'TJS'
  | 'ISK'
  | 'HUF'
  | 'CHF'
  | 'SGD'
  | 'UGX'
  | 'BZD'
  | 'KMF'
  | 'NZD'
  | 'BDT'
  | 'ETB'
  | 'KRW'
  | 'ANG'
  | 'SAR'
  | 'PKR'
  | 'BMD'
  | 'AOA'
  | 'SCR'
  | 'GHS'
  | 'XCD'
  | 'AUD'
  | 'LSL'
  | 'CLP'
  | 'ILS'
  | 'JOD'
  | 'JMD'
  | 'KID'
  | 'GBP'
  | 'SHP'
  | 'LAK'
  | 'CKD'
  | 'NIO'
  | 'UYU'
  | 'LYD'
  | 'AFN'
  | 'HTG'
  | 'IMP'
  | 'BHD'
  | 'BIF'
  | 'TOP'
  | 'BSD'
  | 'THB'
  | 'DKK'
  | 'FOK'
  | 'WST'
  | 'PAB'
  | 'VES'
  | 'PLN'
  | 'SZL'
  | 'BYN'
  | 'KYD'
  | 'KPW'
  | 'RUB'
  | 'MMK'
  | 'COP'
  | 'CNY'
  | 'CRC'
  | 'CAD'
  | 'TZS'
  | 'MNT'
  | 'TWD'
  | 'INR'
  | 'OMR'
  | 'SDG'
  | 'SEK'
  | 'PEN'
  | 'TTD'
  | 'ZMW'
  | 'PGK'
  | 'LBP'
  | 'AMD'
  | 'GYD'
  | 'KGS'
  | 'JEP'
  | 'ZWL'
  | 'KHR'
  | 'RON'
  | 'BOB'
  | 'VUV'
  | 'PHP'
  | 'TRY'
  | 'ERN'
  | 'CUC'
  | 'CUP'
  | 'IRR'
  | 'BAM'
  | 'UAH'
  | 'SBD'
  | 'SRD'
  | 'MKD'
  | 'HKD'
  | 'TND'
  | 'UZS'
  | 'BWP'
  | 'SSP'
  | 'AED'
  | 'AWG'
  | 'GIP'
  | 'CZK'
  | 'KES'
  | 'GTQ'
  | 'MAD'
  | 'MXN'
  | 'AZN'
  | 'ARS'
  | 'BTN'
  | 'BND'
  | 'STN'
  | 'BBD'
  | 'BGN'
  | 'TMT'
  | 'KZT'
  | 'FKP'
  | 'FJD'
  | 'DJF'
  | 'MRU'
  | 'GGP'
  | 'MDL'
  | 'MZN'
  | 'BRL'
  | 'CVE'
  | 'ALL'
  | 'NGN'
  | 'GMD'
  | 'SOS'
  | 'YER'
  | 'MYR'
  | 'MGA'
  | 'DZD'
  | ' PYG'
  | 'LKR'
  | 'KWD'
  | 'SLL'
  | 'RWF'
  | 'SYP'
  | 'HNL'
  | 'TVD'
  | 'NPR'
  | 'LRD';

export interface Currency {
  name: string;
  symbol: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Languages {
  fra?: string;
  ara?: string;
  spa?: string;
  jpn?: string;
  nor?: string;
  arc?: string;
  ckb?: string;
  eng?: string;
  nya?: string;
  kat?: string;
  ita?: string;
  vie?: string;
  est?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  swa?: string;
  ind?: string;
  div?: string;
  por?: string;
  zho?: string;
  mfe?: string;
  srp?: string;
  tet?: string;
  afr?: string;
  deu?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  tsn?: string;
  rus?: string;
  tgk?: string;
  isl?: string;
  hun?: string;
  msa?: string;
  tam?: string;
  bjz?: string;
  zdj?: string;
  mri?: string;
  nzs?: string;
  ben?: string;
  amh?: string;
  kor?: string;
  nld?: string;
  pap?: string;
  urd?: string;
  crs?: string;
  sot?: string;
  cat?: string;
  jam?: string;
  eus?: string;
  glc?: string;
  gil?: string;
  cha?: string;
  lao?: string;
  rar?: string;
  pih?: string;
  heb?: string;
  prs?: string;
  pus?: string;
  tuk?: string;
  hat?: string;
  glv?: string;
  mah?: string;
  run?: string;
  lat?: string;
  ell?: string;
  ton?: string;
  tha?: string;
  slv?: string;
  dan?: string;
  fao?: string;
  ltz?: string;
  smo?: string;
  gsw?: string;
  roh?: string;
  pol?: string;
  ssw?: string;
  bel?: string;
  mya?: string;
  mon?: string;
  hin?: string;
  swe?: string;
  aym?: string;
  que?: string;
  hmo?: string;
  tpi?: string;
  kal?: string;
  cnr?: string;
  hye?: string;
  kir?: string;
  nrf?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  toi?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zib?: string;
  khm?: string;
  ron?: string;
  grn?: string;
  bis?: string;
  fil?: string;
  tur?: string;
  pov?: string;
  lit?: string;
  slk?: string;
  tir?: string;
  fas?: string;
  bos?: string;
  hrv?: string;
  fin?: string;
  ukr?: string;
  mkd?: string;
  uzb?: string;
  ces?: string;
  mlt?: string;
  ber?: string;
  aze?: string;
  dzo?: string;
  nau?: string;
  sqi?: string;
  niu?: string;
  pau?: string;
  som?: string;
  mlg?: string;
  mey?: string;
  gle?: string;
  sin?: string;
  nbl?: string;
  nso?: string;
  zul?: string;
  cal?: string;
  kin?: string;
  tvl?: string;
  nep?: string;
  de?: string;
  nfr?: string;
  sag?: string;
  fij?: string;
  hif?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  lav?: string;
  kaz?: string;
  bul?: string;
  tkl?: string;
}

export type Translations = {
  [key in TranslationKey]: Translation;
};

export type TranslationKey =
  | 'ara'
  | 'bre'
  | 'ces'
  | 'cym'
  | 'deu'
  | 'est'
  | 'fin'
  | 'fra'
  | 'hrv'
  | 'hun'
  | 'ita'
  | 'jpn'
  | 'kor'
  | 'nld'
  | 'per'
  | 'pol'
  | 'por'
  | 'rus'
  | 'slk'
  | 'spa'
  | 'srp'
  | 'swe'
  | 'tur'
  | 'urd'
  | 'zho';

export interface Translation {
  official: string;
  common: string;
}

export interface Demonyms {
  eng: Eng2;
  fra?: Fra3;
}

export interface Eng2 {
  f: string;
  m: string;
}

export interface Fra3 {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Gini {
  '2017'?: number;
  '2019'?: number;
  '2013'?: number;
  '2015'?: number;
  '2012'?: number;
  '2016'?: number;
  '2011'?: number;
  '2018'?: number;
  '2014'?: number;
  '1999'?: number;
  '2009'?: number;
  '2004'?: number;
  '2006'?: number;
  '1992'?: number;
  '1998'?: number;
  '2010'?: number;
  '2003'?: number;
  '2005'?: number;
  '2008'?: number;
}

export interface Car {
  signs?: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface PostalCode {
  format: string;
  regex?: string;
}
