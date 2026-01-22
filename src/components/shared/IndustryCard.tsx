interface IndustryCardProps {
  image: string;
  title: string;
  description: string;
}

const IndustryCard = ({ image, title, description }: IndustryCardProps) => {
  return (
    <div className="group">
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default IndustryCard;
