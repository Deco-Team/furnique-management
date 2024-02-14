import { yupResolver } from '@hookform/resolvers/yup'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FileUpload from 'react-material-file-upload'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import InputTextForm from '~/components/form/InputTextForm'
import { EMPTY } from '~/global/constants/constants'
import { ScreenPath, StaffRoles } from '~/global/enum'
import { IStaffsRequest } from '~/global/interfaces/staffsInterface'
import { notifyError, notifySuccess } from '~/global/toastify'
import useStaffsApi from '~/hooks/api/useStaffsApi'
import { Wrapper } from '~/pages/auth/Login.styled'
import {
  ButtonWrapper,
  InformationContainer,
  ThumbnailContainer,
  TitleText
} from '~/pages/categories/addCategory/AddCategory.styled'
import { addStaffValidationSchema } from '../validation/AddStaffValidationSchema'
import { InputWrapper } from './AddStaff.styled'
import InputRadioForm from '~/components/form/InputRadioForm'
import { roleValues } from '../constants'

const AddStaff = () => {
  const navigate = useNavigate()
  const [files, setFiles] = useState<File[]>([])
  const { createStaff } = useStaffsApi()

  const defaultValues: IStaffsRequest = {
    firstName: EMPTY,
    lastName: EMPTY,
    staffCode: EMPTY,
    phone: EMPTY,
    avatar: EMPTY,
    email: EMPTY,
    role: EMPTY
  }
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IStaffsRequest>({
    defaultValues: defaultValues,
    resolver: yupResolver(addStaffValidationSchema)
  })

  const handleAddCategoryButton = async (data: IStaffsRequest) => {
    if (files.length <= 0) {
      notifyError('Cần ít nhất một ảnh')
      return
    } else {
      const formData: IStaffsRequest = {
        ...data
      }
      const response = await createStaff(formData)
      if (response) {
        notifySuccess('Thêm thành công')
        reset()
        setFiles([])
      }
    }
  }

  const handleCancelButton = () => {
    navigate(ScreenPath.STAFFS)
  }
  return (
    <form onSubmit={handleSubmit(handleAddCategoryButton)}>
      <ButtonWrapper>
        <SecondaryButton
          variant='contained'
          name='Hủy'
          color='var(--gray-light-color)'
          icon={<CloseIcon />}
          onClick={handleCancelButton}
          type='button'
        />
        <PrimaryButton name='Thêm phân loại' type='submit' variant='contained' icon={<AddIcon />} />
      </ButtonWrapper>
      <Wrapper>
        <ThumbnailContainer>
          <TitleText>Hình ảnh</TitleText>
          <FileUpload
            sx={{
              width: '350px',
              height: '180px',
              border: '1px dashed',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '.MuiButtonBase-root': {
                color: 'var(--primary-color)',
                backgroundColor: 'var(--primary-light-color)',
                '&:hover': {
                  color: 'var(--white-color)',
                  backgroundColor: 'var(--primary-color)'
                }
              },
              '.MuiButtonBase-root.MuiChip-root': {
                backgroundColor: 'white',
                '&:hover': {
                  color: 'var(--gray-color)'
                }
              },
              '.MuiButtonBase-root.MuiChip-root .MuiChip-icon': {
                color: 'var(--primary-color)'
              }
            }}
            value={files}
            onChange={setFiles}
            maxFiles={1}
            maxSize={1024 * 1024 * 8}
            accept='image/png, image/jpeg'
            title={`Kéo thả ảnh vào đây hoặc bấm thêm ảnh`}
            buttonText='Tải lên'
          />
        </ThumbnailContainer>
        <InformationContainer>
          <TitleText>Thông tin chung</TitleText>
          <InputWrapper>
            <InputTextForm
              control={control}
              name='lastName'
              label='Họ và tên đệm'
              sx={{ width: '34%', marginLeft: ' 20px' }}
              variant='outlined'
              error={errors.lastName?.message}
            />
            <InputTextForm
              control={control}
              name='firstName'
              label='Tên'
              sx={{ width: '34%', marginLeft: '20px' }}
              variant='outlined'
              error={errors.firstName?.message}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTextForm
              control={control}
              name='email'
              label='Email'
              sx={{ width: '34%', margin: '20px 0 0 20px' }}
              variant='outlined'
              error={errors.email?.message}
            />
            <InputTextForm
              control={control}
              name='phone'
              label='Số điện thoại'
              sx={{ width: '34%', margin: '20px 0 0 20px' }}
              variant='outlined'
              error={errors.phone?.message}
            />
          </InputWrapper>
          <InputRadioForm
            label='Chức vụ'
            name='role'
            options={roleValues}
            defaultValue={StaffRoles.STAFF}
            sx={{ margin: '20px 0 0 20px' }}
          />
        </InformationContainer>
      </Wrapper>
    </form>
  )
}

export default AddStaff
