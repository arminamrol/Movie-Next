import Image from "next/image";

const Card = (props) => {
  return (
    <div className="bg-gray-800 rounded-md shadow-lg my-2 flex gap-2 flex-col items-center h-[550px] w-[250px] min-w-[15%] ">
      <Image
        src={`https://image.tmdb.org/t/p/original/${props.imgPath}`}
        width={250}
        height={300}
        alt={props.title}
        className=" rounded-t-md"
      />
      <h2>{props.title}</h2> <h4>{props.year.slice(0, 4)}</h4>
      <span className="">{props.genre}</span>
      <span>{props.rate}</span>
    </div>
  );
};

export default Card;
