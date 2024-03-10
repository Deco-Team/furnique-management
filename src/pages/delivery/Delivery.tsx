import DeliveryTable from './table/DeliveryTable'
import CreateDeliveryModal from './modal/CreateDeliveryModal'
import useAuth from '~/hooks/useAuth'
import { UserRole } from '~/global/enum'

const Delivery = () => {
  const { user } = useAuth()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {user?.role === UserRole.ADMIN || user?.role === UserRole.STAFF ? <CreateDeliveryModal /> : null}
      <DeliveryTable />
    </div>
  )
}

export default Delivery
