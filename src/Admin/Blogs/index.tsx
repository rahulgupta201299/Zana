import { ChangeEvent, FormEvent, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  FormControlLabel,
  IconButton,
  Paper,
  Popover,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import RefreshIcon from "@mui/icons-material/Refresh";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useSnackbar } from "notistack";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import {
  AdminBlog,
  AdminBlogFormValues,
  createAdminBlog,
  getAdminBlogs,
  updateAdminBlog,
} from "./BlogApi";
import { formatUtcToIstDateTime } from "../Utils/DateUtils";

const DEFAULT_FORM_VALUES: AdminBlogFormValues = {
  title: "",
  description: "",
  content: "",
  isActive: true,
  image: null,
};

type BlogDialogState =
  | { mode: "create"; blog: null }
  | { mode: "edit"; blog: AdminBlog };

function stripHtml(value: string): string {
  if (typeof window === "undefined") {
    return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  }

  const documentValue = new DOMParser().parseFromString(value, "text/html");
  return (documentValue.body.textContent || "").replace(/\s+/g, " ").trim();
}

function readErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return "Something went wrong";
}

function buildFormValues(blog: AdminBlog | null): AdminBlogFormValues {
  if (!blog) return DEFAULT_FORM_VALUES;
  return {
    title: blog.title ?? "",
    description: blog.description ?? "",
    content: blog.content ?? "",
    isActive: blog.isActive !== false,
    image: null,
  };
}

function RichTextEditor(props: {
  allowBorder?: boolean;
  allowImages?: boolean;
  label: string;
  maxHeight?: number;
  minHeight?: number;
  required?: boolean;
  toolbarMode?: "basic" | "full";
  value: string;
  onChange: (value: string) => void;
}) {
  const {
    allowBorder = true,
    allowImages = true,
    label,
    maxHeight,
    minHeight = 260,
    required = false,
    toolbarMode = "full",
    value,
    onChange,
  } = props;
  const showFullToolbar = toolbarMode === "full";
  const editorRef = useRef<HTMLDivElement | null>(null);
  const inlineImageInputRef = useRef<HTMLInputElement | null>(null);
  const lastHtmlRef = useRef(value);
  const selectionRef = useRef<Range | null>(null);
  const [textColorAnchor, setTextColorAnchor] = useState<HTMLElement | null>(null);
  const [highlightColorAnchor, setHighlightColorAnchor] = useState<HTMLElement | null>(null);
  const [textSizeAnchor, setTextSizeAnchor] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
      lastHtmlRef.current = value;
    }
  }, [value]);

  const emitChange = () => {
    const nextValue = editorRef.current?.innerHTML ?? "";
    lastHtmlRef.current = nextValue;
    onChange(nextValue);
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    if (editorRef.current?.contains(range.commonAncestorContainer)) {
      selectionRef.current = range.cloneRange();
    }
  };

  const restoreSelection = () => {
    const selection = window.getSelection();
    if (!selection || !selectionRef.current) return;

    selection.removeAllRanges();
    selection.addRange(selectionRef.current);
  };

  const runCommand = (command: string, value?: string) => {
    editorRef.current?.focus();
    restoreSelection();
    document.execCommand(command, false, value);
    emitChange();
    saveSelection();
  };

  const insertHtmlAtSelection = (html: string) => {
    editorRef.current?.focus();
    restoreSelection();
    document.execCommand("insertHTML", false, html);
    emitChange();
    saveSelection();
  };

  const applyBorder = () => {
    editorRef.current?.focus();
    restoreSelection();

    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    if (range.collapsed) {
      window.alert("Select the content you want to add a border to first.");
      return;
    }

    if (!editorRef.current?.contains(range.commonAncestorContainer)) return;

    const wrapper = document.createElement("div");
    wrapper.setAttribute(
      "style",
      "border:1px solid #d1d5db;border-radius:8px;padding:16px;margin:16px 0;",
    );
    wrapper.appendChild(range.extractContents());
    range.insertNode(wrapper);

    selection.removeAllRanges();
    const nextRange = document.createRange();
    nextRange.selectNodeContents(wrapper);
    selection.addRange(nextRange);

    emitChange();
    saveSelection();
  };

  const buildInlineImageHtml = (src: string, alt = "") => (
    `<p><img src="${src}" alt="${alt.replace(/"/g, "&quot;")}" style="display:block;max-width:100%;height:auto;border-radius:8px;margin:16px 0;" /></p>`
  );

  const handleLink = () => {
    editorRef.current?.focus();
    const selectedText = window.getSelection()?.toString().trim();
    if (!selectedText) {
      window.alert("Select the text you want to link first.");
      return;
    }

    const rawUrl = window.prompt("Enter link URL");
    const trimmedUrl = rawUrl?.trim();
    if (!trimmedUrl) return;

    const normalizedUrl = /^https?:\/\//i.test(trimmedUrl)
      ? trimmedUrl
      : `https://${trimmedUrl}`;
    runCommand("createLink", normalizedUrl);
  };

  const handleImageUrl = () => {
    saveSelection();
    const rawUrl = window.prompt("Enter image URL");
    const trimmedUrl = rawUrl?.trim();
    if (!trimmedUrl) return;

    const normalizedUrl = /^https?:\/\//i.test(trimmedUrl)
      ? trimmedUrl
      : `https://${trimmedUrl}`;
    insertHtmlAtSelection(buildInlineImageHtml(normalizedUrl, "Blog image"));
  };

  const handleInlineImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    event.target.value = "";
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      window.alert("Please select an image file.");
      return;
    }

    if (file.size > 750 * 1024) {
      window.alert("Please use an image under 750 KB for inline blog content.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const src = typeof reader.result === "string" ? reader.result : "";
      if (!src) return;
      insertHtmlAtSelection(buildInlineImageHtml(src, file.name));
    };
    reader.readAsDataURL(file);
  };

  const openTextColorPalette = (event: MouseEvent<HTMLElement>) => {
    saveSelection();
    setTextColorAnchor(event.currentTarget);
  };

  const openTextSizePalette = (event: MouseEvent<HTMLElement>) => {
    saveSelection();
    setTextSizeAnchor(event.currentTarget);
  };

  const openHighlightColorPalette = (event: MouseEvent<HTMLElement>) => {
    saveSelection();
    setHighlightColorAnchor(event.currentTarget);
  };

  const applyTextColor = (color: string) => {
    runCommand("foreColor", color);
    setTextColorAnchor(null);
  };

  const applyHighlightColor = (color: string) => {
    runCommand("hiliteColor", color);
    setHighlightColorAnchor(null);
  };

  const applyTextSize = (size: "1" | "2" | "3" | "4" | "5" | "6" | "7") => {
    runCommand("fontSize", size);
    setTextSizeAnchor(null);
  };

  return (
    <Box>
      <Typography
        component="label"
        sx={{ color: "text.secondary", display: "block", fontSize: 13, mb: 0.75 }}
      >
        {label}{required ? " *" : ""}
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          borderColor: "#c4c4c4",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            bgcolor: "#f8fafc",
            borderBottom: "1px solid #dbe2ea",
            flexWrap: "wrap",
            position: "sticky",
            top: 0,
            zIndex: 2,
            px: 1,
            py: 0.75,
          }}
        >
          <Tooltip title="Bold">
            <IconButton aria-label="Bold" onClick={() => runCommand("bold")} size="small">
              <FormatBoldIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Italic">
            <IconButton aria-label="Italic" onClick={() => runCommand("italic")} size="small">
              <FormatItalicIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {showFullToolbar ? (
            <>
              <Tooltip title="Bulleted list">
                <IconButton aria-label="Bulleted list" onClick={() => runCommand("insertUnorderedList")} size="small">
                  <FormatListBulletedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Numbered list">
                <IconButton aria-label="Numbered list" onClick={() => runCommand("insertOrderedList")} size="small">
                  <FormatListNumberedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </>
          ) : null}
          <Tooltip title="Text color">
            <IconButton
              aria-label="Text color"
              onClick={openTextColorPalette}
              size="small"
            >
              <FormatColorTextIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Highlight color">
            <IconButton
              aria-label="Highlight color"
              onClick={openHighlightColorPalette}
              size="small"
            >
              <FormatColorFillIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Text size">
            <IconButton
              aria-label="Text size"
              onClick={openTextSizePalette}
              size="small"
            >
              <FormatSizeIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {allowBorder ? (
            <Tooltip title="Add border">
              <IconButton aria-label="Add border" onClick={applyBorder} size="small">
                <BorderStyleIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          ) : null}
          {showFullToolbar ? (
            <>
              <Tooltip title="Add link">
                <IconButton aria-label="Add link" onClick={handleLink} size="small">
                  <LinkIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Remove link">
                <IconButton aria-label="Remove link" onClick={() => runCommand("unlink")} size="small">
                  <LinkOffIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </>
          ) : null}
          {showFullToolbar && allowImages ? (
            <>
              <Tooltip title="Insert image URL">
                <IconButton aria-label="Insert image URL" onClick={handleImageUrl} size="small">
                  <ImageOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Upload inline image">
                <IconButton
                  aria-label="Upload inline image"
                  onClick={() => {
                    saveSelection();
                    inlineImageInputRef.current?.click();
                  }}
                  size="small"
                >
                  <AddPhotoAlternateOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </>
          ) : null}
          <Tooltip title="Clear formatting">
            <IconButton aria-label="Clear formatting" onClick={() => runCommand("removeFormat")} size="small">
              <FormatClearIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {showFullToolbar && allowImages ? (
            <input
              accept="image/*"
              hidden
              onChange={handleInlineImageFile}
              ref={inlineImageInputRef}
              type="file"
            />
          ) : null}
        </Stack>
        <Popover
          anchorEl={textColorAnchor}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          onClose={() => setTextColorAnchor(null)}
          open={Boolean(textColorAnchor)}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <Box sx={{ p: 1.5, width: 190 }}>
            <Typography color="text.secondary" sx={{ display: "block", mb: 1 }} variant="caption">
              Text color
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                bgcolor: "#f8fafc",
                border: "1px solid #d1d5db",
                borderRadius: 1,
                display: "flex",
                justifyContent: "space-between",
                px: 1.25,
                py: 1,
              }}
            >
              <Typography sx={{ color: "#374151", fontWeight: 650 }} variant="body2">
                Choose
              </Typography>
              <Box
                component="input"
                onChange={(event: ChangeEvent<HTMLInputElement>) => applyTextColor(event.target.value)}
                sx={{
                  bgcolor: "transparent",
                  border: "1px solid #d1d5db",
                  borderRadius: 1,
                  cursor: "pointer",
                  height: 32,
                  p: 0.25,
                  width: 44,
                }}
                type="color"
              />
            </Box>
          </Box>
        </Popover>
        <Popover
          anchorEl={highlightColorAnchor}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          onClose={() => setHighlightColorAnchor(null)}
          open={Boolean(highlightColorAnchor)}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <Box sx={{ p: 1.5, width: 190 }}>
            <Typography color="text.secondary" sx={{ display: "block", mb: 1 }} variant="caption">
              Highlight color
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                bgcolor: "#f8fafc",
                border: "1px solid #d1d5db",
                borderRadius: 1,
                display: "flex",
                justifyContent: "space-between",
                px: 1.25,
                py: 1,
              }}
            >
              <Typography sx={{ color: "#374151", fontWeight: 650 }} variant="body2">
                Choose
              </Typography>
              <Box
                component="input"
                onChange={(event: ChangeEvent<HTMLInputElement>) => applyHighlightColor(event.target.value)}
                sx={{
                  bgcolor: "transparent",
                  border: "1px solid #d1d5db",
                  borderRadius: 1,
                  cursor: "pointer",
                  height: 32,
                  p: 0.25,
                  width: 44,
                }}
                type="color"
              />
            </Box>
          </Box>
        </Popover>
        <Popover
          anchorEl={textSizeAnchor}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          onClose={() => setTextSizeAnchor(null)}
          open={Boolean(textSizeAnchor)}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <Box sx={{ p: 1.5, width: 220 }}>
            <Typography color="text.secondary" sx={{ display: "block", mb: 1 }} variant="caption">
              Text size
            </Typography>
            <Stack spacing={0.75}>
              <Button onClick={() => applyTextSize("2")} size="small" variant="outlined">12</Button>
              <Button onClick={() => applyTextSize("3")} size="small" variant="outlined">14</Button>
              <Button onClick={() => applyTextSize("4")} size="small" variant="outlined">18</Button>
              <Button onClick={() => applyTextSize("5")} size="small" variant="outlined">24</Button>
            </Stack>
          </Box>
        </Popover>
        <Box
          ref={editorRef}
          contentEditable
          onBlur={emitChange}
          onInput={emitChange}
          onKeyUp={saveSelection}
          onMouseUp={saveSelection}
          role="textbox"
          suppressContentEditableWarning
          sx={{
            "&:focus": { outline: "2px solid #1976d2", outlineOffset: -2 },
            "& ol, & ul": { pl: 3 },
            "& p": { mb: 1, mt: 0 },
            height: maxHeight ? maxHeight : minHeight,
            maxHeight,
            minHeight,
            overflowY: "auto",
            px: 2,
            py: 1.5,
            whiteSpace: "normal",
          }}
        />
      </Paper>
    </Box>
  );
}

function BlogPreview(props: {
  blog: Pick<AdminBlog, "title" | "description" | "content" | "imageUrl" | "isActive"> | null;
}) {
  const { blog } = props;

  if (!blog) return null;

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100%" }}>
      {blog.imageUrl ? (
        <Box
          component="img"
          src={blog.imageUrl}
          alt={stripHtml(blog.title)}
          sx={{
            aspectRatio: "16 / 9",
            bgcolor: "#f3f4f6",
            display: "block",
            objectFit: "cover",
            width: "100%",
          }}
        />
      ) : null}
      <Box sx={{ px: { xs: 2, sm: 3 }, py: 3 }}>
        <Stack spacing={1.25} sx={{ mb: 2.5 }}>
          <Chip
            color={blog.isActive === false ? "default" : "success"}
            label={blog.isActive === false ? "Inactive" : "Active"}
            size="small"
            sx={{ alignSelf: "flex-start" }}
            variant={blog.isActive === false ? "outlined" : "filled"}
          />
          <Box
            component="h1"
            sx={{
              "& *": { color: "inherit", fontSize: "inherit", lineHeight: "inherit", margin: 0 },
              color: "#111827",
              fontSize: 34,
              fontWeight: 850,
              lineHeight: 1.15,
            }}
            dangerouslySetInnerHTML={{ __html: blog.title || "Untitled" }}
          />
          {/* {blog.description ? (
            <Box
              sx={{
                "& *": { color: "inherit", fontSize: "inherit", lineHeight: "inherit", margin: 0 },
                color: "text.secondary",
                fontSize: 16,
                lineHeight: 1.6,
              }}
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          ) : null} */}
        </Stack>

        <Box
          sx={{
            "& a": { color: "#1565c0", textDecoration: "underline" },
            "& h1": { color: "#111827", fontSize: 30, lineHeight: 1.2, mb: 1.5, mt: 0 },
            "& h2": { color: "#111827", fontSize: 24, lineHeight: 1.25, mb: 1, mt: 3 },
            "& h3": { color: "#1f2937", fontSize: 19, lineHeight: 1.3, mb: 0.75, mt: 2 },
            "& img": { borderRadius: 1, display: "block", height: "auto", maxWidth: "100%" },
            "& li": { mb: 0.75 },
            "& ol, & ul": { mb: 2, pl: 3 },
            "& p": { color: "#374151", fontSize: 15, lineHeight: 1.75, mb: 1.5, mt: 0 },
            "& table": {
              borderCollapse: "collapse",
              display: "block",
              mb: 2.5,
              overflowX: "auto",
              width: "100%",
            },
            "& td, & th": {
              border: "1px solid #d1d5db",
              color: "#374151",
              fontSize: 14,
              lineHeight: 1.5,
              minWidth: 120,
              px: 1.5,
              py: 1,
              verticalAlign: "top",
            },
            "& tr:first-of-type td, & th": {
              bgcolor: "#f8fafc",
              color: "#111827",
              fontWeight: 750,
            },
          }}
          dangerouslySetInnerHTML={{ __html: blog.content || "" }}
        />
      </Box>
    </Box>
  );
}

export default function AdminBlogs() {
  const { enqueueSnackbar } = useSnackbar();
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dialogState, setDialogState] = useState<BlogDialogState | null>(null);
  const [formValues, setFormValues] = useState<AdminBlogFormValues>(DEFAULT_FORM_VALUES);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [previewBlog, setPreviewBlog] = useState<Pick<AdminBlog, "title" | "description" | "content" | "imageUrl" | "isActive"> | null>(null);

  const dialogTitle = dialogState?.mode === "edit" ? "Edit Blog" : "Create Blog";
  const editingImageUrl = dialogState?.mode === "edit" ? dialogState.blog.imageUrl ?? "" : "";

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getAdminBlogs({
        page: page + 1,
        limit: rowsPerPage,
      });
      setBlogs(result.blogs);
      setTotalCount(
        Number(
          result.pagination.total ??
          result.pagination.totalItems ??
          result.blogs.length,
        ),
      );
    } catch (fetchError) {
      setError(readErrorMessage(fetchError));
      setBlogs([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  }, [page, rowsPerPage]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const visibleEmptyRows = useMemo(
    () => (loading ? rowsPerPage : Math.max(0, rowsPerPage - blogs.length)),
    [blogs.length, loading, rowsPerPage],
  );

  const openCreateDialog = () => {
    setDialogState({ mode: "create", blog: null });
    setFormValues(DEFAULT_FORM_VALUES);
    setImagePreview("");
  };

  const openEditDialog = (blog: AdminBlog) => {
    setDialogState({ mode: "edit", blog });
    setFormValues(buildFormValues(blog));
    setImagePreview("");
  };

  const openFormPreview = () => {
    setPreviewBlog({
      title: formValues.title,
      description: formValues.description,
      content: formValues.content,
      imageUrl: imagePreview || editingImageUrl,
      isActive: formValues.isActive,
    });
  };

  const closeDialog = () => {
    if (saving) return;
    resetDialog();
  };

  const resetDialog = () => {
    setDialogState(null);
    setFormValues(DEFAULT_FORM_VALUES);
    setImagePreview("");
  };

  const updateField = (
    field: keyof Omit<AdminBlogFormValues, "image" | "isActive">,
    value: string,
  ) => {
    setFormValues((current) => ({ ...current, [field]: value }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setFormValues((current) => ({ ...current, image: file }));
    setImagePreview((currentPreview) => {
      if (currentPreview) URL.revokeObjectURL(currentPreview);
      return file ? URL.createObjectURL(file) : "";
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dialogState) return;

    if (
      !stripHtml(formValues.title).trim() ||
      !stripHtml(formValues.description).trim() ||
      !stripHtml(formValues.content).trim()
    ) {
      enqueueSnackbar("Title, description, and content are required.", { variant: "warning" });
      return;
    }

    if (dialogState.mode === "create" && !formValues.image) {
      enqueueSnackbar("Please select a blog image.", { variant: "warning" });
      return;
    }

    setSaving(true);
    try {
      if (dialogState.mode === "edit") {
        await updateAdminBlog(dialogState.blog._id, formValues);
        enqueueSnackbar("Blog updated.", { variant: "success" });
      } else {
        await createAdminBlog(formValues);
        enqueueSnackbar("Blog created.", { variant: "success" });
        setPage(0);
      }
      resetDialog();
      await fetchBlogs();
    } catch (saveError) {
      enqueueSnackbar(readErrorMessage(saveError), { variant: "error" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100%", p: { xs: 1.75, md: 3 } }}>
      <Stack spacing={2.5}>
        <Stack
          alignItems={{ xs: "stretch", sm: "center" }}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={1.5}
        >
          <Box>
            <Typography sx={{ color: "#111827", fontWeight: 800 }} variant="h4">
              Blogs
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Create, edit, and review all blog posts, including inactive posts.
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Refresh blogs">
              <span>
                <IconButton
                  aria-label="Refresh blogs"
                  disabled={loading}
                  onClick={fetchBlogs}
                  sx={{ bgcolor: "#ffffff", border: "1px solid #dbe2ea" }}
                >
                  <RefreshIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Button startIcon={<AddIcon />} onClick={openCreateDialog} variant="contained">
              New Blog
            </Button>
          </Stack>
        </Stack>

        {error ? <Alert severity="error">{error}</Alert> : null}

        <Paper sx={{ borderRadius: 2, boxShadow: "none", overflow: "hidden" }}>
          <TableContainer>
            <Table sx={{ minWidth: 760, tableLayout: "fixed" }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f8fafc" }}>
                  <TableCell sx={{ width: 120 }}>Image</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell sx={{ width: 120 }}>Status</TableCell>
                  <TableCell sx={{ width: 220 }}>Created</TableCell>
                  <TableCell align="right" sx={{ width: 136 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell align="center" colSpan={5} sx={{ py: 8 }}>
                      <CircularProgress size={28} />
                    </TableCell>
                  </TableRow>
                ) : blogs.length === 0 ? (
                  <TableRow>
                    <TableCell align="center" colSpan={5} sx={{ py: 8 }}>
                      <Typography color="text.secondary">No blogs found</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  blogs.map((blog) => (
                    <TableRow hover key={blog._id} sx={{ height: 92 }}>
                      <TableCell>
                        {blog.imageUrl ? (
                          <Box
                            component="img"
                            src={blog.imageUrl}
                            alt={stripHtml(blog.title)}
                            sx={{
                              bgcolor: "#f3f4f6",
                              borderRadius: 1,
                              display: "block",
                              height: 64,
                              objectFit: "cover",
                              width: 84,
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              alignItems: "center",
                              bgcolor: "#f3f4f6",
                              borderRadius: 1,
                              color: "text.secondary",
                              display: "flex",
                              height: 64,
                              justifyContent: "center",
                              width: 84,
                            }}
                          >
                            <ImageOutlinedIcon fontSize="small" />
                          </Box>
                        )}
                      </TableCell>
                      <TableCell sx={{ minWidth: 0, pr: 4 }}>
                        <Typography noWrap sx={{ fontWeight: 750 }} variant="body2">
                          {stripHtml(blog.title) || "Untitled"}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{
                            display: "-webkit-box",
                            lineHeight: 1.45,
                            mt: 0.5,
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                          }}
                          variant="caption"
                        >
                          {stripHtml(blog.content || "")}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          color={blog.isActive === false ? "default" : "success"}
                          label={blog.isActive === false ? "Inactive" : "Active"}
                          size="small"
                          variant={blog.isActive === false ? "outlined" : "filled"}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography color="text.secondary" variant="body2">
                          {blog.createdAt ? formatUtcToIstDateTime(blog.createdAt) : "—"}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Stack direction="row" justifyContent="flex-end" spacing={0.5}>
                          <Tooltip title="Preview blog">
                            <IconButton aria-label={`Preview ${stripHtml(blog.title)}`} onClick={() => setPreviewBlog(blog)}>
                              <VisibilityOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Edit blog">
                            <IconButton aria-label={`Edit ${stripHtml(blog.title)}`} onClick={() => openEditDialog(blog)}>
                              <EditOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))
                )}
                {!loading && blogs.length > 0 && visibleEmptyRows > 0 ? (
                  <TableRow style={{ height: 73 * visibleEmptyRows }}>
                    <TableCell colSpan={5} />
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={totalCount}
            onPageChange={(_, nextPage) => setPage(nextPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(Number(event.target.value));
              setPage(0);
            }}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10, 25, 50, 100]}
          />
        </Paper>
      </Stack>

      <Dialog
        fullWidth
        maxWidth="md"
        onClose={closeDialog}
        open={Boolean(dialogState)}
        PaperProps={{ component: "form", onSubmit: handleSubmit }}
      >
        <DialogTitle sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          {dialogTitle}
          <IconButton aria-label="Close blog dialog" onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2.25} sx={{ pt: 0.5 }}>
            <RichTextEditor
              allowBorder={false}
              allowImages={false}
              label="Title"
              minHeight={58}
              onChange={(value) => updateField("title", value)}
              required
              toolbarMode="basic"
              value={formValues.title}
            />
            <RichTextEditor
              allowImages={false}
              label="Description"
              minHeight={92}
              onChange={(value) => updateField("description", value)}
              required
              toolbarMode="basic"
              value={formValues.description}
            />
            <Button
              onClick={openFormPreview}
              startIcon={<VisibilityOutlinedIcon />}
              sx={{ alignSelf: "flex-start" }}
              variant="outlined"
            >
              Preview
            </Button>
            <RichTextEditor
              label="Content"
              maxHeight={380}
              onChange={(value) => updateField("content", value)}
              required
              value={formValues.content}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formValues.isActive}
                  onChange={(event) => {
                    setFormValues((current) => ({
                      ...current,
                      isActive: event.target.checked,
                    }));
                  }}
                />
              }
              label="Active"
            />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button component="label" startIcon={<ImageOutlinedIcon />} variant="outlined">
                {formValues.image ? "Change Image" : "Upload Image"}
                <input accept="image/*" hidden onChange={handleImageChange} type="file" />
              </Button>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography color="text.secondary" noWrap variant="body2">
                  {formValues.image?.name || (editingImageUrl ? "Using current image" : "No image selected")}
                </Typography>
                {dialogState?.mode === "edit" ? (
                  <Typography color="text.secondary" variant="caption">
                    Leave unchanged to keep the existing blog image.
                  </Typography>
                ) : null}
              </Box>
            </Stack>
            {imagePreview || editingImageUrl ? (
              <Box
                component="img"
                src={imagePreview || editingImageUrl}
                alt="Blog preview"
                sx={{
                  alignSelf: "flex-start",
                  bgcolor: "#f3f4f6",
                  borderRadius: 1,
                  maxHeight: 220,
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            ) : null}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button disabled={saving} onClick={closeDialog}>
            Cancel
          </Button>
          <Button disabled={saving} type="submit" variant="contained">
            {saving ? <CircularProgress color="inherit" size={18} /> : "Save Blog"}
          </Button>
        </DialogActions>
      </Dialog>
      <Drawer
        anchor="right"
        onClose={() => setPreviewBlog(null)}
        open={Boolean(previewBlog)}
        slotProps={{
          paper: {
            sx: { width: { xs: "100%", sm: 560, md: 780 } },
          },
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            bgcolor: "background.paper",
            borderBottom: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Typography fontWeight={750} variant="subtitle1">
            Blog Preview
          </Typography>
          <IconButton aria-label="Close blog preview" onClick={() => setPreviewBlog(null)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ height: "100%", overflowY: "auto" }}>
          <BlogPreview blog={previewBlog} />
        </Box>
      </Drawer>
    </Box>
  );
}
