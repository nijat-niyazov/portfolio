import { Lock } from "@/assets/icons";
import { MotionLi, MotionUl } from "@/components/motionGenerator";
import { DetailsProps } from "@/containers/project";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const Details = ({ details: { stacks, category, images, url, repo } }: { details: DetailsProps }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start mb-14 ">
      {/* <MotionImage
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "keyframes" }}
        src={img}
        alt="project"
        width={400}
        height={400}
        className="grow w-full md:h-[300px] object-cover "
      /> */}

      <Carousel className="max-w-sm" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 bg-red-500">
                <Card>
                  <CardContent className="flex min-w-[370px] items-center justify-center p-6">
                    <Image src={images[index]} alt="project" width={400} height={400} className="grow w-full md:h-[300px] object-cover " />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="md:w-3/5 ">
        <h3 className="font-semibold text-xl pb-3 block border-b-2 border-gray-600">Details: </h3>

        <MotionUl role="list" className="grid gap-2 mt-4 opacity-80 pl-1" initial="hidden" animate="visible">
          <MotionLi className="flex items-center gap-2">
            <span className="font-semibold">Category:</span>
            <span>{category.join(", ")}</span>
          </MotionLi>
          <MotionLi className="flex items-center gap-2">
            <span className="font-semibold">Project URL:</span>
            <Link href={url} target="_blank" className="flex items-start gap-2 text-primary">
              {url} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </MotionLi>
          <MotionLi className="flex items-center gap-2  ">
            <span className="font-semibold">Github code:</span>
            {!repo ? (
              <Fragment>
                Private repo <Lock />
              </Fragment>
            ) : (
              <Link href={repo} className="flex items-start gap-2 text-primary overflow-hidden">
                <span className="truncate max-w-[235px]">{repo}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </MotionLi>

          <MotionLi>
            <p className="font-semibold mb-1">Used Stacks:</p>
            <ul className="flex flex-wrap text-black font-semibold gap-3 ">
              {stacks.map((stack, index) => (
                <MotionLi
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: [1, 2, 3, 2, 1],
                    transition: { delay: index * 0.1, duration: 1, type: "spring", stiffness: 250 },
                  }}
                  whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
                  className="rounded-full px-3 py-1 text-sm bg-primary cursor-default"
                >
                  {stack}
                </MotionLi>
              ))}
            </ul>
          </MotionLi>
        </MotionUl>
      </div>
    </div>
  );
};

export default Details;
