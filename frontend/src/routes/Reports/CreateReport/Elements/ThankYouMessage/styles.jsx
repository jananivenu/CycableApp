import styled from 'styled-components';
import Modal from 'react-modal';

export const CustomModal = styled(Modal)`
  &.Modal {
    &__Overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__Content {
      position: relative;
      margin: auto;
      background: #f7f7f7;
      width: auto;
      max-width: 500px;
      border-radius: 16px;
      padding: 20px;
      overflow: auto;
      outline: none;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      right: auto;
      bottom: auto;
      margin-right: -50%;
    }
  }
`;