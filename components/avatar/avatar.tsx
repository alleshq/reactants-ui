import React, { useState, useRef, useEffect } from "react";
import useTheme from "../styles/use-theme";
import withDefaults from "../utils/with-defaults";

interface Props {
  src?: string;
  alt?: string;
  size?: number | string;
  className?: string;
}

const defaultProps = {
  size: 80 as number | string,
  className: "",
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type AvatarProps = Props & typeof defaultProps & NativeAttrs;

const Avatar: React.FC<React.PropsWithChildren<AvatarProps>> = ({
  src,
  alt,
  size,
  className,
  ...props
}) => {
  const { palette } = useTheme();
  const [ready, setReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    imgRef?.current?.complete && setReady(true);
  }, []);

  return (
    <span
      key={src}
      style={{
        width: size,
        height: size,
      }}
      {...props}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setReady(true)}
        height={size}
        width={size}
        className={ready ? "ready" : ""}
      />
      <style jsx>{`
        span {
          border-radius: 100%;
          display: inline-block;
          border: 1px solid ${palette.grey2};
          overflow: hidden;
          background-color: ${palette.grey1};
          transition: border 0.2s ease, background-color 0.2s ease;
        }

        img {
          width: 100%;
          height: 100%;
        }

        img {
          opacity: 0;
          transition: opacity 0.2s ease-in;
        }
        img.ready {
          opacity: 1;
        }
      `}</style>
    </span>
  );
};

export default withDefaults(Avatar, defaultProps);
