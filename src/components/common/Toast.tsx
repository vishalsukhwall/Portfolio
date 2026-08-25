import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToastStore } from '@stores/toastStore';
import { cn } from '@utils/cn';

const toastVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onDismiss={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};
ToastContainer.displayName = 'ToastContainer';

interface ToastItemProps {
  toast: { id: string; type: 'success'|'error'|'info'|'warning'; message: string; duration?: number };
  onDismiss: () => void;
}

const Toast: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, toast.duration || 5000);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  const typeColors = {
    success: 'bg-green-500/10 text-green-500 border-green-500/20',
    error: 'bg-red-500/10 text-red-500 border-red-500/20',
    info: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
    warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20'
  };

  return (
    <motion.div
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn("pointer-events-auto flex items-center justify-between p-4 rounded-lg border backdrop-blur-md min-w-[300px] shadow-lg", typeColors[toast.type])}
      role="alert"
      aria-live="polite"
    >
      <span className="text-sm font-medium">{toast.message}</span>
      <button 
        onClick={onDismiss}
        className="ml-4 hover:opacity-70 transition-opacity focus:outline-none"
        aria-label="Close notification"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </motion.div>
  );
};
Toast.displayName = 'Toast';
