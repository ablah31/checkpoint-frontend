export default function AddCountryForm () {

  return (
    <form  className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
         // value={name}
         // onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="code" className="block text-gray-700">Code:</label>
        <input
          type="text"
          id="code"
         // value={code}
         // onChange={(e) => setCode(e.target.value)}
          className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="emoji" className="block text-gray-700">Emoji:</label>
        <input
          type="text"
          id="emoji"
          //value={emoji}
          //onChange={(e) => setEmoji(e.target.value)}
          className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center">Add Country</button>
    </form>
  );
};


