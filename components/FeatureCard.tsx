import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function FeatureCard({ title, description, image, reverse = false }: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1 relative">
        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
