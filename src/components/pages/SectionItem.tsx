import { SectionItemProps } from "@/types/section";
import Image from "next/image";

export default function SectionItem({
  header,
  text,
  srcImage,
  className = "",
}: SectionItemProps) {
  return (
    <section className={`p-5 flex gap-x-5 bg-gray-200 ${className}`}>
      <div>
        <h2 className="font-bold mb-4">{header}</h2>

        {text.map((text, index) => (
          <p key={index} className="text-justify max-w-[90ch]">
            {text}
          </p>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={srcImage}
          alt="img"
          width={300}
          height={200}
          className="w-[300px] h-auto"
        />
      </div>
    </section>
  );
}
