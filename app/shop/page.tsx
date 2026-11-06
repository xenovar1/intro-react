"use client";
import Link from "next/link";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "ApexFlow Tee",
        price: 48,
        category: "T-Shirts",
        image: "/img1.webp",

    },

    {
        id: 2,
        name: "PeakDrive Tee",
        price: 48,
        category: "T-Shirts",
        image: "/img2.webp",

    },

    
    {
        id: 3,
        name: "SwiftEdge Jacket",
        price: 168,
        category: "Jackets",
        image: "/img3.webp",

    },

    
    {
        id: 4,
        name: "PeakDrift Hoodie",
        price: 118,
        category: "Hoodies",
        image: "/img4.webp",

    },

    
    {
        id: 5,
        name: "PaceShift Swirtshirt",
        price: 98,
        category: "Hoodies",
        image: "/img5.webp",

    },

    
    {
        id: 6,
        name: "SwiftEdge Jacket",
        price: 168,
        category: "Jackets",
        image: "/img6.webp",

    },

    
    {
        id: 7,
        name: "PivotPrime Tee",
        price: 48,
        category: "T-Shirts",
        image: "/img7.webp",

    },

    
    {
        id: 8,
        name: "HaloLine Hoodies",
        price: 118,
        category: "Hoodies",
        image: "/img8.webp",

    },

    
    {
        id: 9,
        name: "AuraMode Swirtshirt",
        price: 98,
        category: "Hoodies",
        image: "/img9.webp",

    },

    
    {
        id: 10,
        name: "VentureField Jacket",
        price: 168,
        category: "Jackets",
        image: "/img2.webp",

    },

];

export default function ShopPage() {
    const [category, SetCategory] = useState("All");
    const [showFilters, setShowFilters] = useState(false);

    const filteredProducts =
        category === "All"
            ? products
            : products.filter(
                (product) => product.category === category
            );


    return (
        <main>
            <header>
                <div>
                    <Link href="/">Vercel Shop</Link>
                    <Link href="/shop">Shop</Link>
                </div>
            </header>

            <section>
                <h1>Products</h1>

                <button onClick={() => setShowFilters(!showFilters)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-sliders-horizontal preview-icon"
                    >
                        <path d="M10 5H3" />
                        <path d="M12 19H3" />
                        <path d="M14 3v4" />
                        <path d="M16 17v4" />
                        <path d="M21 12h-9" />
                        <path d="M21 19h-5" />
                        <path d="M21 5h-7" />
                        <path d="M8 10v4" />
                        <path d="M8 12H3" />
                    </svg>

                    <p>Filters</p>
                </button>


                {showFilters && (
                    <div>
                        {["All", "T-Shirts", "Jackets", "Hoodies"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => SetCategory(item)}
                                    >
                                    {item}

                                </button>
                            )
                        )}
                    </div>
                )}

                <div className="grid grid-cols-5 gap-6">
                    {filteredProducts.map((product) => (
                        <article key={product.id}>
                            <div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <button aria-label={`Add ${product.name}`}
                                    onClick={() =>
                                        alert(`${product.name} selected`)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <p>{product.name}</p>
                            <span>
                                ${(product.price ?? 0).toFixed(2)}
                            </span>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}