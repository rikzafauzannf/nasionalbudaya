import MapsLeaflet from "@/components/Maps/MapsLeaflet";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>Landing</h1>
        <div className="w-1/3 overflow-hidden">
          <MapsLeaflet />
        </div>
      </div>
    </>
  );
}
