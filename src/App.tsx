import "./App.css";
import { createNumberRangeIterator } from "./numberRangeIterator";
import { createNumberGenerator } from "./numberGenerator";

function App() {
  const iteratorRange = createNumberRangeIterator(0, 27, 3);
  const generatorRange = createNumberGenerator(0, 12, 2);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full">
        <main className="p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-500 pb-2">
              Iterator Range
            </h2>
            <ul className="grid grid-cols-3 gap-4">
              {Array.from(iteratorRange).map((value) => (
                <li
                  className="flex items-center justify-center h-12 bg-blue-100 border border-blue-400 text-blue-800 rounded-md text-lg font-medium"
                  key={value}
                >
                  {value}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-red-500 pb-2">
              Generator Range
            </h2>
            <ul className="grid grid-cols-3 gap-4">
              {Array.from(generatorRange).map((value) => (
                <li
                  className="flex items-center justify-center h-12 bg-red-100 border border-red-400 text-red-800 rounded-md text-lg font-medium"
                  key={value}
                >
                  {value}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
