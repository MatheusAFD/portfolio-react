import { useState } from "react";
import classNames from "classnames";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  classNameSkeleton: string;
}

export function Image(props: ImageProps) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading && (
        <SkeletonTheme baseColor="#282162" highlightColor="#7562E0">
          <p>
            <Skeleton
              baseColor="#282162"
              className={props.classNameSkeleton}
              duration={1}
            />
          </p>
        </SkeletonTheme>
      )}

      <img
        src={props.src}
        alt={props.alt}
        onLoad={() => {
          setLoading(!loading);
        }}
        className={classNames(props.className, {
          hidden: loading === true,
          block: loading === false,
        })}
      />
    </>
  );
}
