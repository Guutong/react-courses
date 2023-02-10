import { httpClient } from '../axios';
export interface ICatalogItem {
  id: string;
  catalog: string;
}
export interface ICategoryItem {
  id: string;
  category: string;
}

export interface IPrivilegeType {
  id: string;
  type: string;
}

export class MasterDataService {
  public static async getCatalogList(): Promise<ICatalogItem[]> {
    const res = await httpClient.get<ICatalogItem[]>(`/catalogs`);
    return res.data;
  }
  public static async getCategoryList(): Promise<ICategoryItem[]> {
    const res = await httpClient.get<ICategoryItem[]>(`/categories`);
    return res.data;
  }
  public static async getPrivilegesType(): Promise<IPrivilegeType[]> {
    const res = await httpClient.get<IPrivilegeType[]>(`/privileges/type`);
    return res.data;
  }
}
