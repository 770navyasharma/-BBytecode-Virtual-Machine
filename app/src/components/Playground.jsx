import React, { useState, useRef, useEffect } from "react";

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

  const editorRef = useRef(null);
  const lineRef = useRef(null);

  const handleRun = () => {
    alert("Execution logic goes here");
  };

  const handleClear = () => {
    setCode("");
  };

  const lineCount = code.split("\n").length;

  // Sync scroll on textarea scroll
  const syncScroll = () => {
    if (editorRef.current && lineRef.current) {
      lineRef.current.scrollTop = editorRef.current.scrollTop;
    }
  };

  // Attach scroll listener once after mount
  useEffect(() => {
    const textarea = editorRef.current;
    if (textarea) {
      textarea.addEventListener("scroll", syncScroll);
    }
    return () => {
      if (textarea) {
        textarea.removeEventListener("scroll", syncScroll);
      }
    };
  }, []);

  return (
    <section className="bg-[#FFEED7] py-16 px-4" id="playground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-black text-3xl font-bold">Playground</h2>
          <div className="flex gap-4">
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

        {/* Editor Container */}
        <div className="bg-[#2e2e2e] text-white rounded-lg shadow-lg overflow-hidden flex border border-[#444] h-[400px]">
          {/* Line Numbers */}
          <div
            ref={lineRef}
            className="px-3 py-4 text-right text-[#888] font-mono text-sm select-none bg-[#252525] border-r border-[#444] overflow-hidden"
            style={{ minWidth: "3rem", height: "100%" }}
          >
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} className="h-[24px] leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Editor */}
          <textarea
            ref={editorRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full px-4 py-4 font-mono text-sm bg-[#2e2e2e] text-[#d4d4d4] outline-none resize-none leading-6 overflow-y-scroll"
            spellCheck={false}
            style={{ lineHeight: "24px" }}
          />
        </div>
      </div>
    </section>
  );
}