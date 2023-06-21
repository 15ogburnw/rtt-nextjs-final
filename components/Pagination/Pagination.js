import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Pagination({
  setSize,
  currentSize,
  totalPages,
  isLoading,
  currentPage,
}) {
  return (
    <>
      <div className="flex flex-row rounded-2xl p-6 bg-base-accent items-center justify-start border-2 border-primary-800 mb-8">
        <button className="rounded-2xl flex-initial items-center bg-primary-700  border-4  hover:bg-primary-400    my-auto text-2xl shadow-md shadow-primary-600  border-primary-700  transition px-3 h-12 mr-4 text-primary-700 text-white">
          <HiChevronLeft className=" h-8 w-auto" />
        </button>

        <button className="rounded-full text-white transition flex-initial items-center hover:bg-primary-400 border-4 border-primary-700  bg-primary-700 font-bold m-2 text-xl shadow-md shadow-primary-600 transition  h-12 w-12">
          1
        </button>
        <button className="rounded-full text-white transition flex-initial items-center hover:bg-primary-400 border-4 border-primary-700  bg-primary-700 font-bold m-2 text-xl shadow-md shadow-primary-600 transition  h-12 w-12">
          2
        </button>
        <button className="rounded-full text-white transition flex-initial items-center hover:bg-primary-400 border-4 border-primary-700  bg-primary-700 font-bold m-2 text-xl shadow-md shadow-primary-600 transition  h-12 w-12">
          3
        </button>

        <button className="rounded-2xl flex-initial items-center bg-primary-700  border-4  hover:bg-primary-400    my-auto text-2xl shadow-md shadow-primary-600  border-primary-700  transition px-3 h-12 ml-4 text-primary-700 text-white">
          <HiChevronRight className=" h-8 w-auto" />
        </button>
      </div>
    </>
  );
}
