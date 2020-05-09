import React, { useMemo, memo } from "react";
import { useTheme } from "../styles/use-theme";
import {
  ButtonKinds,
  NormalSizes,
  ButtonImportance,
} from "../utils/prop-types";
import { getButtonColors, getButtonSize } from "./styles";
import { Loading } from "../loading";

interface Props {
  kind?: ButtonKinds;
  importance?: ButtonImportance;
  size?: NormalSizes;
  fluid?: boolean;
  rounded?: boolean;
  icon?: React.ReactNode;
  iconRight?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button: React.FC<Props> = memo<Props>(
  ({
    kind = "default",
    importance = "high",
    size = "medium",
    onClick,
    fluid,
    icon,
    iconRight = false,
    loading = false,
    rounded = false,
    children,
    ...props
  }) => {
    const theme = useTheme();
    const colors = useMemo(() => getButtonColors(theme, kind, importance), [
      theme,
      kind,
      importance,
    ]);
    const sizes = useMemo(() => getButtonSize(size), [size]);

    return (
      <button
        className="btn"
        onClick={onClick}
        disabled={props.disabled || loading}
        {...props}
      >
        <span className="btn-content">
          {icon}
          {loading ? <Loading /> : children}
        </span>

        <style jsx>{`
        .btn {
          position: relative;
          display: block;
          padding: ${sizes.padding};
          font-size: ${sizes.font};
          box-sizing: border-box;
          background-color: ${
            ((importance == "high" || importance == "medium") && colors.bg) ||
            "transparent"
          };
          color: ${colors.fg};
          border: 1px solid ${
            ((importance == "high" || importance == "medium") &&
              colors.border) ||
            "transparent"
          };;
          border-radius: ${rounded ? "25px" : theme.layout.radius};
          transition: opacity 0.12s ease, background-color 0.12s ease, border-color 0.12s ease, color 0.12s ease, transform 0.12s ease;
          ${
            importance == "high" &&
            "box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);"
          }
          font-family: ${theme.font.sans};
          font-weight: 500;
          outline: none;
          height: ${sizes.height};
          min-width: ${sizes.minWidth};
          user-select: none;
          cursor: pointer;
          width: ${fluid ? "100%" : "auto"};
        }

        .btn:disabled {
          background: ${theme.colors.grey1};
          border-color: ${theme.colors.grey2};
          color: ${theme.colors.grey4};
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn:active:enabled, .btn:hover:enabled {
          ${importance == "low" && `background-color: ${colors.bg}`};
          ${importance == "low" && `border-color: ${colors.border}`};
        }

        .btn:hover:enabled {
          opacity: 0.8;
        }

        .btn:active:enabled {
          transform: scale(0.925);
          opacity: 1;
        }

        .btn::-moz-focus-inner {
          border: 0;
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${!icon ? "0" : "20px"};
          width: 100%;
        }

        .btn-content :global(svg) {
          position: absolute;
          left: ${iconRight ? "unset" : "15px"};
          right: ${iconRight ? "15px" : "unset"};
          margin-${iconRight ? "left" : "right"}: 10px;
          height: 15px;
          width: 15px;
          opacity: 0.7;
        }
      `}</style>
      </button>
    );
  }
);
