import type { TestimonialConfig } from "@/prospects/types";
import { ImageWithFallback } from "./ImageWithFallback";
import { Icon } from "./Icon";

type TestimonialCardProps = {
  testimonial: TestimonialConfig;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const reviewerInitial = testimonial.name.trim().charAt(0).toUpperCase() || "•";

  return (
    <article className="testimonial-card">
      <div className="testimonial-card__header">
        {testimonial.avatar?.src ? (
          <ImageWithFallback
            className="testimonial-card__avatar"
            fallback={testimonial.avatar}
            image={testimonial.avatar}
          />
        ) : (
          <span aria-hidden="true" className="testimonial-card__avatar testimonial-card__initial">
            {reviewerInitial}
          </span>
        )}
        <div>
          <h3>{testimonial.name}</h3>
          {testimonial.service ? <p>{testimonial.service}</p> : null}
        </div>
      </div>
      {testimonial.rating ? (
        <div aria-label={`${testimonial.rating} estrelas`} className="testimonial-card__stars">
          {Array.from({ length: Math.min(5, Math.round(testimonial.rating)) }).map((_, index) => (
            <Icon key={index} name="star" />
          ))}
        </div>
      ) : null}
      <p className="testimonial-card__text">“{testimonial.text}”</p>
      <div className="testimonial-card__footer">
        {testimonial.isPlaceholder ? <span>Placeholder - substitua por avaliação real</span> : null}
        {testimonial.source ? <span>{testimonial.source}</span> : null}
      </div>
    </article>
  );
}
