import { toast, ToastOptions } from 'react-toastify'

export function useToast() {
  const options: ToastOptions = {
    position: toast.POSITION.TOP_CENTER,
    draggable: true,
  }

  function toastError(msg: string) {
    return toast.error(msg, options)
  }

  function toastSuccess(msg: string) {
    return toast.success(msg, options)
  }

  function simpleToast(msg: string) {
    return toast(msg, options)
  }

  return { toastError, toastSuccess, simpleToast }
}
