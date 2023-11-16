import { toast } from "react-toastify";

interface IProps {
  message: string;
  type: string;
}

export function ShowToast({ message, type }: IProps) {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.info(message);
      break;
  }
}
