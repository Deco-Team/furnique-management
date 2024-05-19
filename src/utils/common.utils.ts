import { SxProps } from '@mui/material'

export function cloudinaryURLConvert(publicId: string, is3D: boolean = false) {
  return is3D
    ? `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}.glb`.trim()
    : `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}.jpg`.trim()
}

export const modalStyle: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}
