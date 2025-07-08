import Image from "next/image";

export default function Nav() {
  return (
    <div className="fixed bottom-[12%] w-full h-[45px] max-w-[130px] left-1/2 -translate-x-1/2 flex z-50 shadow-lg shadow-black/40 rounded-xl bg-rolex-white">
      <div className="w-1/3 h-full relative rounded-l-xl overflow-hidden ">
        <Image src="/img/Watch-project-logo.png" alt="Watch" fill />
      </div>
      <p className="flex flex-1 text-rolex-black font-founders-grotesk text-center items-center justify-center text-[16px]">
        Navigation
      </p>
    </div>
  );
}
