import { httpClient } from '../axios';
import { IPrivilegCreateForm } from '../pages/privilege/PrivilegeCreatePage';
import { IPrivilegUpdateForm } from '../pages/privilege/PrivilegeEditPage';

export interface IPrivilegeResponse {
  id: string;
  image: string;
  title: string;
  catalogId: string;
  catalogName?: string;
  categoryId: string;
  categoryName?: string;
  startDate: string;
  endDate: string;
  typeId: string;
  typeName?: string;
  point: number;
  eligibility: any[];
  active: boolean;
  privilegeId: string;
  promotionText: string;
  discountText: string;
  shortDescription: string;
  fullDescription: string;
  brachInformation: string;
  condition: string;
  brandTitle: string;
  brandText: string;
}

export class PrivilegService {
  public static async create(data: IPrivilegCreateForm): Promise<void> {
    const res = await httpClient.post(`/privileges`, data);
    return res.data;
  }

  public static async getById(id: string): Promise<IPrivilegeResponse> {
    const res = await httpClient.get<IPrivilegeResponse>(`/privileges/${id}`);
    return res.data;
  }

  public static async getList(): Promise<IPrivilegeResponse[]> {
    const res = await httpClient.get(`/privileges`);
    return res.data;
  }

  public static async update(data: IPrivilegUpdateForm): Promise<void> {
    const res = await httpClient.put(`/privileges`, data);
    return res.data;
  }
}
