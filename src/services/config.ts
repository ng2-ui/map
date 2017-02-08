import { OpaqueToken } from '@angular/core';

export const NG_MAP_CONFIG_TOKEN = new OpaqueToken('NG_MAP_CONFIG_TOKEN');
export interface ConfigOption {
  apiUrl?: string;
}
