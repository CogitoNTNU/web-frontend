type ErrorHandlingMarketingAIProps = {
  errorMessage?: string;
  errorCode: number;
  refetchClick?: () => void;
};

const ErrorHandlingMarketingAI = ({
  errorCode,
  errorMessage,
  refetchClick,
}: ErrorHandlingMarketingAIProps) => {
  switch (errorCode) {
    case 400:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center text-slate-50 gap-4">
          <h1 className="flex items-center text-lg">Error: 400</h1>
          <h3
            title={errorMessage}
            className="flex items-center text-base hover:underline cursor-pointer"
          >
            The given prompt was denied by the terms and service, please change
            your prompt and try again.
          </h3>
        </div>
      );
    case 500:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center text-slate-50">
          <h1 className="flex items-center text-lg">Error: 500</h1>
          <h3 title={errorMessage}>Internal Server Error</h3>
          <button
            onClick={refetchClick}
            className="bg-slate-500 hover:bg-slate-400 text-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            title="Refetch"
          />
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center text-slate-50">
          <h1 className="flex items-center text-lg">Error appeared </h1>
          <h3 className=" text-base">Something went wrong,</h3>
          <p>Error massage: {errorMessage}</p>
        </div>
      );
  }
};

export default ErrorHandlingMarketingAI;
