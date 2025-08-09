import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlightText?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  highlightText,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
}: SectionTitleProps) => {
  const renderTitle = () => {
    if (highlightText && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="text-primary">{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className={cn("", centered && "text-center", className)}>
      <h2
        className={cn(
          "mb-4 text-3xl font-bold md:text-4xl lg:text-5xl",
          titleClassName
        )}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground max-w-2xl text-lg md:text-xl",
            centered && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
