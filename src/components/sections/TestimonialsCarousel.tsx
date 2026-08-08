"use client";

import type { CSSProperties } from "react";
import type { TestimonialsConfig } from "@/prospects/types";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

type TestimonialsCarouselProps = {
  testimonials: TestimonialsConfig;
};

type TestimonialsCarouselStyle = CSSProperties & {
  "--testimonials-duration": string;
};

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const items = testimonials.items;

  if (items.length === 0) {
    return null;
  }

  const shouldAutoplay = testimonials.autoplay && items.length > 1;
  const renderedItems = shouldAutoplay ? [...items, ...items] : items;

  return (
    <div
      className={`testimonials-carousel${shouldAutoplay ? " testimonials-carousel--auto" : ""}`}
      aria-roledescription="carrossel"
      style={{
        "--testimonials-duration": `${Math.max(36, testimonials.speedSeconds)}s`
      } as TestimonialsCarouselStyle}
    >
      <div className="testimonials-carousel__track">
        {renderedItems.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            aria-hidden={shouldAutoplay && index >= items.length}
            className="testimonials-carousel__slide"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}
