import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('akin.a@nimasa.gov.ng');
  const [password, setPassword] = useState('**********');
  const navigate = useNavigate();
  const logoUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/38d3/9dd7/620e6ef37bfb456fdb1e3dc3301dfdb2?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H4GbpajizxQ2lXk-4Rs1DSzcuWOmojsjYJVglTcCNGheKXK4uGqVMu91T6YsHTQbMyzmtz1f2eH0CH7DtuZBquS98n8z4L54LVjdIaQd1hO7m3bcgudKHQ1l3z0tQiNJr2LMQQlvpltbR~zyNuQdcNBuF9yWVgiZAw3-T54Oty5ug39CXtJgP5n2x-fYLFRXPYMvBZ9XMIP2AMyQeFHPMDAm~7Ov8Ws1fNZO9NTQSnHIzg18LitnbyPNxHQSR9S~Mp0IOan4r5DCV4p0wOam65LNv4~qn02kPVUpXyRN18ZSz2ssbmKsfM0LSaLmN6WggTENbHxc3yLkd5m67w60Tg__";

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd perform authentication here
    navigate('/dashboard');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-auto border border-gray-200">
      <div className="flex flex-col items-center space-y-4">
        <img src={logoUrl} alt="NIMASA Logo" className="h-14 w-14" />

        <div className="text-center">
          <h1 className="text-lg md:text-xl font-bold text-black">NIMASA Leave Portal</h1>
          <p className="text-sm text-gray-700 mt-1">Please Sign into your account</p>
        </div>

        <form onSubmit={handleSignIn} className="w-full space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-bold text-gray-800 mb-1.5">
              Username/Employee ID
            </label>
            <input
              type="email"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-input-bg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
            />
          </div>

          <div>
            <label htmlFor="password" aria-label="Password" className="block text-sm font-bold text-gray-800 mb-1.5">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-input-bg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nimasa-blue"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm font-medium text-nimasa-blue hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-nimasa-blue text-white font-bold py-2 rounded-full text-base hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nimasa-blue"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
