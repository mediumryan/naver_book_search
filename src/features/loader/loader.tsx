import { useFormStatus } from 'react-dom';
// components
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
// icons
import { Loader } from 'lucide-react';

export default function Loading() {
  const { pending } = useFormStatus();

  return (
    <AlertDialog open={pending}>
      <AlertDialogContent>
        <AlertDialogTitle></AlertDialogTitle>
        <Loader className="animate-spin text-sky-50 w-24 h-24 mx-auto" />
      </AlertDialogContent>
    </AlertDialog>
  );
}
