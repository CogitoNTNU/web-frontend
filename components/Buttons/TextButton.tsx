import { Glow, GlowCapture } from "@codaworks/react-glow";

interface TextButtonProps {
  text: string;
  textSize?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TextButton = ({
  text,
  textSize,
  disabled = false,
  onClick,
}: TextButtonProps) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        <div className="flex justify-center gap-2 items-center group/button">
          <div>
            <div className="flex justify-center items-center w-full h-full mb-1 transition-all group-hover/button:scale-150">
              <div className="absolute rounded-full w-[4px] h-[4px] bg-black-dark"></div>
              <div className="rounded-full w-[7px] h-[7px] bg-white"></div>
            </div>
          </div>

          <GlowCapture>
            <p
              className="font-medium text-white md:text-[16px] text-[12px]"
              style={{ fontSize: textSize }}
            >
              {text}
            </p>
            <Glow>
              <div className="w-full h-[1px] mt-1 glow:bg-white/60"></div>
            </Glow>
          </GlowCapture>
        </div>
      </button>
    </>
  );
};

export default TextButton;
