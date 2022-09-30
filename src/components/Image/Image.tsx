import { useState } from "react";
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
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton
              baseColor="#fff"
              className={props.classNameSkeleton}
              duration={2}
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
        className={props.className}
      />
    </>
  );
}
