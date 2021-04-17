import { message } from 'antd';

export const showLoadingMessage = (msgText: string): void => {
  message.loading({ content: msgText, key: 'loading' });
};

export const showErrorMessage = (msgText: string): void => {
  hideLoadingMessage();
  message.error({ content: msgText, key: 'error', duration: 3 });
};

export const showSuccessMessage = (msgText: string): void => {
  hideLoadingMessage();
  message.success({ content: msgText, key: 'success', duration: 3 });
};

export const hideLoadingMessage = () => {
  message.destroy('loading');
};
