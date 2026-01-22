import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock?: boolean;
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

const ProductCard = ({ product, variant = "default" }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border group hover:shadow-lg transition-shadow">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square bg-muted p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs">
          {product.category}
        </Badge>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-sm text-muted-foreground">Starting from</span>
          <span className="font-bold text-foreground">BDT {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              BDT {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1" size="sm" asChild>
            <Link to={`/product/${product.id}`}>Buy Now</Link>
          </Button>
          <Button variant="outline" size="icon" className="flex-shrink-0">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
