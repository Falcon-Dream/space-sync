import NotFound from "@components/sections/NotFound/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

const NotFoundPage = () => {
  return (
    <section className="section-not-found">
      <div className="container">
        <NotFound />
      </div>
    </section>
  );
};

export default NotFoundPage;
