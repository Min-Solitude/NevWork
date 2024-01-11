import { toast } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export default function Toast({ type, message }: { type: ToastType; message: string }) {
    return (
        <div className="bg-transparent">
            {type === 'success' && (
                <div className="flex gap-2 b bg-white text-black  font-semibold items-center justify-center">
                    <p>{message}</p> <p className="text-lg">&#128526;</p>
                </div>
            )}
            {type === 'error' && (
                <div className="flex gap-2 b bg-white text-gray-700 font-semibold items-center justify-center">
                    <p>{message}</p> <p className="text-lg">&#128546;</p>
                </div>
            )}
            {type === 'info' &&
                toast.info(message, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })}
            {type === 'warning' &&
                toast.warning(message, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })}
        </div>
    );
}
