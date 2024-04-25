import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface IPostProps {
  date: string;
  title: string;
  description: string;
  liked: boolean;
}

export function Post({ date, title, description, liked }: IPostProps) {
  const [heartFilled, setHeartFilled] = useState(liked);

  function handleHeartFill() {
    setHeartFilled(!heartFilled);
  }

  return (
    <article className="border-solid border-2 rounded-md duration-150 focus:outline-none border-dark-30 hover:transition-all transition-all hover:border-primary p-4 my-8">
      <div className="flex justify-between">
        <p className="text-primary">{date}</p>

        <div onClick={handleHeartFill} className="cursor-pointer">
          {heartFilled ? (
            <BsHeart size={25} color={"#E07B67"} />
          ) : (
            <BsHeartFill size={25} color={"#E07B67"} />
          )}
        </div>
      </div>
      <div>
        <h2 className="my-4 text-dark-60 text-2xl">{title}</h2>
        <p className="text-dark-50 text-xl">{description}</p>
      </div>
    </article>
  );
}
