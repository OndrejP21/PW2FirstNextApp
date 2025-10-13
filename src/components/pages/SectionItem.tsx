import { SectionItemProps } from "@/types/section";
import Image from "next/image";

export default function SectionItem({
  header,
  text,
  srcImage,
  className = "",
}: SectionItemProps) {
  return (
    <section className={`p-5 flex bg-gray-200 ${className}`}>
      <div>
        <h2 className="font-bold mb-4">{header}</h2>

        {text.map((text, index) => (
          <p key={index} className="text-justify max-w-[90ch]">
            {text}
          </p>
        ))}
      </div>

      <div>
        <Image src={srcImage} alt="img" />
      </div>
    </section>
  );
}
