import { toast } from 'react-toastify';

type NotifyType = {
  promise: Promise<unknown>,
  pending: string,
};

function notifyWithPromise({ promise, pending }: NotifyType) {
  toast.promise(promise, { pending, success : undefined, error : undefined },{
    position : 'top-right',
    autoClose : 3000,
    hideProgressBar : false,
    closeOnClick : true,
    pauseOnHover : true,
    draggable : true,
    progress : undefined,
    theme : 'light',
  });
}

export default notifyWithPromise;
