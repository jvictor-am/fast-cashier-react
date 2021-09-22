// third party imports
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  .header-fc {
    h2 {
      margin: 0;
      font-family: Ubuntu;
    }

    display: flex;
    justify-content: space-between;
  }

  .header-right-content {
    h2 {
      margin: 0;

      font-family: Ubuntu;

      :hover {
        cursor: pointer;
        color: #059CE5;
      }
    }

    .active-vendas {
      color: #059CE5;

      :hover {
        cursor: not-allowed;
      }
    }

    display: flex;
    justify-content: space-between;

    .orders {
      margin-right: 2em;
    }
  }
`
