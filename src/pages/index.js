import { supabase } from "../../client/client";
import { IoIosArrowBack } from "react-icons/io";
import { RiToggleLine, RiToggleFill } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";
import Layout from "@/container/Layout";

export default function Home({ products, error }) {
  console.log(products, error);

  // const addProductHandler = async () => {
  //   const { data, error } = await supabase
  //     .from("products")
  //     .insert({
  //       title: "title 2",
  //       description: "desc 2",
  //       price: 2444444,
  //       isLiked: false,
  //     })
  //     .single();
  //   console.log(data, error);
  // };

  // const singupHandler = async () => {
  //   const { user, session, error } = await supabase.auth.signUp({
  //     email: "rasouljazini97@gmail.com",
  //     password: "example-password",
  //   });
  //   console.log(user, session, error);
  // };

  // const signinHandler = async () => {
  //   const { user, error } = await supabase.auth.signIn({
  //     email: "rasouljazini97@gmail.com",
  //     password: "example-password",
  //   });
  //   console.log(user, error);
  // };

  // const signoutHandler = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   console.log(error);
  // };

  return (
    <Layout>
      <main className="container bg-gray-50 min-h-screen px-6 my-10">
        <div className="grid grid-cols-12 gap-x-2 text-gray-800">
          <aside className="col-span-3">
            <div className="border border-gray-300 rounded-lg px-4 py-6">
              <h3 className="mb-4 text-lg font-medium ">فیلترها</h3>
              <ul className="flex flex-col divide-y">
                <li className="flex justify-between items-center py-3">
                  <div className="text-sm font-medium">برند</div>
                  <div>
                    <IoIosArrowBack className="text-gray-400" />
                  </div>
                </li>
                <li className="flex justify-between items-center py-3">
                  <div className="text-sm font-medium">محدوده قیمت</div>
                  <div>
                    <IoIosArrowBack className="text-gray-400" />
                  </div>
                </li>
                <li className="flex justify-between items-center py-3">
                  <div className="text-sm font-medium">فقط کالاهای موجود</div>
                  <div className="cursor-pointer">
                    {/* <RiToggleLine className="text-gray-400" size="38" /> */}
                    <RiToggleFill className="text-cyan-400" size="38" />
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <section className="col-span-9">
            <div className="flex gap-x-2 items-center border-b pb-3 border-gray-200">
              <div className="flex gap-x-2 items-center text-xs text-gray-700 font-medium">
                <HiOutlineAdjustments size="18" />
                <span>مرتب سازی:</span>
              </div>
              <div className="flex gap-x-4 text-xs text-gray-500 font-medium">
                <span>گران ترین</span>
                <span>ارزان ترین</span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-1 mt-8">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-2 py-4 border border-gray-200 rounded-sm">
                <div className="aspect-auto">
                  <img
                    src="./assets/images/mobile-01.jpg"
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="line-clamp-2 text-gray-700 text-sm font-medium">
                    گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت
                    ظرفیت 128 گیگابایت و رم 6 گیگابایت
                  </h2>
                </div>
                <div className="mt-4 text-sm font-medium text-left">
                  <span>6,500,000 تومان</span>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-2 py-4 border border-gray-200 rounded-sm">
                <div className="aspect-auto">
                  <img
                    src="./assets/images/mobile-01.jpg"
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="line-clamp-2 text-gray-700 text-sm font-medium">
                    گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت
                    ظرفیت 128 گیگابایت و رم 6 گیگابایت
                  </h2>
                </div>
                <div className="mt-4 text-sm font-medium text-left">
                  <span>6,500,000 تومان</span>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-2 py-4 border border-gray-200 rounded-sm">
                <div className="aspect-auto">
                  <img
                    src="./assets/images/mobile-01.jpg"
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="line-clamp-2 text-gray-700 text-sm font-medium">
                    گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت
                    ظرفیت 128 گیگابایت و رم 6 گیگابایت
                  </h2>
                </div>
                <div className="mt-4 text-sm font-medium text-left">
                  <span>6,500,000 تومان</span>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-2 py-4 border border-gray-200 rounded-sm">
                <div className="aspect-auto">
                  <img
                    src="./assets/images/mobile-01.jpg"
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="line-clamp-2 text-gray-700 text-sm font-medium">
                    گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت
                    ظرفیت 128 گیگابایت و رم 6 گیگابایت
                  </h2>
                </div>
                <div className="mt-4 text-sm font-medium text-left">
                  <span>6,500,000 تومان</span>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-2 py-4 border border-gray-200 rounded-sm">
                <div className="aspect-auto">
                  <img
                    src="./assets/images/mobile-01.jpg"
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="line-clamp-2 text-gray-700 text-sm font-medium">
                    گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت
                    ظرفیت 128 گیگابایت و رم 6 گیگابایت
                  </h2>
                </div>
                <div className="mt-4 text-sm font-medium text-left">
                  <span>6,500,000 تومان</span>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-2 py-4 border border-gray-200 rounded-sm">
                <div className="aspect-auto">
                  <img
                    src="./assets/images/mobile-01.jpg"
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="line-clamp-2 text-gray-700 text-sm font-medium">
                    گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت
                    ظرفیت 128 گیگابایت و رم 6 گیگابایت
                  </h2>
                </div>
                <div className="mt-4 text-sm font-medium text-left">
                  <span>6,500,000 تومان</span>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-2 py-4 border border-gray-200 rounded-sm">
                <div className="aspect-auto">
                  <img
                    src="./assets/images/mobile-01.jpg"
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="line-clamp-2 text-gray-700 text-sm font-medium">
                    گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت
                    ظرفیت 128 گیگابایت و رم 6 گیگابایت
                  </h2>
                </div>
                <div className="mt-4 text-sm font-medium text-left">
                  <span>6,500,000 تومان</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let { data: products, error } = await supabase.from("products").select("*");

  return {
    props: {
      products,
      error,
    },
  };
};
