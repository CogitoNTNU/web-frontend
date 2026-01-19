import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type sendApplicationProps = {
  setErrorArray: (errors: string[]) => void;
};

type application = {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Projects: string[];
  ApplicationText: string;
};

const sendApplication = async (data: application) => {
  await axios.post(
    `${process.env.endpoint}/api/temp-member-application/`,
    data
  );
};

export const useSendApplication = ({ setErrorArray }: sendApplicationProps) => {
  return useMutation({
    mutationFn: sendApplication,
    onError: (error: AxiosError) =>
      setErrorArray(Object.keys(error.response.data)),
  });
};
