import Image from "next/image";

// Images
import test from "../../public/Projects/MarketingAILogo.png";

const ProjectPreview = () => {
    return (
        <>
            <main className="w-[500px] h-[110px] bg-white rounded-2xl overflow-hidden">
                <div>
                    <div className="relative w-full">
                        <Image
                            className="inset-0 w-[300px] object-cover  bg-red-800"
                            src={test}
                            alt={"test"}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProjectPreview;
