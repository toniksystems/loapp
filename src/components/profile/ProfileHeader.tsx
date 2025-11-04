import { Pencil } from 'lucide-react';

const ProfileHeader = () => {
    const profileImageUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e177/7767/d42d3b942aa4a5eb152d05f19a60ebaf?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WR319MyvDZrOh9t9pwpvb8n6XVGUpR6v5GJM71x4WXOrE220zEPBlnTGe3Lv3FW43M2IJgnoevK0Csd85d-S43rp2V2ry5gw1LjNMNgDcQzeHTMRfszLTxgfaCrJFepqloW3x6QJmcqLWDexuE0e8UvwFuIhSd5njPQ62SEkiHC5~ZggQIkVaGNkjYDfTjM-o00ualgpbNIOF0vDxmLP7cUWxiP65W9g9Vo4ZlB4vT~rIHuM2THtLchuq64nCf7b3q1Q6DTIdr4DYz1HU0zJnFXdWGPjewD90Wz-gjm3rriSUe6RNyeQPDAjnP0RokUaUipzacsgAx2aKS3urkVZvA__";

    return (
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col text-center md:text-left md:flex-row items-center gap-5">
                <img src={profileImageUrl} alt="Akin Adebola" className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-nimasa-blue" />
                <div>
                    <h2 className="text-lg md:text-xl font-medium text-nimasa-dark-text">Akin Adebola</h2>
                    <p className="text-base text-gray-600 mt-0.5">Maritime Safety Officer</p>
                    <p className="text-sm text-gray-500 mt-0.5">MS/HR/2015-331</p>
                </div>
            </div>
            <button className="bg-nimasa-blue text-white font-medium py-2 px-5 rounded-full text-base flex items-center gap-2 hover:bg-blue-700 transition-colors w-full md:w-auto justify-center">
                <Pencil size={18} />
                <span>Edit Profile</span>
            </button>
        </div>
    );
};

export default ProfileHeader;
