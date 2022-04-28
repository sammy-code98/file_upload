export default function DisplayUpload() {
  return (
    <div className="container flex items-center justify-center h-screen">
      <input
        className="border border-blue-700 mb-12  px-4 py-2  rounded-md md:px-12"
        type="file"
        multiple
        accept="image/*"
      />
    </div>
  );
}
