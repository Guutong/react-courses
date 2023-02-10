import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { PrivilegeForm } from '../../components/PrivilegeForm';
import { PrivilegService } from '../../services/privilege.service';

export interface IPrivilegCreateForm {
  title: string;
  image: string;
  catalogId: string;
  categoryId: string;
  startDate: string;
  endDate: string;
  typeId: string;
  point: number;
  eligibility: string[];
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

export function PrivilegCreatePage() {
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();
  const initialValue: IPrivilegCreateForm = {
    title: '',
    image: '',
    catalogId: '',
    categoryId: '',
    startDate: '',
    endDate: '',
    typeId: '',
    point: 0,
    eligibility: [],
    active: false,
    privilegeId: '',
    promotionText: '',
    discountText: '',
    shortDescription: '',
    fullDescription: '',
    brachInformation: '',
    condition: '',
    brandTitle: '',
    brandText: '',
  };

  const handleSubmit = (data: IPrivilegCreateForm) => {
    PrivilegService.create(data)
      .then(() => {
        navigate('/privilege', { replace: true });
      })
      .catch((e) => {
        toast?.current?.show({
          severity: 'error',
          summary: 'Error Message',
          detail: e.message,
          life: 3000,
        });
      });
  };
  
  return (
    <>
      <Toast ref={toast} />
      <PrivilegeForm initialValue={initialValue} onSubmit={handleSubmit} />
    </>
  );
}
