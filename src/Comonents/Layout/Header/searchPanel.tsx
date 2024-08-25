import { SearchNormal1 } from "iconsax-react"

const SearchPanel = () => {
    return (
        <div className="w-full h-10 lg:h-14 relative">
            <SearchNormal1 className="w-5 h-5 text-blue-500 absolute top-1/2 -translate-y-1/2 left-6" />
            <input
                className="bg-gray-100 w-full h-full rounded-full pl-16 outline-none duration-200 focus:ring-4 focus:ring-blue-100 text-sm text-blue-500 placeholder:text-blue-300"
                placeholder="Search for something"
            />
        </div>
    )
}

export default SearchPanel