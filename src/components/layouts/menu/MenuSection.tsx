"use client";

import { useState } from "react";

import { menuCategories, menuData } from "@/constants/data";

import { Button } from "@/components/ui/button";

import MenuCard from "./MenuCard";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? menuData
      : menuData.filter(item => item.category === activeCategory);

  const categoryButtons = [
    { id: "all", name: "Semua Menu", description: "Tampilkan semua menu" },
    ...menuCategories,
  ];

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categoryButtons.map(category => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="transition-all duration-200 hover:scale-105"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Category Description */}
      {activeCategory !== "all" && (
        <div className="text-center">
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {menuCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>
      )}

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {/* No items message */}
      {filteredItems.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground text-lg">
            Tidak ada menu dalam kategori ini.
          </p>
        </div>
      )}

      {/* Items count */}
      <div className="text-muted-foreground text-center text-sm">
        Menampilkan {filteredItems.length} dari {menuData.length} menu
      </div>
    </div>
  );
};

export default MenuSection;
