import { useFormik, FormikErrors } from 'formik';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Editor, EditorTextChangeParams } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { useState, useEffect } from 'react';
import { IPrivilegCreateForm } from '../pages/privilege/PrivilegeCreatePage';
import { IPrivilegUpdateForm } from '../pages/privilege/PrivilegeEditPage';
import {
  ICatalogItem,
  ICategoryItem,
  IPrivilegeType,
  MasterDataService,
} from '../services/masterdata.service';

interface PrivilegeFormProps {
  initialValue: IPrivilegCreateForm;
  onSubmit: (data: IPrivilegCreateForm | IPrivilegUpdateForm) => void;
}

export function PrivilegeForm(props: PrivilegeFormProps) {
  const [catalogOptions, setCatalogOptions] = useState<ICatalogItem[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<ICategoryItem[]>([]);
  const [privilegeTypeList, setPrivilegeTypeList] = useState<IPrivilegeType[]>(
    []
  );

  useEffect(() => {
    MasterDataService.getCatalogList().then((data) => {
      setCatalogOptions(data);
    });
    MasterDataService.getCategoryList().then((data) => {
      setCategoryOptions(data);
    });
    MasterDataService.getPrivilegesType().then((data) => {
      setPrivilegeTypeList(data);
    });
  }, []);

  const privilegeForm = useFormik<IPrivilegCreateForm>({
    initialValues: props.initialValue,
    validate: (data: IPrivilegCreateForm) => {
      let errors: FormikErrors<IPrivilegCreateForm> = {};
      if (!data.title) {
        errors.title = 'Title is required.';
      }
      if (!data.image) {
        errors.image = 'Image is required.';
      }
      if (!data.catalogId) {
        errors.catalogId = 'Please select catalog';
      }
      if (!data.categoryId) {
        errors.categoryId = 'Please select category';
      }
      if (!data.point) {
        errors.point = 'Point is required.';
      }
      if (data.point < 0) {
        errors.point = 'Point is more than 0.';
      }
      if (!data.startDate) {
        errors.startDate = 'Please select start date';
      }
      if (!data.endDate) {
        errors.endDate = 'Please select end date';
      }
      if (!data.privilegeId) {
        errors.privilegeId = 'Privilege ID is required.';
      }
      if (!data.promotionText) {
        errors.promotionText = 'Promotion Text is required.';
      }
      if (!data.discountText) {
        errors.discountText = 'Discount Text is required.';
      }
      if (!data.shortDescription) {
        errors.shortDescription = 'Short Description is required.';
      }
      if (!data.fullDescription) {
        errors.fullDescription = 'Full Description is required.';
      }
      if (!data.brachInformation || data.brachInformation.trim().length === 0) {
        errors.brachInformation = 'Branch Information is required.';
      }
      if (!data.condition || data.condition.trim().length === 0) {
        errors.condition = 'Condition is required.';
      }

      console.log(errors);
      return errors;
    },
    onSubmit: (data: IPrivilegCreateForm | IPrivilegUpdateForm) => {
      props.onSubmit(data);
    },
  });

  const isFormFieldValid = (name: string) => {
    const formTouched: any = privilegeForm.touched;
    const formErrors: any = privilegeForm.errors;
    return !!(formTouched[name] && formErrors[name]);
  };
  const getFormErrorMessage = (name: string) => {
    const formErrors: any = privilegeForm.errors;
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formErrors[name]}</small>
      )
    );
  };

  const eligibilities = [
    { name: 'AAA', code: '1' },
    { name: 'BBB', code: '2' },
    { name: 'CCC', code: '3' },
    { name: 'DDD', code: '4' },
    { name: 'EEE', code: '5' },
  ];

  return (
    <>
      <div className="surface-card p-4">
        <form
          onSubmit={privilegeForm.handleSubmit}
          className="grid formgrid p-fluid"
        >
          <div className="mb-4 md:col-6">
            <div className="field">
              <label htmlFor="title" className="font-medium text-900">
                Title*
              </label>
              <InputText
                name="title"
                value={privilegeForm.values.title}
                onChange={privilegeForm.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('title'),
                })}
              />
              <small
                id="title-help"
                className={classNames({
                  'p-error block': isFormFieldValid('title'),
                })}
              >
                {getFormErrorMessage('title')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="catalog" className="font-medium text-900">
                Catalog*
              </label>
              <Dropdown
                value={privilegeForm.values.catalogId}
                options={catalogOptions}
                onChange={({ value }) =>
                  privilegeForm.setFieldValue('catalogId', value)
                }
                optionLabel="catalog"
                optionValue="id"
                placeholder="Select a catalog"
                className={classNames({
                  'p-invalid': isFormFieldValid('catalogId'),
                })}
              />
              <small
                id="catalogId-help"
                className={classNames({
                  'p-error block': isFormFieldValid('catalogId'),
                })}
              >
                {getFormErrorMessage('catalogId')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="category" className="font-medium text-900">
                Category*
              </label>
              <Dropdown
                inputId="categoryId"
                options={categoryOptions}
                value={privilegeForm.values.categoryId}
                onChange={({ value }) =>
                  privilegeForm.setFieldValue('categoryId', value)
                }
                optionLabel="category"
                optionValue="id"
                filter
                filterBy="category"
                placeholder="Select a category"
                className={classNames({
                  'p-invalid': isFormFieldValid('categoryId'),
                })}
              />
              <small
                id="categoryId-help"
                className={classNames({
                  'p-error block': isFormFieldValid('categoryId'),
                })}
              >
                {getFormErrorMessage('categoryId')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="image" className="font-medium text-900">
                ImageUrl*
              </label>
              <InputText
                id="image"
                type="text"
                name="image"
                value={privilegeForm.values.image}
                onChange={privilegeForm.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('image'),
                })}
              />
              <small
                id="title-help"
                className={classNames({
                  'p-error block': isFormFieldValid('image'),
                })}
              >
                {getFormErrorMessage('image')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="title" className="font-medium text-900">
                Start Date*
              </label>
              <Calendar
                id="startDate"
                name="startDate"
                value={new Date(privilegeForm.values.startDate)}
                onChange={privilegeForm.handleChange}
                dateFormat="dd/mm/yy"
                mask="99/99/9999"
                showIcon
              />
              <small
                id="startDate-help"
                className={classNames({
                  'p-error block': isFormFieldValid('startDate'),
                })}
              >
                {getFormErrorMessage('startDate')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="title" className="font-medium text-900">
                End Date*
              </label>
              <Calendar
                id="endDate"
                name="endDate"
                value={new Date(privilegeForm.values.endDate)}
                onChange={privilegeForm.handleChange}
                dateFormat="dd/mm/yy"
                mask="99/99/9999"
                showIcon
              />
              <small
                id="endDate-help"
                className={classNames({
                  'p-error block': isFormFieldValid('endDate'),
                })}
              >
                {getFormErrorMessage('endDate')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="type" className="font-medium text-900">
                Type
              </label>
              <Dropdown
                inputId="typeId"
                options={privilegeTypeList}
                value={privilegeForm.values.typeId}
                onChange={({ value }) =>
                  privilegeForm.setFieldValue('typeId', value)
                }
                optionLabel="type"
                optionValue="id"
                filter
                filterBy="type"
                placeholder="Select a type"
              />
            </div>
            <div className="field">
              <label htmlFor="point" className="font-medium text-900">
                Point*
              </label>
              <InputNumber
                inputId="point"
                name="point"
                value={privilegeForm.values.point}
                onValueChange={privilegeForm.handleChange}
                mode="decimal"
                min={0}
                max={999999}
                className={classNames({
                  'p-invalid': isFormFieldValid('point'),
                })}
              />
              <small
                id="point-help"
                className={classNames({
                  'p-error block': isFormFieldValid('point'),
                })}
              >
                {getFormErrorMessage('point')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="eligibility" className="font-medium text-900">
                Eligibility
              </label>
              <MultiSelect
                value={privilegeForm.values.eligibility}
                options={eligibilities}
                onChange={({ value }) => {
                  privilegeForm.setFieldValue('eligibility', value);
                }}
                optionLabel="name"
                optionValue="name"
                placeholder="Select eligibilities"
                filter
                className="multiselect-custom"
                selectedItemTemplate={(option) => {
                  if (option) {
                    return <Tag className="mr-2" value={option} />;
                  }
                  return 'Select eligibilities';
                }}
                panelFooterTemplate={() => {
                  const selectedItems = privilegeForm.values.eligibility;
                  const length = selectedItems ? selectedItems.length : 0;
                  return (
                    <div className="py-2 px-3">
                      <b>{length}</b> item{length > 1 ? 's' : ''} selected.
                    </div>
                  );
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="active" className="font-medium text-900">
                Active
              </label>
              <br />
              <InputSwitch
                inputId="active"
                name="active"
                checked={privilegeForm.values.active}
                onChange={privilegeForm.handleChange}
              />
            </div>
          </div>

          <div className="mb-4 md:col-6">
            <div className="field">
              <label htmlFor="privilegeId" className="font-medium text-900">
                Privilege ID*
              </label>
              <InputText
                id="privilegeId"
                type="text"
                name="privilegeId"
                value={privilegeForm.values.privilegeId}
                onChange={privilegeForm.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('privilegeId'),
                })}
              />
              <small
                id="privilegeId-help"
                className={classNames({
                  'p-error block': isFormFieldValid('privilegeId'),
                })}
              >
                {getFormErrorMessage('privilegeId')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="promotionText" className="font-medium text-900">
                Promotion Text*
              </label>
              <InputTextarea
                rows={3}
                autoResize
                id="promotionText"
                name="promotionText"
                value={privilegeForm.values.promotionText}
                onChange={privilegeForm.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('promotionText'),
                })}
              />
              <small
                id="promotionText-help"
                className={classNames({
                  'p-error block': isFormFieldValid('promotionText'),
                })}
              >
                {getFormErrorMessage('promotionText')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="discountText" className="font-medium text-900">
                Discount Text*
              </label>
              <InputTextarea
                rows={3}
                autoResize
                id="discountText"
                name="discountText"
                value={privilegeForm.values.discountText}
                onChange={privilegeForm.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('discountText'),
                })}
              />
              <small
                id="discountText-help"
                className={classNames({
                  'p-error block': isFormFieldValid('discountText'),
                })}
              >
                {getFormErrorMessage('discountText')}
              </small>
            </div>
            <div className="field">
              <label
                htmlFor="shortDescription"
                className="font-medium text-900"
              >
                Short Description*
              </label>
              <InputTextarea
                rows={3}
                autoResize
                id="shortDescription"
                name="shortDescription"
                value={privilegeForm.values.shortDescription}
                onChange={privilegeForm.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('shortDescription'),
                })}
              />
              <small
                id="shortDescription-help"
                className={classNames({
                  'p-error block': isFormFieldValid('shortDescription'),
                })}
              >
                {getFormErrorMessage('shortDescription')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="fullDescription" className="font-medium text-900">
                Full Description*
              </label>
              <InputTextarea
                rows={5}
                autoResize
                id="fullDescription"
                name="fullDescription"
                value={privilegeForm.values.fullDescription}
                onChange={privilegeForm.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('fullDescription'),
                })}
              />
              <small
                id="fullDescription-help"
                className={classNames({
                  'p-error block': isFormFieldValid('fullDescription'),
                })}
              >
                {getFormErrorMessage('fullDescription')}
              </small>
            </div>

            <div className="field">
              <label
                htmlFor="brachInformation"
                className="font-medium text-900"
              >
                Branch Information*
              </label>
              <Editor
                style={{ height: '150px' }}
                value={privilegeForm.values.brachInformation}
                name="brachInformation"
                onChange={privilegeForm.handleChange}
                onTextChange={(e: EditorTextChangeParams) => {
                  privilegeForm.setFieldValue('brachInformation', e.htmlValue);
                }}
                className={classNames({
                  'p-invalid': isFormFieldValid('brachInformation'),
                })}
              />
              <small
                id="brachInformation-help"
                className={classNames({
                  'p-error block': isFormFieldValid('brachInformation'),
                })}
              >
                {getFormErrorMessage('brachInformation')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="condition" className="font-medium text-900">
                Condition*
              </label>
              <Editor
                name="condition"
                style={{ height: '150px' }}
                value={privilegeForm.values.condition}
                onChange={privilegeForm.handleChange}
                onTextChange={(e: EditorTextChangeParams) => {
                  privilegeForm.setFieldValue('condition', e.htmlValue);
                }}
                className={classNames({
                  'p-invalid': isFormFieldValid('condition'),
                })}
              />
              <small
                id="condition-help"
                className={classNames({
                  'p-error block': isFormFieldValid('condition'),
                })}
              >
                {getFormErrorMessage('condition')}
              </small>
            </div>
            <div className="field">
              <label htmlFor="brandTitle" className="font-medium text-900">
                Brand Title
              </label>
              <InputText
                id="brandTitle"
                type="text"
                name="brandTitle"
                value={privilegeForm.values.brandTitle}
                onChange={privilegeForm.handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="brandText" className="font-medium text-900">
                Brand Text
              </label>
              <InputText
                id="brandText"
                type="text"
                name="brandText"
                value={privilegeForm.values.brandText}
                onChange={privilegeForm.handleChange}
              />
            </div>
          </div>
          <Button label="save" type="submit" />
        </form>
      </div>
    </>
  );
}
