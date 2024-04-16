export default function CircleButton({
  src,
  className,
  onClick,
  imageClassName,
}) {
  return (
    <button
      className={
        "flex text-white gap-2 justify-center items-center px-4 rounded-full p-2 hover:scale-105 animation-all duration-300 " +
        className
      }
      onClick={onClick}
    >
      <img
        alt=""
        src={src}
        className={"invert " + (imageClassName ?? "")}
      ></img>
    </button>
  );
}
