interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard = ({ name, role, image }: TeamMemberCardProps) => {
  return (
    <div className="text-center">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
