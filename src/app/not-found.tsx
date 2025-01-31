import NotFound from "@components/sections/NotFound/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Не найдено",
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