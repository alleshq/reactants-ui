import React, { useState, useRef, useEffect, memo } from "react";
import { useTheme } from "../styles/use-theme";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  size?: number | string;
  className?: string;
}

export const Avatar: React.FC<Props> = memo<Props>(
  ({ src, size = 80, className, ...props }) => {
    const theme = useTheme();
    const [ready, setReady] = useState(false);

    if (typeof size == "number") size = `${size}px`;
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
      imgRef?.current?.complete && setReady(true);
    }, []);

    return (
      <span className={`avatar ${className}`}>
        <img
          src={src}
          ref={imgRef}
          onLoad={() => setReady(true)}
          className={`avatar-img ${ready ? "ready" : ""}`}
          {...props}
        />

        <style jsx>{`
          .avatar {
            overflow: hidden;
            border-radius: 100%;
            display: inline-block;
            border: 1px solid ${theme.palette.grey2};
            background-color: ${theme.palette.grey1};
            transition: border 0.2s ease, background-color 0.2s ease;
            width: ${size};
            height: ${size};
          }

          .avatar-img {
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.2s ease-in;
          }

          .avatar-img.ready {
            opacity: 1;
          }
        `}</style>
      </span>
    );
  }
);
