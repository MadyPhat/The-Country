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
  [key: string]: Currency;
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
  [key: string]: string;
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
