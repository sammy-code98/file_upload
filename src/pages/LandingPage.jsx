import {Link} from 'react-router-dom'
export default function LandingPage() {
  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="flex items-center gap-12">
        <Link to="/normal-upload" className="bg-blue-700 text-white md:px-12 py-2 rounded-md font-mono font-bold">
          Normal Upload
        </Link>
        <Link to="display-upload" className="bg-blue-700 text-white md:px-12 py-2 rounded-md font-mono font-bold">
          Display Upload
        </Link>
      </div>
    </div>
  );
}
