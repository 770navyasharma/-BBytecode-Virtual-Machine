import React, { useState } from "react";

export default function Playground() {
  const [code, setCode] = useState(`# My first Namaste++ program

display("Namaste Duniya")

manlo naam = read("Apna naam likho: ") 

agar (naam == "Navya"):
    display("Swagat hai Navya!")    
warna_agar (naam == "Aditi"):
    display("Namaste Aditi ji!")
warna:
    display("Namaskar " + naam)

manlo number = 0

jab_tak(number < 3):
    display("Hello " + naam)
    number = number + 1

define_work greet(naam) {
    display("Aapka naam hai: " + naam)
}

greet(naam)

manlo list1 = ["khush raho", "mehnat karo", "haste raho"]

har element ke_liye in list1 {
    display(element)
}

manlo person = {"name": naam, "age": 10}
display("Age of",person["name"],"is",person["age"])

display("Namaste Duniya")

manlo name = read("Apna naam likho: ") 

agar (naam == "Navya"):
    display("Swagat hai Navya!")    
warna_agar (naam == "Aditi"):
    display("Namaste Aditi ji!")
warna:
    display("Namaskar " + naam)

manlo number = 0

jab_tak(number < 3):
    display("Hello " + naam)
    number = number + 1

define_work greet(naam) {
    display("Aapka naam hai: " + naam)
}

greet(naam)

manlo list1 = ["khush raho", "mehnat karo", "haste raho"]

for each element in(0 se 3) 
    display(sukh_vachan[line])

manlo person = {"name": naam, "age": 10}
display("Age of",person["name"],"is",person["age"])`);

  const handleRun = () => {
    alert("Execution logic goes here");
  };

  const handleClear = () => {
    setCode("");
  };

  const lines = code.split("\n");

  return (
    <section className="bg-[#FFEED7] py-16 px-4 min-h-screen" id="playground">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
        <div>
        <h2 className="text-black text-3xl font-bold ">Playground</h2>
        </div>
        <div className="flex justify-end gap-4 mb-4">
          <button
            onClick={handleRun}
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-semibold px-5 py-2 rounded"
          >
            Run
          </button>
          <button
            onClick={handleClear}
            className="bg-[#ffe5e5] hover:bg-[#ffcccc] text-red-500 font-semibold px-5 py-2 rounded"
          >
            Clear
          </button>
        </div>
</div>
        <div className="bg-[#2e2e2e] text-white rounded-lg shadow-lg overflow-hidden flex h-[400px]">
          {/* Line Numbers */}
          <div className="py-4 px-3 text-right text-[#888] font-mono text-sm select-none bg-[#252525] border-r border-[#444]">
            {Array.from({ length: 100 }).map((_, index) => (
              <div key={index} className="leading-6">{index + 1}</div>
            ))}
          </div>

          {/* Code Editor */}
          <div className="overflow-y-auto w-full">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full px-4 py-4 font-mono text-sm bg-[#2e2e2e] text-[#d4d4d4] outline-none resize-none leading-6"
              spellCheck={false}
              style={{
                minHeight: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
