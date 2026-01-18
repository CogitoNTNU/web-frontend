import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type sendApplicationProps = {
  setErrorArray: (errors: string[]) => void;
};

const sendApplication = async (formData: FormData) => {
  await axios.post(`${process.env.endpoint}/api/temp-member-application`, formData);
};

export const useSendApplication = ({ setErrorArray }: sendApplicationProps) => {
  return useMutation({
    mutationFn: sendApplication,
    onError: (error: AxiosError) =>
      setErrorArray(Object.keys(error.response.data)),
  });
};
