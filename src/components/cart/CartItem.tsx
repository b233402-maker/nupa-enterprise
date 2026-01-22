import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ id, name, price, quantity, image, onQuantityChange, onRemove }: CartItemProps) => {
  const totalPrice = price * quantity;

  return (
    <div className="flex items-center gap-4 p-4 border-b border-border last:border-b-0">
      <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-contain p-2" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground truncate">{name}</h3>
        <p className="text-primary font-semibold">BDT {price.toLocaleString()}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <span className="w-8 text-center font-medium">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => onQuantityChange(id, quantity + 1)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <p className="font-semibold text-foreground min-w-[100px] text-right">
        BDT {totalPrice.toLocaleString()}
      </p>
      <Button variant="ghost" size="icon" onClick={() => onRemove(id)} className="text-muted-foreground hover:text-destructive">
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CartItem;
