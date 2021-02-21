import { message } from 'antd';

export const showLoadingMessage = (msgText: string) => {
  message.loading({ content: msgText, key: 'loading' });
};

export const showErrorMessage = (msgText: string) => {
  message.destroy('loading');
  message.error({ content: msgText, key: 'error', duration: 3 });
};

export const showSuccessMessage = (msgText: string) => {
  message.destroy('loading');
  message.success({ content: msgText, key: 'success', duration: 3 });
};
