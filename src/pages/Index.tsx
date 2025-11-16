import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DealCard from "@/components/DealCard";
import CategoryFilter from "@/components/CategoryFilter";
import SignupDialog from "@/components/SignupDialog";
import BottomNav from "@/components/BottomNav";

import burgerMeal from "@/assets/burger-meal.jpg";
import spicyBurger from "@/assets/spicy-burger.jpg";
import vegBurger from "@/assets/veg-burger.jpg";
import cheeseFries from "@/assets/cheese-fries.jpg";
import coffeeFries from "@/assets/coffee-fries.jpg";
import foodIcon from "@/assets/food-icon.png";

const Index = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Deals");
  const [activeTab, setActiveTab] = useState("deals");

  const categories = ["All Deals", "Best Seller", "Burgers", "Veg", "Combos", "Beverages"];

  const deals = [
    {
      title: "Chicken Maharaja Burger Meal",
      description: "Juicy chicken patty with special sauce, veggies, fries & drink",
      price: 259,
      image: burgerMeal,
      validUntil: "30-11-2025",
      badge: "FESTIVE SPECIAL",
      category: "Burgers",
    },
    {
      title: "McSpicy Chicken Burger",
      description: "Crispy spicy chicken burger with tangy mayo",
      price: 249,
      image: spicyBurger,
      validUntil: "30-11-2025",
      badge: "HOT DEAL",
      category: "Burgers",
    },
    {
      title: "Maharaja Mac Veg Meal",
      description: "Delicious veg patty with cheese, veggies & special sauce",
      price: 229,
      image: vegBurger,
      validUntil: "30-11-2025",
      category: "Veg",
    },
    {
      title: "Free Cheesy Fries",
      description: "Get FREE cheesy fries on purchase of ₹299",
      price: 0,
      image: cheeseFries,
      validUntil: "21-11-2025",
      badge: "FREE",
      category: "Combos",
    },
    {
      title: "Coffee & Fries Combo",
      description: "2 Hot beverages + Free medium fries",
      price: 199,
      image: coffeeFries,
      validUntil: "01-12-2025",
      badge: "COMBO DEAL",
      category: "Beverages",
    },
  ];

  const filteredDeals = activeCategory === "All Deals" 
    ? deals 
    : deals.filter(deal => deal.category === activeCategory);

  const handleSignupComplete = (code: string, name: string) => {
    setCouponCode(code);
    setUserName(name);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-card shadow-sm z-40 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <h1 className="text-xl font-bold text-primary">MS99 Burgers</h1>
            </div>
            {couponCode && (
              <Badge variant="outline" className="px-3 py-1">
                {couponCode}
              </Badge>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <section className="bg-hero-gradient px-4 py-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">
              {userName ? `Welcome, ${userName}!` : "Great deals every day"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {userName 
                ? "Browse our exclusive deals and use your coupon code"
                : "Become a member to get great deals and order in the app"}
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <img 
              src={foodIcon} 
              alt="Food illustration" 
              className="w-48 h-48 object-contain"
            />
          </div>

          <div className="flex gap-3">
            {!couponCode && (
              <Button 
                onClick={() => setSignupOpen(true)}
                className="flex-1 font-bold text-base py-6"
              >
                Sign up
              </Button>
            )}
            <Button 
              variant="outline" 
              className="flex-1 font-bold text-base py-6 bg-card"
            >
              Learn more
            </Button>
          </div>
        </section>

        {/* Deals Section */}
        <section className="px-4 py-6">
          <h3 className="text-2xl font-bold mb-4">Deals</h3>
          
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid gap-4 mt-6">
            {filteredDeals.map((deal, index) => (
              <DealCard key={index} {...deal} />
            ))}
          </div>

          {filteredDeals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No deals available in this category</p>
            </div>
          )}
        </section>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Signup Dialog */}
      <SignupDialog 
        open={signupOpen} 
        onOpenChange={setSignupOpen}
        onSignupComplete={handleSignupComplete}
      />
    </div>
  );
};

export default Index;
