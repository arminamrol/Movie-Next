import Head from "next/head";

import { getPopularMovies } from "../../helper";
import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/sidebar/sidebar";
import Card from "@/components/movieDetail/card";

export default function Home(props) {
  const popularElements = props.pops.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      year={item.release_date}
      rate={item.vote_average}
      imgPath={item.poster_path}
      genre="its will be ok"
      id={item.id}
    />
  ));
  return (
    <>
      <Head>
        <title>Movie App Next</title>
        <meta name="description" content="Movie App For Sample" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-gray-900 ">
        <Header />
        <div className="flex">
          <SideBar />
          <div className="m-2 flex-1">
            <h3 className="">Popular</h3>

            <ScrollContainer className="flex gap-4 items-start h-auto overflow-x-scroll w-[100vw]	">
              {popularElements}
            </ScrollContainer>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const pops = await getPopularMovies();
    return {
      props: {
        pops,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
  }
};
