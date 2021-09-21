import cn from "classnames";
import "./picture.scss";

const styles = {
  rounded: "rounded",
  custom: "picture",
  size: {
    sm: "w-1 h1",
    base: "w-2 h-2",
    lg: "w-3 h-3 ",
    xl: "w-4  h-4",
  },
};
const Picture = ({ rounded, size }) => {
  return (
    <img
      className={cn(
        rounded && styles.rounded,
        styles.size[size],
        styles.custom
      )}
      src="https://pbs.twimg.com/profile_images/1304029632946229248/odzWTPHB_400x400.jpg"
      alt="img"
    />
  );
};

export default Picture;
