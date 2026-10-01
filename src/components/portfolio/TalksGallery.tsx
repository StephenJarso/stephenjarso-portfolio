"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { TalkEvent } from "@/data/portfolio";

type TalksGalleryProps = {
  items: TalkEvent[];
};

export function TalksGallery({ items }: TalksGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const activeItem = items[activeIndex];

  if (!activeItem || items.length === 0) return null;

  const showPrevious = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % items.length);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="talks-grid" aria-label="Talks and events photo gallery">
        {items.map((item, index) => (
          <article className="talk-card" key={`${item.kind}-${index}`}>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                className="gallery-trigger"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${item.title} photo ${index + 1} of ${items.length}`}
              >
                {item.imageSrc ? (
                  <img src={item.imageSrc} alt={item.imageAlt ?? ""} className="gallery-thumbnail" />
                ) : (
                  <span className="photo-frame is-wide" aria-hidden="true">
                    <ImagePlus size={22} />
                    <span className="placeholder-label">{item.placeholderNote}</span>
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <div className="talk-meta">
              <span className="talk-kind">{item.kind}</span>
              <h3>{item.title}</h3>
              <span className="placeholder-label">Details to add</span>
            </div>
          </article>
        ))}
      </div>

      <DialogContent
        className="gallery-lightbox"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPrevious();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            showNext();
          }
        }}
      >
        <div className="gallery-stage">
          {activeItem.imageSrc ? (
            <img src={activeItem.imageSrc} alt={activeItem.imageAlt ?? ""} className="gallery-image" />
          ) : (
            <div className="gallery-placeholder" role="img" aria-label={`${activeItem.title} — placeholder, photo to be added`}>
              <ImagePlus size={32} aria-hidden="true" />
              <span className="placeholder-label">{activeItem.placeholderNote}</span>
            </div>
          )}
          {items.length > 1 && (
            <>
              <Button type="button" variant="secondary" size="icon" className="gallery-nav is-previous" onClick={showPrevious} aria-label="Previous photo">
                <ChevronLeft aria-hidden="true" />
              </Button>
              <Button type="button" variant="secondary" size="icon" className="gallery-nav is-next" onClick={showNext} aria-label="Next photo">
                <ChevronRight aria-hidden="true" />
              </Button>
            </>
          )}
        </div>
        <div className="gallery-caption">
          <div>
            <span className="talk-kind">{activeItem.kind}</span>
            <DialogTitle>{activeItem.title}</DialogTitle>
            <DialogDescription>{activeItem.caption}</DialogDescription>
          </div>
          <p className="gallery-count" aria-live="polite">Photo {activeIndex + 1} of {items.length}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}