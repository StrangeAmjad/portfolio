import Image from "next/image";

export default function Home() {
  return (
    <div className="font-comfortaa grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="flex gap-4 items-center flex-col text-center ">
          <p className="text-8xl text-foreground">
            Hi, i am Amjad
          </p>
          <p className="text-2xl text-foregroundSecondary">
            Software Engineer
          </p>
        </div>

        <div className="box mt-128 w-full max-w-xl p-8 rounded-lg flex flex-row bg-boxBackground outline-2 outline-boxOutlineColor">
          {/* image and buttons */}
          <div className="flex flex-col items-center gap-4 pr-4 mt-[8px]">
            <div className="relative w-16 h-16">
              <Image
                src="/profile.jpg" 
                alt="Amjad Profile image"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>  
            <div className="flex flex-col w-max max-w-32 min-w-16 gap-1.5">
              <a className="box flex rounded-full bg-buttonBackground/13 text-sm justify-center p-[5px] hover:bg-buttonBackground/50" target="_blank" href="https://github.com/StrangeAmjad">
                <Image src="/github-mark-white.png" alt="GitHub Mark" width={64} height={64} className="w-3 h-3"/>
                <p className="text-center ml-1 text-white text-[8px]">
                  GitHub
                </p>
              </a>  
              <a className="box flex rounded-full bg-buttonBackground/13 text-sm justify-center p-[5px] hover:bg-buttonBackground/50" target="_blank" href="mailto:amjad.formal@gmail.com">
                <Image src="/email.svg" alt="Email Logo" width={64} height={64} className="w-3 h-3 invert"/>
                <p className="text-center ml-1 text-white text-[8px]">
                  Email
                </p>
              </a>  
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-center text-white text-xs">
                Languages
              </h2>
              <div className="flex flex-row gap-1 justify-center">
                <span className="box flex rounded-full bg-black outline-1 outline-boxOutlineColor justify-center text-[6px] pt-0.5 pb-0.5 pl-2 pr-2">Arabic</span>
                <span className="box flex  rounded-full bg-black outline-1 outline-boxOutlineColor justify-center text-[6px] pt-0.5 pb-0.5 pl-2 pr-2">English</span>
              </div>
            </div>
          </div>
          <div className="flex-col text-center sm:text-left p-2">
            <h2 className="text-2xl text-foreground">
              About
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}
