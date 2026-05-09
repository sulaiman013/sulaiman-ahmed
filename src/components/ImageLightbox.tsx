import { useState, useRef, useCallback, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  /** Use "diagram" for dark-bg technical diagrams, "screenshot" for blog screenshots */
  variant?: "diagram" | "screenshot";
}

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;

export default function ImageLightbox({
  src,
  alt,
  caption,
  className,
  variant = "diagram",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const imgBg = variant === "diagram" ? "#0a0a1a" : undefined;

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, z - ZOOM_STEP);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Reset on close
  useEffect(() => {
    if (!open) resetView();
  }, [open, resetView]);

  // Keyboard: arrow up/down for zoom, Escape handled by Dialog
  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "+") {
        e.preventDefault();
        zoomIn();
      } else if (e.key === "ArrowDown" || e.key === "-") {
        e.preventDefault();
        zoomOut();
      } else if (e.key === "0") {
        e.preventDefault();
        resetView();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, zoomIn, zoomOut, resetView]);

  // Mouse wheel zoom
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    },
    [zoomIn, zoomOut],
  );

  // Pan via mouse drag (when zoomed in)
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (zoom <= 1) return;
      e.preventDefault();
      setDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      panStart.current = { ...pan };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [zoom, pan],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPan({ x: panStart.current.x + dx, y: panStart.current.y + dy });
    },
    [dragging],
  );

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Double-click to toggle between fit and 2x zoom
  const handleDoubleClick = useCallback(() => {
    if (zoom > 1) {
      resetView();
    } else {
      setZoom(2);
    }
  }, [zoom, resetView]);

  const zoomPercent = Math.round(zoom * 100);

  return (
    <figure className={className || "my-10"}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div
            className="rounded-xl overflow-hidden border border-border/60 shadow-lg cursor-zoom-in transition-shadow hover:shadow-xl hover:border-primary/30"
            role="button"
            tabIndex={0}
            aria-label={`View ${alt || caption || "image"} in full size`}
          >
            <img
              src={src}
              alt={alt || caption || "Diagram"}
              className="w-full h-auto"
              style={imgBg ? { background: imgBg } : undefined}
              loading="lazy"
            />
          </div>
        </DialogTrigger>

        <DialogContent
          className="max-w-[95vw] max-h-[95vh] w-[95vw] h-[95vh] p-0 bg-black/95 border-border/20 backdrop-blur-sm overflow-hidden flex flex-col [&>button]:text-white [&>button]:opacity-100 [&>button]:bg-white/15 [&>button]:hover:bg-white/30 [&>button]:rounded-full [&>button]:h-9 [&>button]:w-9 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:right-3 [&>button]:top-3 [&>button]:z-50 [&>button>svg]:h-5 [&>button>svg]:w-5"
          aria-describedby={undefined}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <DialogTitle className="sr-only">
            {alt || caption || "Image preview"}
          </DialogTitle>

          {/* Image viewport */}
          <div
            ref={containerRef}
            className="flex-1 overflow-hidden flex items-center justify-center select-none"
            style={{ cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default" }}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onDoubleClick={handleDoubleClick}
          >
            <img
              src={src}
              alt={alt || caption || "Diagram"}
              className="max-w-full max-h-full object-contain rounded-lg pointer-events-none"
              style={{
                background: imgBg,
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transition: dragging ? "none" : "transform 0.15s ease-out",
              }}
              draggable={false}
            />
          </div>

          {/* Bottom toolbar */}
          <div className="flex items-center justify-center gap-3 py-2.5 px-4 bg-black/60 border-t border-white/5">
            <button
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>

            <span className="text-xs font-mono text-white/60 w-12 text-center tabular-nums">
              {zoomPercent}%
            </span>

            <button
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </button>

            <div className="w-px h-4 bg-white/10" />

            <button
              onClick={resetView}
              className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            {caption && (
              <>
                <div className="w-px h-4 bg-white/10" />
                <p className="text-xs text-white/50 truncate max-w-[40vw]">
                  {caption}
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {caption && (
        <figcaption className="text-center text-xs text-muted-foreground mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
