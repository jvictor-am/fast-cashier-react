// third party imports
import styled from 'styled-components'


export const CashierContainer = styled.div`
  .cashier-content {
    display: flex;
    height: calc(100vh - 110px);

    .left-content {
      padding: 0 2em 0 1em;
      width: 70%;
      border-right: 1px solid #D4D4D4;

      .add-button {
        padding-top: 25px !important;

        :hover {
          filter: brightness(110%);
        }
      }

      .table-fc {
        margin-top: 2em;

        .trash-icon-table {
          :hover {
            cursor: pointer;
            filter: brightness(110%);
          }
        }
      }
    }

    .right-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 1em 0 2em;
      width: 35%;

      .bottom-area {
        .total-sales {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h2, h3 {
            margin: 0;
          }
        }

        .buttons-sales {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2em;
          margin-bottom: 1em;
        }
      }
    }
  }
`
