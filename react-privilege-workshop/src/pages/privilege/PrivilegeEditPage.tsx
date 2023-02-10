import { Toast } from 'primereact/toast';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { PrivilegeForm } from '../../components/PrivilegeForm';
import { PrivilegService } from '../../services/privilege.service';
import { IPrivilegCreateForm } from './PrivilegeCreatePage';
export interface IPrivilegUpdateForm {
  id: string;
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

export function PrivilegEditPage() {
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();
  const { privilegeId } = useParams();
  const [privilegeForm, setPrivilegeForm] = useState<IPrivilegUpdateForm>();

  useEffect(() => {
    if (!privilegeId) {
      return;
    }
    PrivilegService.getById(privilegeId).then((data) => {
      setPrivilegeForm(data as IPrivilegUpdateForm);
    });
  }, [privilegeId]);

  const handleSubmit = (data: IPrivilegUpdateForm | IPrivilegCreateForm) => {
    PrivilegService.update(data as IPrivilegUpdateForm)
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
      <h1>
        edit page {privilegeId}
        <Toast ref={toast} />
        {privilegeForm && (
          <PrivilegeForm initialValue={privilegeForm} onSubmit={handleSubmit} />
        )}
      </h1>
    </>
  );
}
