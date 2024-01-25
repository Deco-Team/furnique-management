import { ISidebarProps } from '~/global/interface'
import OptionList from './OptionList'
import { SideBarWrapper, Wrapper } from './Sidebar.styled'

const Sidebar = ({ mainContainerRef }: ISidebarProps) => {
  return (
    <Wrapper>
      <SideBarWrapper>
        <OptionList prop={mainContainerRef} />
      </SideBarWrapper>
    </Wrapper>
  )
}

export default Sidebar
