import React, {
  useState,
  useRef,
  useEffect,
  memo,
  HTMLAttributes,
} from "react";
import cx from "classnames";
import styles from "./avatar.module.css";

interface GenericAvatarProps extends HTMLAttributes<any> {
  src?: string;
  size?: number | string;
}

export const GenericAvatar: React.FC<GenericAvatarProps> = memo<
  GenericAvatarProps
>(({ src, size = 80, ...props }) => {
  const [ready, setReady] = useState(false);

  if (typeof size == "number") size = `${size}px`;
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    imgRef?.current?.complete && setReady(true);
  }, []);

  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size, ...props.style }}
    >
      <img
        src={src}
        ref={imgRef}
        onLoad={() => setReady(true)}
        className={cx(styles["avatar-img"], { [styles.ready]: ready })}
      />
    </span>
  );
});

interface Props {
  username?: string;
  size?: number;
}

export const Avatar: React.FC<Props> = memo<Props>(
  ({ username, size = 80, ...props }) => {
    const s = size < 50 ? 50 : size > 500 ? 500 : size * 2;

    return (
      <>
        <GenericAvatar
          src={`https://avatar.alles.cx/u/${username}?size=${s}`}
          size={size}
          {...props}
        />
      </>
    );
  }
);
