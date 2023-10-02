import { toast } from 'react-toastify';

type NotifyType = {
    type: 'success' | 'error' | 'info' | 'warn' | 'dark';
    message: string;
    toastId: string;
};

function notify({ type, message, toastId }: NotifyType) {
  return toast[type](message, {
    position : 'top-right',
    autoClose : 3000,
    hideProgressBar : false,
    closeOnClick : true,
    pauseOnHover : true,
    draggable : true,
    progress : undefined,
    theme : 'light',
    toastId : toastId,
  });

}

export default notify;
