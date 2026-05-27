export type NotebookColor = 'carbon' | 'chestnut' | 'slate' | 'titanium';

export interface ColorOption {
  id: NotebookColor;
  name: string;
  hex: string;
  bgClass: string;
  borderClass: string;
}

export type InnerPageType = 'grid' | 'weekly' | 'blank' | 'lined';

export interface InnerPageOption {
  id: InnerPageType;
  name: string;
  description: string;
}

export type PackagingType = 'minimal' | 'standard' | 'luxury';

export interface PackagingOption {
  id: PackagingType;
  name: string;
  price: number;
  description: string;
}

export interface CustomConfig {
  color: NotebookColor;
  brandText: string;
  stampingType: 'debossed' | 'gold' | 'silver';
  innerPage: InnerPageType;
  packaging: PackagingType;
  quantity: number;
}

export interface HardcoreTest {
  id: 'needle' | 'puncture' | 'extreme_temperature' | 'short_circuit';
  name: string;
  icon: string;
  description: string;
  solidStateResult: string;
  liquidResult: string;
  isPassed: boolean;
}
