import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-zinc-50 text-center text-surface border ">
      {/* <div className="container p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">Footer Text</h5>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur tempora magni, omnis nam cumque aspernatur, natus
              impedit debitis quam quidem harum non eos tempore quod deserunt
              amet cum! Officiis error nobis et sit, ducimus vel debitis a
              mollitia! Odio, incidunt. Dolorem voluptatem perspiciatis omnis
              enim aliquid corrupti eaque veritatis assumenda.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">Footer Text</h5>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur tempora magni, omnis nam cumque aspernatur, natus
              impedit debitis quam quidem harum non eos tempore quod deserunt
              amet cum! Officiis error nobis et sit, ducimus vel debitis a
              mollitia! Odio, incidunt. Dolorem voluptatem perspiciatis omnis
              enim aliquid corrupti eaque veritatis assumenda.
            </p>
          </div>
        </div>
      </div> */}
      <div className="w-full bg-black/5 p-4 text-center">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
