import { memo, forwardRef } from "react";
import { useTheme } from "components/styles/use-theme";

interface Props {
  href?: string;
}

export const BreadcrumbItem: React.FC<Props> = memo<Props>(
  forwardRef<any, Props>(({ children, ...props }, ref) => {
    const theme = useTheme();

    return (
      <span>
        <a ref={ref} {...props}>
          {children}
        </a>

        <style jsx>{`
          a {
            color: ${theme.colors.foreground};
            text-decoration: none;
            transition: opacity 0.2s ease;
          }

          a[href]:hover {
            opacity: 0.6;
          }
        `}</style>
      </span>
    );
  })
);
