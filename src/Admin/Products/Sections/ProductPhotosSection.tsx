import type { ChangeEvent, ReactNode } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SectionCard from "@/Admin/Components/SectionCard";
import { ProductFieldType } from "../Types";
import { UPDATE_ACTIONS } from "../Constant";
import { useProductCms } from "../ProductCmsContext";

export default function ProductPhotosSection() {
  const { dispatchAction, errors, product } = useProductCms();

  function updateField<K extends keyof ProductFieldType>(
    field: K,
    value: ProductFieldType[K],
  ) {
    dispatchAction(UPDATE_ACTIONS.UPDATE_FIELD, { field, value });
  }

  const handleMainUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    readFileAsBase64(file).then((imageUrl) => updateField("imageUrl", imageUrl));
    event.target.value = "";
  };

  const handleOtherUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    Promise.all(files.map(readFileAsBase64)).then((uploadedImages) => {
      updateField("images", [...product.images, ...uploadedImages]);
    });
    event.target.value = "";
  };

  const removeMainImage = () => {
    updateField("imageUrl", "");
  };

  const removeOtherImage = (index: number) => {
    updateField(
      "images",
      product.images.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const setMainImage = (index: number) => {
    const selectedImage = product.images[index];
    if (!selectedImage) return;

    const nextImages = [
      ...(product.imageUrl ? [product.imageUrl] : []),
      ...product.images.filter((_, itemIndex) => itemIndex !== index),
    ];

    updateField("imageUrl", selectedImage);
    updateField("images", nextImages);
  };

  return (
    <SectionCard
      title="Product Photos"
      description="Upload the main image and supporting images in storefront priority order."
    >
      <Alert severity="info">
        Images are uploaded from files and stored as base64 strings for backend submission.
      </Alert>

      <Box sx={sectionBlockSx}>
        <Box sx={sectionHeaderSx}>
          <Box>
            <Typography sx={{ fontWeight: 850 }}>Main Image</Typography>
            <Typography sx={{ color: "#64748b", fontSize: "0.86rem" }}>
              This image maps to imageUrl.
            </Typography>
          </Box>
          <Button variant="outlined" component="label">
            Upload main
            <Box
              component="input"
              type="file"
              accept="image/*"
              hidden
              onChange={handleMainUpload}
            />
          </Button>
        </Box>

        {product.imageUrl ? (
          <ImageTile
            imageUrl={product.imageUrl}
            title="Main image"
            onRemove={removeMainImage}
          />
        ) : (
          <Box sx={emptySlotSx}>No main image uploaded yet.</Box>
        )}
      </Box>

      <Box sx={sectionBlockSx}>
        <Box sx={sectionHeaderSx}>
          <Box>
            <Typography sx={{ fontWeight: 850 }}>Other Images</Typography>
            <Typography sx={{ color: "#64748b", fontSize: "0.86rem" }}>
              These map to images in priority order.
            </Typography>
          </Box>
          <Button variant="outlined" component="label">
            Upload others
            <Box
              component="input"
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleOtherUpload}
            />
          </Button>
        </Box>

        {product.images.length ? (
          <Box sx={otherGridSx}>
            {product.images.map((imageUrl, index) => (
              <ImageTile
                key={`${imageUrl}-${index}`}
                imageUrl={imageUrl}
                title={`Priority ${index + 1}`}
                onRemove={() => removeOtherImage(index)}
              >
                <Button
                  size="small"
                  variant="outlined"
                  type="button"
                  onClick={() => setMainImage(index)}
                >
                  Set main
                </Button>
              </ImageTile>
            ))}
          </Box>
        ) : (
          <Box sx={emptySlotSx}>No supporting images uploaded yet.</Box>
        )}
      </Box>

      {errors.imageUrl ? (
        <Typography sx={{ color: "#b45309", fontSize: "0.82rem" }}>
          {errors.imageUrl}
        </Typography>
      ) : null}
    </SectionCard>
  );
}

function ImageTile({
  children,
  imageUrl,
  title,
  onRemove,
}: {
  children?: ReactNode;
  imageUrl: string;
  title: string;
  onRemove: () => void;
}) {
  return (
    <Box sx={tileSx}>
      <Box sx={imageWrapSx}>
        <Box
          component="img"
          src={imageUrl || "https://placehold.co/220x160?text=Image"}
          alt={title}
          sx={imageSx}
        />
        <IconButton
          type="button"
          aria-label={`Remove ${title}`}
          onClick={onRemove}
          sx={removeButtonSx}
        >
          x
        </IconButton>
      </Box>
      <Box sx={tileContentSx}>
        {children ? <Box sx={tileActionSx}>{children}</Box> : null}
        <Typography sx={tileTitleSx}>{title}</Typography>
        <Typography sx={{ color: "#64748b", fontSize: "0.78rem" }}>
          {imageUrl.startsWith("data:") ? "Base64 ready" : "Existing image"}
        </Typography>
      </Box>
    </Box>
  );
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // Only compress image files, fallback to standard FileReader for non-images
    if (!file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(file);
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      
      const MAX_WIDTH = 1200;
      const MAX_HEIGHT = 1200;
      let width = img.width;
      let height = img.height;

      // Calculate the new dimensions keeping aspect ratio
      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        if (width > height) {
          height = Math.round((height * MAX_WIDTH) / width);
          width = MAX_WIDTH;
        } else {
          width = Math.round((width * MAX_HEIGHT) / height);
          height = MAX_HEIGHT;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        // Fallback to FileReader if canvas context is not available
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = reject;
        reader.readAsDataURL(file);
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      // Attempt to export as webp, fallback to jpeg if unsupported
      const quality = 0.8;
      const dataUrl = canvas.toDataURL("image/webp", quality);
      if (dataUrl.startsWith("data:image/webp") || dataUrl.includes("webp")) {
        resolve(dataUrl);
      } else {
        resolve(canvas.toDataURL("image/jpeg", quality));
      }
    };
    img.onerror = () => {
      // Fallback to FileReader if image loading fails
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    };
  });
}

const sectionBlockSx = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  p: 1.5,
  border: "1px solid #e2e8f0",
  borderRadius: 2,
  bgcolor: "#f8fafb",
};

const sectionHeaderSx = {
  display: "flex",
  alignItems: { xs: "flex-start", sm: "center" },
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  gap: 1.5,
  "& .MuiButton-root": {
    fontSize: "0.78rem",
    lineHeight: 1.2,
    minWidth: 148,
    whiteSpace: "nowrap",
  },
};

const otherGridSx = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr)",
  gap: 1.25,
};

const tileSx = {
  display: "grid",
  gridTemplateColumns: {
    xs: "minmax(0, 1fr)",
    sm: "minmax(180px, 1fr) 220px",
  },
  gap: 1.25,
  alignItems: { xs: "stretch", sm: "center" },
  p: 1,
  border: "1px solid #d8e0e8",
  borderRadius: 2,
  bgcolor: "#fff",
  "& .MuiButton-root": {
    fontSize: "0.76rem",
    lineHeight: 1.2,
    minWidth: { xs: "100%", sm: 104 },
    whiteSpace: "nowrap",
  },
};

const tileContentSx = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 0.4,
};

const tileActionSx = {
  width: "100%",
  mb: 0.35,
};

const tileTitleSx = {
  fontWeight: 850,
  fontSize: "0.9rem",
  lineHeight: 1.2,
  whiteSpace: "nowrap",
};

const imageWrapSx = {
  position: "relative",
  width: "100%",
  height: { xs: 180, sm: 112 },
  overflow: "hidden",
  borderRadius: 1.25,
  bgcolor: "#111827",
};

const imageSx = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const removeButtonSx = {
  position: "absolute",
  top: 4,
  right: 4,
  width: 24,
  height: 24,
  bgcolor: "rgba(17, 24, 39, 0.78)",
  color: "#fff",
  fontSize: "1rem",
  lineHeight: 1,
  "&:hover": {
    bgcolor: "rgba(185, 28, 28, 0.9)",
  },
};

const emptySlotSx = {
  minHeight: 92,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px dashed #cbd5e1",
  borderRadius: 2,
  color: "#64748b",
  bgcolor: "#fff",
};
