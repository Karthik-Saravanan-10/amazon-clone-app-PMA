import Card from "@/components/Cards";
import HeaderPage from "@/components/HeaderPage";
import {
  homePageCategory,
  homePageSideNavCategory,
} from "@/components/lists/informations";

export default function Home() {
  return (
    <>
      <header>
        <HeaderPage />
        <div className="bottomHeader border-b-2 mx-4">
          <div className="h-10 ml-6  flex items-center gap-10 font-bold text-sm">
            {homePageCategory.map((p) => {
              return <p>{p}</p>;
            })}
          </div>
        </div>
      </header>

      <main className="p-4">
        <h1 className="font-bold text-3xl mb-1">Amazon Hot New Releases</h1>
        <p className="text-sm">
          Our bestselling new and future releases. Updated frequently.
        </p>
        <div className="flex">
          <section className="flex">
            <div className="w-48 border-r-4 text-sm mt-4 leading-6">
              <p>
                <b>Any Department</b>
              </p>
              <div className="pl-2 font-medium">
                {homePageSideNavCategory.map((p) => {
                  return <p>{p}</p>;
                })}
              </div>
            </div>
          </section>
          <section className="m-4 flex flex-col gap-10">
            <div className="">
              <div className="flex gap-2 items-center">
                <h1 className="font-bold  text-3xl">
                  Hot New Releases in Electronics
                </h1>
                <p className="text-cyan-700 mt-2 text-sm">See More</p>
              </div>
              <Card />
            </div>

            <div className="">
              <div className="flex gap-2 items-center">
                <h1 className="font-bold  text-3xl">
                  Hot New Releases in Home & Kitchen
                </h1>
                <p className="text-cyan-700 mt-2 text-sm">See More</p>
              </div>
              <Card />
            </div>

            <div className="">
              <div className="flex gap-2 items-center">
                <h1 className="font-bold  text-3xl">
                  Hot New Releases in Health & Personal Care
                </h1>
                <p className="text-cyan-700 mt-2 text-sm">See More</p>
              </div>
              <Card />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
