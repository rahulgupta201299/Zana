import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbRouteState = Record<string, unknown>;

export type AppBreadcrumbItem = {
  label: string;
  to?: string;
  state?: BreadcrumbRouteState;
};

type AppBreadcrumbProps = {
  items: AppBreadcrumbItem[];
  className?: string;
};

const normalizeLabel = (value: string) => value.replace(/-/g, " ").trim();

export default function AppBreadcrumb({
  items,
  className = "",
}: AppBreadcrumbProps) {
  const visibleItems = items.filter((item) => item.label.trim());

  if (!visibleItems.length) return null;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="text-xs md:text-sm text-white/55">
        {visibleItems.map((item, index) => {
          const isCurrentPage = index === visibleItems.length - 1;
          const label = normalizeLabel(item.label);

          return (
            <Fragment key={`${label}-${index}`}>
              <BreadcrumbItem>
                {isCurrentPage ? (
                  <BreadcrumbPage className="max-w-[220px] truncate text-white">
                    {label}
                  </BreadcrumbPage>
                ) : item.to ? (
                  <BreadcrumbLink
                    asChild
                    className="text-white/60 hover:text-yellow-400"
                  >
                    <Link to={item.to} state={item.state}>
                      {label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <span className="text-white/50">{label}</span>
                )}
              </BreadcrumbItem>
              {index < visibleItems.length - 1 && (
                <BreadcrumbSeparator className="text-white/35" />
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
